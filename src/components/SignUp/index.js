import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  form,
  errors,
  onChange,
  loading,
  error,
}) => {
  const {navigate} = useNavigation();

  const [isSecure, setIsSecure] = React.useState(true);
  const showPassword = () => {
    setIsSecure(prev => !prev);
  };
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Demo Contacts</Text>

        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              danger
              retryFn={() => {
                console.log('helloWorld');
              }}
              message={error?.error}
            />
          )}

          <Input
            label="Username"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
            //value={text}
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            //value={text}
            iconPosition="right"
            placeholder="Enter First Name"
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            //value={text}
            iconPosition="right"
            placeholder="Enter Last Name"
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
            //value={text}
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            //value={text}
            icon={
              <TouchableOpacity onPress={showPassword}>
                <Text>{isSecure ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            placeholder="Enter Password"
            iconPosition="right"
            secureTextEntry={isSecure}
            error={errors.password || error?.password?.[0]}
          />
        </View>
       
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;

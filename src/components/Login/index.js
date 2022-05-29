import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({error, onChange, form ,onSubmit, loading, justSignedUp}) => {
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

        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>

          {justSignedUp &&(
            <Message
             success
            message="Account Successfully Created"
            onDismiss={() => {}}
          />
          )}

          {error && !error.error && (
            <Message
              danger
              retry
              retryFn={() => {
                console.log('helloWorld');
              }}
              message="Invalid Credentials"
              onDismiss={() => {}}
            />
          )}

          {error?.error && (
            <Message danger onDismiss={() => {}} message={error?.error} />
          )}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}

            value = {form.userName || null}
            // error={error?.username?.[0]}
          />

          <Input
            label="Password"
            icon={
              <TouchableOpacity onPress={showPassword}>
                <Text>{isSecure ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            placeholder="Enter Password"
            value = {form.password || null}
            iconPosition="right"
            secureTextEntry={isSecure}
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            //error={error?.password?.[0]}
          />
        </View>

        <CustomButton
          disabled={loading}
          loading={loading}
          primary
          onPress={onSubmit}
          title="Submit"
        />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;

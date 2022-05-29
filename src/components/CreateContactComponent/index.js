import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/actionTypes/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/imagePicker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  form,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
}) => (
  <View style={styles.container}>
    <Container>
      <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
      <TouchableOpacity onPress={openSheet}>
        <Text style={styles.chooseText}>Choose Image</Text>
      </TouchableOpacity>
      <Input
        onChangeText={value => {
          onChangeText({name: 'firstName', value: value});
        }}
        label=" First Name"
        placeholder=" Enter First Name"
        error={error?.first_name?.[0]}
      />
      <Input
        onChangeText={value => {
          onChangeText({name: 'lastName', value: value});
        }}
        label=" Last Name"
        placeholder=" Enter Last Name"
        error={error?.last_name?.[0]}
      />
      <Input
        icon={
          <CountryPicker
            withFilter
            withFlag
            withCountryNameButton={false}
            withCallingCode
            withEmoji
            withCallingCodeButton
            countryCode={form.countryCode || undefined}
            onSelect={v => {
              const phoneCode = v.callingCode[0];
              const cCode = v.cca2;
              setForm({...form, phoneCode: phoneCode, countryCode: cCode});
            }}
          />
        }
        style={{paddingLeft: 10}}
        iconPosition="left"
        onChangeText={value => {
          onChangeText({name: 'phoneNumber', value: value});
        }}
        label=" Phone number"
        placeholder=" Enter Phone number"
        error={error?.phone_number?.[0]}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 17}}>Add to Favorites</Text>

        <Switch
          trackColor={{false: '#767577', true: colors.primary}}
          thumbColor="#ffffff"
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleValueChange}
          value={form.isFavorite}
        />

      
      </View>

      <CustomButton
        loading={loading}
        disabled={loading}
        primary
        title="Submit"
        onPress={onSubmit}
      />
    </Container>
    <ImagePicker ref={sheetRef} />
  </View>
);

export default CreateContactComponent;

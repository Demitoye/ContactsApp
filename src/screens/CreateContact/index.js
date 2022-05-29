import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {navigate} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error, data},
    },
  } = useContext(GlobalContext);

const  sheetRef = useRef(null)

  const [form, setForm] = useState({});

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const closeSheet = () =>{
    if(sheetRef.current){
      sheetRef.current.close()
    }
  }

  const openSheet = () =>{
    if(sheetRef.current){
      sheetRef.current.open()
    }
  }


  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef = {sheetRef}
      closeSheet = {closeSheet}
      openSheet = {openSheet}
    />
  );
};

export default CreateContact;

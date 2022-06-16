import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(null);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getSettings();

      return () => {};
    }, []),
  );

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type="material" style={{padding: 10}} name="menu" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;

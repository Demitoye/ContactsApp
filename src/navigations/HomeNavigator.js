import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';
import ContactDetail from '../screens/ContactDetail';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import Logout from '../screens/Logout';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

//screen>>>Home>>>Drawer

//Screens>>>Auth>>>>

export default HomeNavigator;

import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import logoutUser from '../../context/actions/auth/logoutUser';
import {GlobalContext} from '../../context/Provider';

const Logout = () => {
  const {authDispatch} = React.useContext(GlobalContext);
  React.useEffect(() => {
    logoutUser()(authDispatch);
    console.log('This is an item');
  }, []);
  return <ActivityIndicator />;
};

export default Logout;

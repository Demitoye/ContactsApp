import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native'
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';


const AuthNavigator = () => {

    const AuthStack = createStackNavigator();

    return(
        <AuthStack.Navigator screenOptions = {{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name= {REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Stack = createNativeStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
    }
import { View, Text } from 'react-native'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Toptab from './Navigator/Toptab';
import TabNav from './Navigator/MainStack'
import MainStack from './Navigator/MainStack';

// const Stack = createStackNavigator();

export default function App() {
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen name="MainScreen" component={Navigation} />
  //   {/* <Stack.Screen name="TabNav" component={TabNav} /> */}

  // </Stack.Navigator>
  // </NavigationContainer>

 
 <MainStack />




  )
}
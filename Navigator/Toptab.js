import {View, Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Status from '../Components/Status';
import Camera from '../Components/Camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
// camera-reverse-sharp
import MessageScreen from '../Screens/MessageScreen';
import Calls from '../Components/Calls';
const Tab = createMaterialTopTabNavigator();
export default function Toptab() {
  return (
      <Tab.Navigator
      initialRouteName='Chats'
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'white',

          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '800',
            alignItems: 'center',
            marginTop: 20,
          },
          tabBarStyle: {backgroundColor: '#2e5f55', height: 70},
        })}>
          <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
           title:"message",
            tabBarIcon: ({color}) => (
              <Ionicons name="camera" color={color} size={26}  />
            ),
            tabBarIconStyle:{marginTop:20,marginLeft:-40},
            tabBarShowLabel:false,  
          }}
        />
         <Tab.Screen name="Chats" component={MessageScreen} 
         options={{
          tabBarLabelStyle: {
           fontSize:17,
           fontWeight:"bold",
           marginTop:20,
           marginLeft:-90
},
         }}

         />
        <Tab.Screen name="Status" component={Status} 
              options={{
          tabBarLabelStyle: {
           fontSize:17,
           fontWeight:"bold",
           marginTop:20,
           marginLeft:-40
},
         }}
        />
        <Tab.Screen name="Calls" component={Calls} 
              options={{
          tabBarLabelStyle: {
           fontSize:17,
           fontWeight:"bold",
           marginTop:20,
           marginLeft:-20},
         }}
        />
      </Tab.Navigator>

  );
}

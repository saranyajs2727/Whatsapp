import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Toptab from './Navigator/Toptab';
import TabNav from './Navigator/MainStack'
import MainStack from './Navigator/MainStack';
// import onAuthStateChanged  from 'react-native-firebase/auth';
// import auth from "./firebase";
import { LogBox } from "react-native";
import Login from './Components/Login';
import Providers from './Navigator/Providers';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const Stack = createStackNavigator();


export default function App() {
 

  return (
    <Providers />
  
  )
}


// otp generated

// import React, { useState } from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { NavigationContainer } from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

// const App = () => {
// //  const navigation = useNavigation();
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   const signInWithPhoneNumber =  async () => {
//     console.log("called");
//     const confirmation = await auth().signInWithPhoneNumber('+91 63800 55351');
//     console.log(confirmation);
//     setConfirm(confirmation);
//   }

//   const confirmCode = async () => {
//     try {
//       await confirm.confirm(code);
//       // code =598625
//     console.log(confirm.confirm(code));
//   navigation.navigate('StatusEdit')
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber()}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }

// export default App;
// import React, { useEffect } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
//     TextInput,
//     Alert,
//     Image,
//     Button,
//     ScrollView,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native'
// import { useSelector, useDispatch } from 'react-redux';
// import { setName, setPassword } from '../Redux/action';




// export default function Login() {

//     const { name, password } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();
//     const navigation =useNavigation()

//     const setData = async () => {
//         setName('');
//         setPassword('');
//         if (name.length == 0 || password.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 dispatch(setName(name));
//                 dispatch(setPassword(password));
             
//                 navigation.navigate('Whatsapp');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }

//     return (
//         <View style={styles.body} >
//             <Text style={styles.text}>
//             </Text>
//             <Image style={styles.image} source={require('../Assets/Images/img.jpeg')} />
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter your name'
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder='Enter password'
//                 onChangeText={(value) => dispatch(setPassword(value))}
//             />

import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, Button , TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { setName, setPassword } from '../Redux/action';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigator/AuthProvider';
export default function Login({navigation}) {
  
    const {login} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signUp");

  async function handlePress() {
    login(email, password)
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true){
        }
        else{
            alert("enter a valid email");
        }
    
  
  }
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{ color: "#075e54", fontSize: 24, marginBottom: 20 }}
      >
        Welcome to Whatsapp
      </Text>
      <Image
        source={require("../Assets/Images/img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: "#128c7e",
            borderBottomWidth: 2,
            width: 200,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: "#128c7e",
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title='Login'
            disabled={!password || !email}
            color="#25d366"
             onPress={handlePress}
            // onPress={() => login(email, password)}
        
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={ () => navigation.navigate('SignUp')}
        
        >
  
          <Text style={{ color: "#128c7e" }}>
          
           "Don't have an account? Sign Up"
          </Text>
        </TouchableOpacity>
       
      </View>
      
    </View>
  );
}
import React from 'react'
// import {Icons } from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Entypo';
import { View, Image, Text,ScrollView,StyleSheet,Button} from 'react-native'
const blue="#3777f0";
const grey="lightgrey";
 const myId='u1';

const ChatScreen = ( {message}) => {
  const Message = () => {
    return 'u1' === 'u1';
 
  }
 
  // const isMe = message.id === myId;
  return ( 
 <View style={[styles.ChatScreen ,{
 backgroundColor: Message() ? '#DCF8C5' : 'white',
          marginLeft: Message() ? 50 : 0,
          marginRight: Message() ? 0 : 50,}]}>
   <Text style={{ color : Message() ? 'black' : 'white'}}>hi</Text>
  

</View>



  )
}


export default ChatScreen

const styles =StyleSheet.create({
    ChatScreen:{
       padding:10,
        margin:10,
        borderRadius:10,
        
       maxWidth:"75%",
     },
     leftContainer: {
        backgroundColor: "#3777f0",
        marginLeft: 10,
        marginRight: "auto",
      },
      rightContainer: {
        backgroundColor: "#A9A9A9",
        marginLeft: "auto",
        marginRight: 10,
        alignItems: "flex-end",
      },
})
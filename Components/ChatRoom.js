import React from 'react'
import { View,Text,FlatList,Button,ImageBackground,StyleSheet} from 'react-native'
import ChatScreen from "../Components/ChatScreen"
import  ChatData from "../Assets/Data"
import MessageInput from "../Components/MessageInput"
const image = { uri: "https://66.media.tumblr.com/b9fcad7825cdf6159325a5ca7d703127/tumblr_ouztgbH0CG1vj8v9mo5_1280.png" };
const ChatRoom = () => {
return (
    <View style={{flex:1}}>

     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <FlatList
    data={ChatData}
    renderItem={({ item }) => <ChatScreen message={item} />
      }
    showsVerticalScrollIndicator={false}
   
     />
    
    <MessageInput /> 
    </ImageBackground>
 



    </View>
  )
}

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
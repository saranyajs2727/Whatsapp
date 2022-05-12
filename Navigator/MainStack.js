

// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet,Button,TouchableOpacity,Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageInput from '../Components/MessageInput';
import Toptab from './Toptab';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import UserScreen from '../Components/UserScreen';
import ChatScreen from '../Components/ChatScreen';
import ChatRoom from '../Components/ChatRoom';
import ImageSent from '../Components/ImageSent';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Contacts from '../Components/ContactScreen';
// import AddContact from '../Components/AddContact';
import { GiftedChat } from 'react-native-gifted-chat';
import GiftedChats from '../Components/GiftedChats';
import NewContact from '../Screens/NewContact';
import StatusScreen from '../Components/StatusScreen';


const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Whatsapp'
      screenOptions={{
          headerStyle:{
            backgroundColor:"#2e5f55"
          },
        } } 
        >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Whatsapp" component={Toptab}
        options={{
          headerStyle:{
            backgroundColor:"#2e5f55",
            borderBotton:"black",
            borderWidth:5,
          
          },
          headerTitleStyle:{
            color:"white",
            fontWeight:"600",
            fontSize:26,
          },
          headerRight: () => (
            <View style={{display:"flex",flexDirection:"row",marginRight:10}}> 
            <Icon type="ionicon" name="md-search" size={30} color="white" style={{marginRight:25}} />
            {/* <TouchableOpacity onPress={handle}> */}
            
            <Icons name="dots-three-vertical"  size={25} color="white"  style={{marginTop:5,marginLeft:10}}/>
            {/* </TouchableOpacity> */}

             
             </View>
          ),

        }}
         />
             <Stack.Screen
 name="ChatRoom"
  component={ChatRoom} 
        options={({ route })  => ({
          title: "Saranya",
          headerTitleStyle:{
            color:"white",
            fontWeight:"500",
            fontSize:25,
          },
          headerLeft: () =>{
            <View>
            <Text>hekki</Text>
              <Image style={{width:100,height:100,borderRadius:20}} source={{uri:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'}}  />
            </View>
          },
         
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            

 
              <Icon name="md-videocam" size={28} color={'white'} style={{marginRight:20}}/>
              <Icon name="call" size={25} color={'white'} style={{marginRight:20}} />
              <Icons name="dots-three-vertical" size={25} color={'white'} />
            </View>
          )
        })}
      />
         
         <Stack.Screen name='ImageSent' component={ImageSent}/>
         <Stack.Screen name='GiftedChat' component={GiftedChats}
              options={({ route })  => ({
          title: "saranya",
          headerTitleStyle:{
            color:"white",
            fontWeight:"500",
            fontSize:21,
          },
              })}
         />
         <Stack.Screen name='Contacts' component={Contacts}
            options={({ route })  => ({
          title: "Select Contact",
          headerTitleStyle:{
            color:"white",
            fontWeight:"500",
            fontSize:21,
          },
       
         
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            
              <Icon name="search" size={25} color={'white'} style={{marginLeft:10}} />
              <Icons name="dots-three-vertical" size={25} color={'white'} />
            </View>
          )
        })}
         />
         <Stack.Screen name='NewContact' component={NewContact}
            options={({ route })  => ({
          title: "New group",
          // subtitle: {AddParticipants},
          headerTitleStyle:{
            color:"white",
            fontWeight:"700",
            fontSize:25,
          },
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              // width: 100,
              marginLeft:100,
            }}>
            
              <Icon name="search" size={28} color={'white'} />
             
            </View>
          )
        })}
     
         /> 
           <Stack.Screen name='StatusScreen' component={StatusScreen}
             options={{headerShown:false}}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

// const handle = () => {
//   <MenuProvider>
// <Menu>
//   <MenuTrigger text='Select action' />
//   <MenuOptions>
//     <MenuOption onSelect={() => alert(`Save`)} text='Save' />
//     <MenuOption onSelect={() => alert(`Delete`)} >
//       <Text style={{color: 'red'}}>Delete</Text>
//     </MenuOption>
//     <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
//   </MenuOptions>
//   </Menu>
//   </MenuProvider>
// } 
// import React ,{useState} from 'react'
// // import {Icons } from 'react-native-vector-icons/FontAwesome5';
// // import Icons from 'react-native-vector-icons/Entypo';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Entypo';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { View, Image, Text,ScrollView,StyleSheet,Button,TextInput,TouchableOpacity,FlatList,} from 'react-native'
// const blue="#3777f0";
// const grey="lightgrey";
//  const myId='u1';

// const ChatScreen = ( {messages}) => {

//   const navigation = useNavigation();
//   const [message, setMessage] = useState('');
//   const [myUserId, setMyUserId] = useState(null);
//   const onPress = () => {
//     setMessage('');
//   };
//   const ImageCall = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         console.log(image);
//         navigation.navigate('ImageSent', {
//           image1: image,
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const Message = () => {
//     return 'u1' === 'u1';
 
//   }

 
//   // const isMe = message.id === myId;
  
// //  <View style={[styles.ChatScreen ,{
// //  backgroundColor: Message() ? '#DCF8C5' : 'white',
// //           marginLeft: Message() ? 50 : 0,
// //           marginRight: Message() ? 0 : 50,}]}>
// //    <Text style={{ color : Message() ? 'black' : 'white'}}>hi</Text>
  

// // </View>
// return ( 

// <View style={styles.container}>
// <View style={styles.mainContainer}>

//   <Icons
//     name="laugh-beam"
//     size={24}
//     color="grey"
//     style={{marginBottom: 8}}
//   />
//   <TextInput
//     placeholder={'Type a message'}
//     style={styles.textInput}
//     multiline
//     value={message}
//     onChangeText={setMessage}
//   />

//   <Icon
//     name="attachment"
//     size={24}
//     color="grey"
//     style={styles.icon}
//     onPress={ImageCall}
//   />
//   <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
//     {!message && (
//       <Icon name="camera" size={24} color="grey" style={styles.icon} />
//     )}
//   </TouchableOpacity>
// </View>
// <TouchableOpacity onPress={onPress}>
//   <View style={styles.buttonContainer}>
//     {!message ? (
//       <Icons name="microphone" size={28} color="white" />
//     ) : (
//       <MaterialIcons name="send" size={28} color="white" />
//     )}
//   </View>
// </TouchableOpacity>
// <View>
// <FlatList
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{padding: 20, paddingBottom: 100}}
//         data={todos}
//         renderItem={({item}) => <ListItem todo={item} />}
//       />
// </View>
// </View>



//   )
// }


// export default ChatScreen

// const styles =StyleSheet.create({
//     ChatScreen:{
//        padding:10,
//         margin:10,
//         borderRadius:10,
        
//        maxWidth:"75%",
//      },
//      leftContainer: {
//         backgroundColor: "#3777f0",
//         marginLeft: 10,
//         marginRight: "auto",
//       },
//       rightContainer: {
//         backgroundColor: "#A9A9A9",
//         marginLeft: "auto",
//         marginRight: 10,
//         alignItems: "flex-end",
//       },
//       root: {
//         padding: 10,
//         flexDirection: 'row',
//       },
//       container: {
//         flexDirection: 'row',
//         margin: 10,
//         alignItems: 'flex-end',
//         // marginTop:550
//       },
//       mainContainer: {
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         padding: 10,
//         borderRadius: 25,
//         marginRight: 10,
//         flex: 1,
//         alignItems: 'flex-end',
//       },
//       textInput: {
//         flex: 1,
//         marginHorizontal: 10,
//         borderRadius: 20,
//         color: 'black',
//         // backgroundColor:"red",
//         height: 35,
//         marginTop: 5,
//       },
//       icon: {
//         marginHorizontal: 5,
//       },
//       buttonContainer: {
//         backgroundColor: '#2e5f55',
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       inputContainer: {
//         backgroundColor: '#f2f2f2',
//         flex: 1,
//         marginRight: 10,
//         borderRadius: 25,
//         borderWidth: 1,
//         borderColor: '#dedede',
//         alignItems: 'center',
//         flexDirection: 'row',
//         padding: 5,
//       },
//       fill: {
//         flex: 1,
//       },
// })
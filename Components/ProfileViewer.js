// import { View, Text } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function ProfileViewer() {
//   return (
//     <View
//               style={{
//                 position: 'absolute',
//                 zIndex: 1,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(52,52,52,0.8)',
//               }}>
//               <StatusBar backgroundColor="#525252" barStyle="dark-content" />
//               <View
//                 style={{
//                   position: 'absolute',
//                   top: windowHeight / 6,
//                   left: windowWidth / 18,
//                   backgroundColor: 'white',
//                   width: '90%',
//                   height: 465,
//                   borderRadius: 15,
//                   zIndex: 1,
//                   elevation: 50,
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     paddingVertical: 10,
//                     paddingHorizontal: 15,
//                   }}>
//                   <Image
//                     source={image}
//                     style={{
//                       width: 30,
//                       height: 30,
//                       borderRadius: 100,
//                     }}
//                   />
//                   <View style={{paddingLeft: 8}}>
//                     <Text style={{fontSize: 12, fontWeight: '600'}}>
//                       the_anonymous_guy
//                     </Text>
//                   </View>
//                 </View>
//                 <Image source={image} style={{width: '100%', height: '80%'}} />
//                 <View
//                   style={{
//                     justifyContent: 'space-around',
//                     width: '100%',
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     padding: 8,
//                   }}>
//                   <Icon icon={faHeart} size={20} />
//                   <Icon icon={faUserCircle} size={20} />
//                   <Icon icon={faPaperPlane} size={20} />
//                 </View>
//               </View>
//               </View>
//   )
// }


import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
const ProfileViewer = () => {
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      SetshowWarning(true);
    }
  }

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
     <View
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(52,52,52,0.8)',
              }}>
              <StatusBar backgroundColor="#525252" barStyle="dark-content" />
              <View
                style={{
                  position: 'absolute',
                  top: windowHeight / 6,
                  left: windowWidth / 18,
                  backgroundColor: 'white',
                  width: '90%',
                  height: 465,
                  borderRadius: 15,
                  zIndex: 1,
                  elevation: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}>
                  <Image
                    source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 100,
                    }}
                  />
                  <View style={{paddingLeft: 8}}>
                    <Text style={{fontSize: 12, fontWeight: '600'}}>
                      the_anonymous_guy
                    </Text>
                  </View>
                </View>
                <Image    source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} style={{width: '100%', height: '80%'}} />
                <View
                  style={{
                    justifyContent: 'space-around',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                  }}>
                  <MaterialIcons name="message" size={25} color="#2e5f55" />
                  <MaterialIcons name="call" size={25} color="#2e5f55"/>
                  <Ionicons name="ios-videocam" size={30} color="#2e5f55"/>
                  <Pressable
              onPress={() => SetshowWarning(false)}
             
              android_ripple={{color:'#fff'}}
            >
               <AntDesign name="infocirlceo" size={30} color="#2e5f55"/>
            </Pressable>
                </View>
              </View>
              </View>
      </Modal>
      
     
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
         hello
        </Text>
      </Pressable>
   
    </View >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button:{
    backgroundColor:'#00ffff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  }
});

export default ProfileViewer;
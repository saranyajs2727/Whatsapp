import { View, Text,ImageBackground,StyleSheet,Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function AppInfo() {
    const navigation = useNavigation();
  const image = { uri: "https://wallpaperaccess.com/full/2224368.png" };
  return (
    <View>
        <ImageBackground source={image} resizeMode="cover" style={{width:"100%",height:"100%"}}>
      <Text style={styles.text}>WhatsApp Messenger</Text>
      <Text style={styles.version}>Version 2.22.3.77</Text>
      <View style={{marginTop:40,marginLeft:150}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png',
        }}
      />
      </View>
      <Text style={styles.version}>2010-2022 WhatsApp Inc </Text>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
   text:{
    marginTop:200,
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "600",
    textAlign: "center",
},
version:{
    color: "white",
    fontSize: 18,
    // lineHeight: 40,
    fontWeight: "300",
    textAlign: "center",
 marginTop:-20
},
tinyLogo: {
    width: 80,
    height: 80,
    marginBottom:20
  },
  });
import { View, Text,Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-vector-icons/MaterialCommunityIcons';
const ImageSent = ({route}) => {
    const image=route.params.image1?.path;
    const hello = () =>{
        console.log(image)
    }
    
  return (
    <View>
   
 
      <Image  source={{uri:image}}  style={{width:350,height:400,margin:10}}/>

    </View>
  )
}

export default ImageSent
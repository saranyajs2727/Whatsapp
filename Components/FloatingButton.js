import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {useNavigation} from '@react-navigation/native'

const FloatingButton = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
     <Icon name="message-reply-text" size={25} color="white" />
      </TouchableOpacity>
       </View>
  )
}

export default FloatingButton
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#70c86d",
      width: 55,
      height: 55,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex:1
    }
  })
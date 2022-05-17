import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const StatusButton = () => {
    const navigation = useNavigation();
 
  return (
      

<View style={{
    flexDirection:"column",
    position:'absolute',
    bottom: 20,
    right: 20,
    padding:10,
}} >
    
    <TouchableOpacity onPress={() => navigation.navigate('StatusEdit')} style={styles.containers}>
      <Icons name="edit" size={25} color="grey" />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.container}>
      <Icon name="camera" size={25} color="white" />
    </TouchableOpacity>
   
  </View>
  

  
  )
}

export default StatusButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2e5f55',
      width: 55,
      height: 55,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      zIndex: 1,
   
    },
    containers: {
        backgroundColor: '#D3D3D8',
        width: 55,
        height: 55,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        zIndex: 1,
     
      },
  });
  
  
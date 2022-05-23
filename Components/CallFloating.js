import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function CallFloating() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('NewCall')}>

        <Icon name="add-call" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2e5f55',
      width: 55,
      height: 55,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex: 1,
    },
  });
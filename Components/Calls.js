import { View, Text,SafeAreaView,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import ChatBoxData from "../Assets/Data"
import CallScreen from './CallScreen'
export default function Calls() {
  return (
    <SafeAreaView >

    
<FlatList
    data={ChatBoxData}
    renderItem={({ item }) =>  <CallScreen ChatBox={item} />}
    showsVerticalScrollIndicator={false}
   
     />
     
     <View style={styles.root}>
    <View style={styles.buttonContainer}>
   <Text style={styles.buttonText}>+</Text>
   
  </View>
  </View>


    
    </SafeAreaView>

 
  )
}
const styles = StyleSheet.create({
  root:{
        padding:10,
        flexDirection:"row"
       },
       buttonContainer :{
        width: 50,
        height: 50,
        backgroundColor: "#00FF00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },
})
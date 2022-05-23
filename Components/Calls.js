import { View, Text,SafeAreaView,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import ChatBoxData from "../Assets/Data"
import CallScreen from './CallScreen'
import CallFloating from './CallFloating'
export default function Calls() {
  return (
    <SafeAreaView >

    {/* floating button for call  */}
    <CallFloating />

    {/* call Screen data */}
<FlatList
    data={ChatBoxData}
    renderItem={({ item }) =>  <CallScreen ChatBox={item} />}
    showsVerticalScrollIndicator={false}
   
     />
     
    

    
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
import React from 'react'
import { View, FlatList,Text ,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native'

import ChatBoxData from "../Assets/Data"
import FloatingButton from './FloatingButton'
import User from './User'

const UserScreen= () => {
  return (
    <SafeAreaView >

<FloatingButton />
<FlatList
    data={ChatBoxData}
    renderItem={({ item }) =>  <User ChatBox={item} />}
    showsVerticalScrollIndicator={false}
   
     />
    
     
     {/* <View style={styles.root}>
    <View style={styles.buttonContainer}>
   <Text style={styles.buttonText}>+</Text> */}
 
  {/* </View> */}
  {/* </View> */}


    
    </SafeAreaView>

 
  )
}



export default UserScreen

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
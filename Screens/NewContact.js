import { View, Text ,StyleSheet,FlatList,Image,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import ChatBoxData from "../Assets/Data"
import { useNavigation } from '@react-navigation/native';
import {  } from 'react-native-gesture-handler';

const NewContact = () => {
    
  return (
    <View>
      <FlatList
    data={ChatBoxData}
    renderItem={({ item }) =>  <Users ChatBox={item} />}
    showsVerticalScrollIndicator={false}
   
     />
    </View>
  )
}

export default NewContact




const Users = ({ChatBox}) => {
    const navigation = useNavigation();
    const user=ChatBox.users[1]
  return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('GiftedChat')}>
    <View style={styles.container}>
  
   <Image style={styles.image} source={{uri:user.imageUri}}  />
   <View style={styles.fill}>
     <View style={styles.row}>
       <Text style={styles.name}>
         {user.name}
       </Text>
  </View>
  
  
   </View>
      
     
    </View>
    </TouchableWithoutFeedback>

  ) 
}


const styles = StyleSheet.create({
    container:{
        padding:15,
        marginTop:10,
        flexDirection: 'row',
    },
    image:{
        height:50,
        width:50,
        borderRadius:50,
        marginRight:10,
        marginLeft:9,
    },
    fill:{
        flex: 1,
        justifyContent:"center",
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:3,
        marginLeft:10
    },
    text:{
   color:"#228B62",
   fontWeight:"600",
    },
    badgeText:{
        color:"white",
        fontSize:12,
        fontWeight:"bold",
        
      },
      notify:{
        backgroundColor:"#228B62",
        borderRadius:20,
        height:20,
        width:20,
        marginRight:15,
        justifyContent:"center",
        alignItems:"center",


      },

})
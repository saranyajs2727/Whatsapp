import React from 'react'
import { View, Image, Text, FlatList,StyleSheet,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import {useNavigation} from '@react-navigation/native'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const User= ( {ChatBox }) => {
//  console.log(ChatBox);
const navigation =useNavigation()
 const user=ChatBox.users[1]
  return (
   <TouchableWithoutFeedback onPress={() => navigation.navigate('ChatRoom')}>
    <View style={styles.container}>
    {/* <TouchableOpacity
                      style={{paddingBottom: 5}}
                        key={user.id}
                        onPressIn={() => props.data(user.imageUri)}
                        onPressOut={() => props.data(null)}>
                        <Image
                          source={user.imageUri}
                          style={styles.image}
                        />
                      </TouchableOpacity> */}
   <Image style={styles.image} source={{uri:user.imageUri}}  />
   <View style={styles.fill}>
     <View style={styles.row}>
       <Text style={styles.name}>
         {user.name}
       </Text>
       <Text style={styles.text}>9.50 AM   </Text>
    </View>
    <View style={styles.row}>
    <Text  numberOfLines={1}  >{ChatBox.lastMessage.content}</Text>

   {ChatBox.newMessages ? <View style={styles.notify}>
    <Text style={styles.badgeText} >{ChatBox.newMessages}</Text>
    </View>  : null }

    </View>
  
   </View>
      
     
    </View>

   

  </TouchableWithoutFeedback>
 
  )
}

export default User


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
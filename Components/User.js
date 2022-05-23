import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import {useNavigation} from '@react-navigation/native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const User = ({ChatBox}) => {
  //  console.log(ChatBox);
  const navigation = useNavigation();
  const user = ChatBox.users[1];

  // modal 
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
    const [name, SetName] = useState('');
    const [submitted, SetSubmitted] = useState(false);
    const [showWarning, SetshowWarning] = useState(false);
  

    const onPressHandler = () => {
      if (name.length > 3) {
        SetSubmitted(!submitted);
      } else {
        SetshowWarning(true);
      }
    }


  return (
  
      <View style={styles.container}>

      {/* modal for profile */}
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() =>
          SetshowWarning(false)
        }
        animationType='slide'
        hardwareAccelerated
      >
     <View
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(52,52,52,0.8)',
              }}>
              <StatusBar backgroundColor="#525252" barStyle="dark-content" />
              <View
                style={{
                  position: 'absolute',
                  top: windowHeight / 6,
                  left: windowWidth / 18,
                  backgroundColor: 'white',
                  width: '90%',
                  height: 465,
                  zIndex: 1,
                  elevation: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}>
              
                  <View style={{paddingLeft: 8}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {user.name}
                    </Text>
                  </View>
                </View>
                <Image source={{uri: user.imageUri}} style={{width: '100%', height: '80%'}} />
                <View
                  style={{
                    justifyContent: 'space-around',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                  }}>
                  <MaterialIcons name="message" size={25} color="#2e5f55" />
                  <MaterialIcons name="call" size={25} color="#2e5f55"/>
                  <Ionicons name="ios-videocam" size={30} color="#2e5f55"/>
                  <Pressable
              onPress={() => SetshowWarning(false)}
             
              android_ripple={{color:'#fff'}}
            >
               <AntDesign name="infocirlceo" size={30} color="#2e5f55"/>
            </Pressable>
                </View>
              </View>
              </View>
      </Modal>


      
       <View style={{flexDirection:"row",width:"100%"}}>
       <Pressable
        onPress={onPressHandler}
      >
        <Image style={styles.image} source={{uri: user.imageUri}} />
        
      </Pressable>



      <TouchableWithoutFeedback onPress={() => navigation.navigate('ChatRoom')}>
        <View style={styles.fill}>
       
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>9.50 AM </Text>
          </View>
          <View style={styles.row}>
            <Text numberOfLines={1}>{ChatBox.lastMessage.content}</Text>

            {ChatBox.newMessages ? (
              <View style={styles.notify}>
                <Text style={styles.badgeText}>{ChatBox.newMessages}</Text>
              </View>
            ) : null}
          </View>
       
        </View>
        </TouchableWithoutFeedback>
       </View>
     
                  
                     
                    
   
      
      </View>

  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 9,
    flexDirection:"row",
  },
  fill: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: '#228B62',
    fontWeight: '600',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notify: {
    backgroundColor: '#228B62',
    borderRadius: 20,
    height: 20,
    width: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



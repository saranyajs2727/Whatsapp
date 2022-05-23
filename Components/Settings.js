import {  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Settings() {
  const navigation = useNavigation();
  
  return (
    <View>
    {/* profile */}
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <View style={styles.container}>
          <Image style={styles.image}       source={{
          uri: 'https://wallpaperaccess.com/full/454132.jpg',
        }}/>
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Saranya</Text>
             
                <TouchableOpacity onPress={() => navigation.navigate('QrCode')}>
                  <FontAwesome5
                    name="qrcode"
                    size={25}
                    color="grey"
                    style={{marginRight: 20}}
                  />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text>___Law of Attraction___</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Account */}

      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <View style={styles.container}>
        <Icon
                    name="key"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Account</Text>
             
               
            </View>
            <View style={styles.row}>
              <Text>Privacy,security,change Number</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Chats */}
      <TouchableOpacity onPress={() => navigation.navigate('Input')}>
        <View style={styles.container}>
        <MaterialIcons
                    name="chat"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Chats</Text>
             
               
            </View>
            <View style={styles.row}>
              <Text>Theme,wallpapers,chat history</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
   
   {/* Notification */}
   <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <View style={styles.container}>
        <Ionicon
                    name="notifications"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Notification</Text>
             
               
            </View>
            <View style={styles.row}>
              <Text>Message,group & call tones</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Storage */}
      <TouchableOpacity onPress={() => navigation.navigate('Input')}>
        <View style={styles.container}>
        <FontAwesome5
                    name="circle-notch"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>storage and data</Text>
             
               
            </View>
            <View style={styles.row}>
              <Text>Network usage,auto download</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
       
       {/* Help */}

       <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        <View style={styles.container}>
        <Ionicon
                    name="help-circle-outline"
                    size={35}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Help</Text>
             
               
            </View>
            <View style={styles.row}>
              <Text>Help center,contact us,privancy policy</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     {/* Invite friend */}

     <TouchableOpacity onPress={() => navigation.navigate('Input')}>
        <View style={styles.container}>
        <FontAwesome5
                    name="user-friends"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Invite a friend</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={{textAlign:"center",marginTop:-10}}>
         from
     </Text>
      <Text  style={{textAlign:"center",marginTop:2,fontWeight:"bold",fontSize:15,marginBottom:10}}>Meta</Text>



      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 9,
  },
  fill: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    // marginTop:10,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: '#228B22',
    fontWeight: '600',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  icon:{
    marginRight: 20,
    marginTop:8,
      
  },
  notify: {
    backgroundColor: '#228B22',
    borderRadius: 20,
    height: 20,
    width: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
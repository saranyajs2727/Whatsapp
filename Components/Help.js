import { View, Text,StyleSheet,TouchableOpacity,Linking} from 'react-native'
import React from 'react'
import Icons from  'react-native-vector-icons/Feather';
import Icon from  'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Infocirlceo from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native';

export default function Help() {
    const navigation = useNavigation();
    const Help = () =>{
        Linking.openURL('https://faq.whatsapp.com/android/?lang=en');
    }
    const policy = () =>{
        Linking.openURL('https://www.whatsapp.com/legal/?lang=en');
    }
  return (
    <View>
      <TouchableOpacity onPress={Help}>
        <View style={styles.container}>
        <Icons
                    name="help-circle"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Help Center </Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity >
        <View style={styles.container}>
        <Icon
                    name="user-friends"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Contact us </Text>
            
     </View>
     <Text style={{marginTop:5}}>Questions? Need help? </Text>
          </View>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={policy}>
        <View style={styles.container}>
        <Fontisto
                    name="file-1"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Terms and Privacy Policy</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AppInfo")}>
        <View style={styles.container}>
        <Infocirlceo
                    name="infocirlceo"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>App info </Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        flexDirection: 'row',
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
  icon:{
        marginRight: 20,
        marginTop:8,
 },
  
})
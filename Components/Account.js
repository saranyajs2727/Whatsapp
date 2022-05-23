import { View, Text,TouchableOpacity,StyleSheet,Button } from 'react-native'
import React,{useContext} from 'react'
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Navigator/AuthProvider';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from  'react-native-vector-icons/MaterialCommunityIcons';
import Icon from  'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
export default function Account() {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext)
  return (
    <View>
    {/* Privacy */}
      <TouchableOpacity >
        <View style={styles.container}>
        <Fontisto 
                    name="locked"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Privacy</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>
{/* Security */}

      <TouchableOpacity >
        <View style={styles.container}>
        <Icons
                    name="security"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Security</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Two step verification */}
      <TouchableOpacity >
        <View style={styles.container}>
        <Icon
                    name="typing"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Two step verification</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>

{/* Change Number */}
      
      <TouchableOpacity >
        <View style={styles.container}>
        <Icon
                    name="log-out"
                    size={30}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}> Change Number</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Request account info */}
      <TouchableOpacity >
        <View style={styles.container}>
        <Fontisto
                    name="file-1"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Request account info</Text>
     </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Delete my Account */}
      
      <TouchableOpacity  onPress={logout}>
        <View style={styles.container}>
        <Icons
                    name="delete"
                    size={25}
                    color="grey"
                    style={styles.icon}
                  />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>Delete my Account </Text>
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
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import ChatBoxData from '../Assets/Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function NewCall() {
  const navigation = useNavigation();

  const handle = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.openContactForm({})
        .then(contacts => {
          // work with contacts
          console.log(contacts);
        })
        .catch(e => {
          console.log(e);
        }),
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
        <View style={styles.container}>
          <View
            style={{
              height: 55,
              width: 55,
              backgroundColor: '#2E7B57',
              borderRadius: 40,
            }}>
            <MaterialIcons
              name="group"
              color="white"
              style={{margin: 5}}
              size={40}
            />
          </View>
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>New group</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handle}>
        <View style={styles.container}>
          <View
            style={{
              height: 55,
              width: 55,
              backgroundColor: '#2E7B57',
              borderRadius: 40,
            }}>
            <MaterialIcons
              name="group-add"
              color="white"
              style={{margin: 5}}
              size={40}
            />
          </View>
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>New Contact</Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TouchableOpacity onPress={() => navigation.navigate('QrCode')}>
                  <FontAwesome5
                    name="qrcode"
                    size={25}
                    color="grey"
                    style={{marginRight: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <FlatList
        data={ChatBoxData}
        renderItem={({item}) => <Users ChatBox={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const Users = ({ChatBox}) => {
  const user = ChatBox.users[1];
  const handleCall = () => {
    Linking.openURL(`tel:+1(637)-979-0833`);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: user.imageUri}} />
      <View style={styles.fill}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <TouchableOpacity onPress={handleCall}>
              <Icon
                name="call"
                size={25}
                color="#2E7B57"
                style={{marginRight: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="md-videocam"
                size={25}
                color="#2E7B57"
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

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
    fontSize: 20,
    marginBottom: 3,
    marginLeft: 10,
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

import React, {useState, useEffect} from 'react';
 
// Import all required component
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
 
import Contacts from 'react-native-contacts';
import ListItem from './ListItem';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
 
const Contact = () => {
  let [contacts, setContacts] = useState([]);
 
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
        }).then(() => {
          loadContacts();
        }
      );
    } else {
      loadContacts();
    }
  }, []);
 
  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      })
      .catch(e => {
        alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      });
  };
 
  const search = (text) => {
    const phoneNumberRegex = 
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => 
          a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    }
  };
 
  const openContact = (contact) => {
    console.log(JSON.stringify(contact));
    Contacts.openExistingContact(contact);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      
        <View style={styles.ContactContainer}>
        <Icons
                name="reorder-three-sharp"
                size={30}
                color="grey"
                style={{margin:10,marginLeft:10}}
              />
        <TextInput
          onChangeText={search}
          placeholder="Search"
          style={styles.searchBar}
       
        />

   <Icon
                name="dots-three-vertical"
                size={25}
                color="grey"
                style={{marginTop: 20,marginRight:25,}}
              />
</View>
        
        <FlatList
          data={contacts}
          renderItem={(contact) => {
            {
              console.log('contact -> ' + JSON.stringify(contact));
            }
            return (
              <ListItem
                key={contact.item.recordID}
                item={contact.item}
                onPress={openContact}
              />
            );
          }}
          keyExtractor={(item) => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
};
export default Contact;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4591ed',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? undefined : 15,
   
  },
  ContactContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
});
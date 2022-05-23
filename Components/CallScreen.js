import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CallFloating from './CallFloating';
const CallScreen = ({ChatBox}) => {
  const navigation = useNavigation();
  
  // make a phone call
     
  const handle = () => {
    Linking.openURL(`tel:+1(637)-979-0833`);
  };
  const user = ChatBox.users[1];

  return (
    <View>
    {/* callScreen flatlist data */}
      <TouchableOpacity onPress={() => navigation.navigate('Input')}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: user.imageUri}} />
          <View style={styles.fill}>
            <View style={styles.row}>
              <Text style={styles.name}>{user.name}</Text>
              <TouchableOpacity onPress={handle}>
                <Icon
                  name="call"
                  size={25}
                  color="#2e5f55"
                  style={{marginRight: 2}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text numberOfLines={1}>{ChatBox.lastMessage.createdAt}</Text>

              {/* {ChatBox.newMessages ? <View style={styles.notify}>
    <Text style={styles.badgeText} >{ChatBox.newMessages}</Text>
    </View>  : null } */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CallScreen;
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

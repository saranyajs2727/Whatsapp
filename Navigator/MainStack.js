import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageInput from '../Components/MessageInput';
import Toptab from './Toptab';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatBoxData from '../Assets/Data';
import Icons from 'react-native-vector-icons/Entypo';
import UserScreen from '../Components/UserScreen';
import ChatScreen from '../Components/ChatScreen';
import ChatRoom from '../Components/ChatRoom';
import ImageSent from '../Components/ImageSent';
import CustomMenu from '../Components/CustomMenu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Contacts from '../Components/ContactScreen';
// import AddContact from '../Components/AddContact';
import Communications from 'react-native-communications';
import {GiftedChat} from 'react-native-gifted-chat';
import GiftedChats from '../Components/GiftedChats';
import NewContact from '../Screens/NewContact';
import StatusScreen from '../Components/StatusScreen';
import StatusEdit from '../Components/StatusEdit';
import NewStatus from '../Components/NewStatus';
import PhoneNumber from '../Components/PhoneNumber';
import Otp from '../Components/Otp';
import Login from '../Components/Login';
import {Store} from '../Redux/state';
import Antdesign from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import VideoCall from '../Components/VideoCall';
import Signup from '../Components/Signup';
import ProfileViewer from '../Components/ProfileViewer';
import {useNavigation} from '@react-navigation/native';
import CallFloating from '../Components/CallFloating';
import NewCall from '../Components/NewCall';
import ContactScreen from '../Components/ContactScreen';
import QrCode from '../Components/QrCode';
import Contact from '../Components/Contactlist/Contact';
import ModalDropdown from 'react-native-modal-dropdown';
import Settings from '../Components/Settings';
import InviteFriend from '../Components/InviteFriend';
import TodoList from '../Components/Todolist';
import Account from '../Components/Account';
import Notification from '../Components/Notification';
import Help from '../Components/Help';
import AppInfo from '../Components/AppInfo';
const Stack = createNativeStackNavigator();

function MainStack() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [showWarning, SetshowWarning] = useState(false);
  const [ContactModal, setContactModal] = useState(false);
  const onPressMenu = () => {
    SetshowWarning(!showWarning);
  };
  const onContactModal = () => {
    setContactModal(!ContactModal);
  };
  console.log('call', showWarning);
  // console.log(showWarning, 'showWarning');
  // useEffect(()=>{
  //   console.log(showWarning,"hh")
  // },[navigation])

  // Rbsheet
  const refRBSheet = useRef();
  const newContentFunction = () => {
    setContactModal(false);
    refRBSheet.current.open();
  };

  return (
    <Provider store={Store}>
      <Stack.Navigator
        // initialRouteName='Whatsapp'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2e5f55',
          },
        }}>
        <Stack.Screen
          name="Whatsapp"
          component={Toptab}
          options={{
            headerStyle: {
              backgroundColor: '#2e5f55',
              borderBotton: 'black',
              borderWidth: 5,
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: '600',
              fontSize: 26,
            },
            headerTintColor: 'white',
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <Icon
                  type="ionicon"
                  name="md-search"
                  size={30}
                  color="white"
                  style={{marginRight: 25}}
                />

                {/* Popup menu modal */}

                <Modal
                  visible={showWarning}
                  transparent
                  onRequestClose={() => SetshowWarning(false)}
                  animationType="fade"
                  hardwareAccelerated>
                  <View
                    style={{
                      position: 'absolute',
                      marginBottom: 200,
                      zIndex: 1,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(52,52,52,0.8)',
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        top: windowHeight / 120,
                        left: windowWidth / 2,
                        backgroundColor: 'white',
                        width: '50%',
                        height: 300,
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
                        <View style={{paddingLeft: 2}}>
                          <TouchableOpacity
                            style={{padding: 10}}
                            onPress={() => (
                              navigation.navigate('Todolist'),
                              SetshowWarning(false)
                            )}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              New Group
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              New broadcast
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Linked Devices
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Starred message
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Payment
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={{padding: 10}}
                            onPress={() => navigation.navigate('Settings')}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Settings
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View
                        style={{
                          justifyContent: 'space-around',
                          width: 20,
                          marginLeft: 170,
                          marginTop: -280,
                          flexDirection: 'row',
                          alignItems: 'center',
                          // padding: 4,
                          // backgroundColor:"red"
                        }}>
                        <Pressable
                          onPress={() => SetshowWarning(!showWarning)}
                          android_ripple={{color: '#fff'}}>
                          <Antdesign name="close" size={20} color="grey" />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity onPress={() => onPressMenu()}>
                  <Icons
                    name="dots-three-vertical"
                    size={25}
                    color="white"
                    style={{marginTop: 5, marginLeft: 10}}
                  />
                </TouchableOpacity>
                {/* <Button onPress={openHeaderModal} vertical title='hlo'/> */}
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({route}) => ({
            title: 'Sandy',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '500',
              fontSize: 25,
            },
            headerTintColor: 'white',
            headerLeft: () => {
              <View>
                <Text>hekki</Text>
                <Image
                  style={{width: 100, height: 100, borderRadius: 20}}
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
                  }}
                />
              </View>;
            },

            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <TouchableOpacity>
                  <Icon
                    name="md-videocam"
                    size={28}
                    color={'white'}
                    style={{marginRight: 20}}
                  />
                </TouchableOpacity>

                <Icon
                  name="call"
                  size={25}
                  color={'white'}
                  style={{marginRight: 20}}
                />

                <Icons name="dots-three-vertical" size={25} color={'white'} />
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="ImageSent"
          component={ImageSent}
          options={{
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ProfileViewer"
          component={ProfileViewer}
          options={{headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="CustomMenu"
          component={CustomMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GiftedChat"
          component={GiftedChats}
          options={({route}) => ({
            title: 'saranya',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '500',
              fontSize: 21,
            },

            headerTintColor: 'white',
          })}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={({route}) => ({
            title: 'Select Contact',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '500',
              fontSize: 21,
            },
            headerTintColor: 'white',

            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <Icon
                  name="search"
                  size={25}
                  color={'white'}
                  style={{marginLeft: 10}}
                />

                {/* Contact modal popup */}

                <Modal
                  visible={ContactModal}
                  transparent
                  onRequestClose={() => setContactModal(false)}
                  animationType="fade"
                  hardwareAccelerated>
                  <View
                    style={{
                      position: 'absolute',
                      marginBottom: 200,
                      zIndex: 1,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(52,52,52,0.8)',
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        top: windowHeight / 120,
                        left: windowWidth / 2,
                        backgroundColor: 'white',
                        width: '50%',
                        height: 200,
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
                        <View style={{paddingLeft: 2}}>
                          <TouchableOpacity
                            style={{padding: 10}}
                            onPress={
                              newContentFunction
                              // navigation.navigate('InviteFriend'),
                            }>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Invite a friend
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{padding: 10}}
                            onPress={() => (
                              setContactModal(true),
                              navigation.navigate('Contact')
                            )}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Contacts
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Refresh
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{padding: 10}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                              Help
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View
                        style={{
                          justifyContent: 'space-around',
                          width: 20,
                          marginLeft: 170,
                          marginTop: -280,
                          flexDirection: 'row',
                          alignItems: 'center',
                          // padding: 4,
                          // backgroundColor:"red"
                        }}>
                        <Pressable
                          onPress={() => setContactModal(!ContactModal)}
                          android_ripple={{color: '#fff'}}>
                          <Antdesign name="close" size={20} color="grey" />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity onPress={() => onContactModal()}>
                  <Icons name="dots-three-vertical" size={25} color={'white'} />
                </TouchableOpacity>

                {/* Rbsheet for invite a friend */}

                <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  height={200}
                  openDuration={200}
                  closeDuration={150}
                  closeOnPressMask={true}
                  customStyles={{
                    wrapper: {
                      opacity: 0.9,
                    },
                    container: {
                      backgroundColor: 'white',
                      borderTopStartRadius: 20,
                      borderTopEndRadius: 20,
                      height: 300,
                    },
                    // draggableIcon: {
                    //   backgroundColor: 'black',
                    //   width:10,
                    // },
                  }}>
                  <View style={{height: 500, flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'grey',
                        fontWeight: 'bold',
                        marginLeft: 20,
                        fontSize: 17,
                        marginTop: -15,
                      }}>
                      Invite a friend via...
                    </Text>

                    {/* message senting through SMS */}

                    <TouchableOpacity
                      onPress={() =>
                        Communications.text(
                          '0123456789',
                          'Follow https://aboutreact.com',
                        )
                      }>
                      <Text
                        style={{
                          color: 'black',
                          textAlign: 'center',
                          fontSize: 20,
                          paddingVertical: 10,
                          marginLeft: -170,
                          marginTop: 20,
                        }}>
                        Message
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Communications.email(
                          ['aboutreact11@gmail.com', 'hello@aboutreact.com'],
                          null,
                          null,
                          'Demo Subject',
                          'Demo Content for the mail',
                        )
                      }>
                      <Text style={styles.textContainer}>Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        Communications.phonecall('0123456789', true)
                      }>
                      <Text style={styles.textContainer}>call</Text>
                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="NewContact"
          component={NewContact}
          options={({route}) => ({
            title: 'New group',
            // subtitle: {AddParticipants},
            headerTitleStyle: {
              color: 'white',
              fontWeight: '700',
              fontSize: 25,
            },
            headerTintColor: 'white',
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  // width: 100,
                  marginLeft: 100,
                }}>
                <Icon name="search" size={28} color={'white'} />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="StatusScreen"
          component={StatusScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CallFloating"
          component={CallFloating}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="StatusEdit"
          component={StatusEdit}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="NewStatus"
          component={NewStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewCall"
          component={NewCall}
          options={({route}) => ({
            title: 'Select Contact',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '500',
              fontSize: 21,
            },
            headerStyle: {
              backgroundColor: '#2E7B57',
            },

            headerTintColor: 'white',

            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <Icon
                  name="search"
                  size={25}
                  color={'white'}
                  style={{marginLeft: 10}}
                />

                <MenuProvider>
                  <View
                    style={{position: 'absolute', zIndex: 1, marginLeft: 40}}>
                    <Menu>
                      <MenuTrigger>
                        <Icons
                          name="dots-three-vertical"
                          size={25}
                          color={'white'}
                          onPress={() => navigation.navigate('ProfileViewer')}
                        />
                      </MenuTrigger>
                      <MenuOptions
                        optionsContainerStyle={{height: '100%', width: 100}}>
                        <MenuOption
                          onSelect={() => navigation.navigate('Contact')}
                          // onSelect={() => alert(`Save`)}
                          text="Contact"
                        />
                        <MenuOption onSelect={() => alert(`Delete`)}>
                          <Text style={{color: 'red'}}>Delete</Text>
                        </MenuOption>
                        <MenuOption
                          onSelect={() => alert(`Not called`)}
                          disabled={true}
                          text="Disabled"
                        />
                      </MenuOptions>
                    </Menu>
                  </View>
                </MenuProvider>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QrCode"
          component={QrCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InviteFriend"
          component={InviteFriend}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Todolist"
          component={TodoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({route}) => ({
            title: 'Settings',
            // subtitle: {AddParticipants},
            headerTitleStyle: {
              color: 'white',
              fontWeight: '700',
              fontSize: 25,
            },
        

            headerTintColor: 'white',
          })}
        />
       <Stack.Screen
          name="Account"
          component={Account}
          options={({route}) => ({
            title: 'Account',
            // subtitle: {AddParticipants},
            headerTitleStyle: {
              color: 'white',
              fontWeight: '700',
              fontSize: 25,
            },
        

            headerTintColor: 'white',
          })}
        />
          <Stack.Screen
          name="Notification"
          component={Notification}
          options={() => ({
            title: 'Notification',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '700',
              fontSize: 25,
            },
          headerTintColor: 'white',
          })}
        />
           <Stack.Screen
          name="Help"
          component={Help}
          options={() => ({
            title: 'Help',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '700',
              fontSize: 25,
            },
          headerTintColor: 'white',
          })}
        />
           <Stack.Screen
          name="AppInfo"
          component={AppInfo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Provider>
  );
}

export default MainStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
  textContainer: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    marginTop: 20,
    marginRight: 60,
  },
});



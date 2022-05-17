import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Emoji from "react-native-vector-icons/Entypo"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
} from 'react-native';

const randomRGB = () => Math.floor(Math.random() * 256);

const getRandomColor = () =>
  'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';

const StatusEdit = () => {
  const navigation = useNavigation();

  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [FontStyle, setFontStyle] = useState('normal');
  const [underline, setunderline] = useState('underline')
  // const [Icon, setIcon] = useState(false)
  const [text, setText] = useState('');
  const [fontWeight, setfontWeight] = useState('400');
  const iconchange = () => {
    setText(text);
    // setIcon(true)
    console.log('hello');
  };
  const statusUpdate = () => {
    navigation.navigate('NewStatus',{
      name:text,
      backgroundColor:currentColor,
    });
  };
  const letChangeTextSize = () => {
    if (FontStyle == 'normal') {
      setFontStyle('italic');
      setfontWeight('bold');
      setunderline('underline')
      // setText('Type a status');
    } else {
      setFontStyle('normal');
      // setText('');
      setfontWeight('300');
      //setunderline('underline')
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view, {backgroundColor: currentColor}]} />

      <View style={styles.MainContainer}>
        <TextInput
          style={[
            styles.text,
            {fontStyle: FontStyle, fontWeight: fontWeight, color: 'white',  textDecorationLine: underline,},
          ]}
          placeholder="Type a Status"
          multiline
          placeholderTextColor="white"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {/* <Text style={[styles.text, {fontStyle: FontStyle,fontWeight:fontWeight}]}>
          {text}
        </Text> */}
      </View>
      <View style={styles.containers}>
      
      <TouchableOpacity onPress={() => setCurrentColor(getRandomColor())}>
          <Emoji name="emoji-happy" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={letChangeTextSize}>
          <Icons
            name="format-text"
            size={35}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => setCurrentColor(getRandomColor())}>
          <Icon name="palette" size={25} color="white" style={styles.icon} />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={statusUpdate}>
          <View style={styles.buttonContainer}>
            {!text ? (
              <Icons name="microphone" size={28} color="white" />
            ) : (
              <MaterialIcons name="send" size={28} color="white" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },
  containers: {
    // backgroundColor: '#70c86d',
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 180,
    zIndex: 1,
    
  },
  view: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: '#2e5f55',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: -150,
  },
  icon: {
    justifyContent: 'space-between',
    paddingLeft: 30,
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
  
    textAlign: 'center',
    color: 'white',
    paddingBottom: 14,
    position: 'absolute',
      zIndex: 1,
    fontSize: 30,
    right: '-25%',
    bottom: 350,
    width:"70%"
   
    // backgroundColor:"red",
  },
});

export default StatusEdit;

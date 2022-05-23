import React ,{useState,useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback ,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const COLORS = {primary: '#1f145c', white: '#fff',blue:"#55BCF6"};
const image = {
    uri: 'https://66.media.tumblr.com/b9fcad7825cdf6159325a5ca7d703127/tumblr_ouztgbH0CG1vj8v9mo5_1280.png',
  };
const TodoList = () => {
    const navigation = useNavigation();
    const ImageCall = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            navigation.navigate('ImageSent', {
              image1: image,
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
// local time

const [time, setTime] = useState(null);
useEffect(() => {
  let time = getCurrentTime();
  setTime(time);
}, []);
const getCurrentTime = () => {
  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  var session;
  if(hours >= 12){
    session = "PM"
  }
  else{
    session = "AM"
  }
    

  return hours + ':' + minutes + " " + session;
}
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState('');
  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const deleteTodo = todoId => {
    Alert.alert('Are you Sure '  , 'Delete message ?', [
        {
          text: 'Delete for me',
          onPress: () =>{
              console.log("kjklj");
            const newTodosItem = todos.filter(item => item.id != todoId);
            setTodos(newTodosItem);
          } 
        },
        {
          text: 'Cancel',
        },
      ]);
 
  };

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  const ListItem = ({todo}) => {
    return (
      
      <TouchableWithoutFeedback onPress={() => deleteTodo(todo.id)}>
<View style={styles.ChatScreen}>
  
        <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo.task}
          </Text>
          <Text style={{marginLeft:190}}>{time}</Text>
          </View>
          </TouchableWithoutFeedback>


   
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
       
      <View style={styles.header}>
      
     
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
        <Icons
    name="laugh-beam"
    size={24}
    color="grey"
    style={{marginTop:10}}
  />
          <TextInput
            value={textInput}
            placeholder="Message"
            onChangeText={text => setTextInput(text)}
          />
          <View style={{flexDirection:"row",marginLeft:100,marginTop:8}}>
          <Icon
    name="attachment"
    size={24}
    color="grey"
    style={styles.icon}
    onPress={ImageCall}
  />
  <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
    {!textInput && (
      <Icon name="camera" size={24} color="grey" style={styles.icon} />
    )}
  </TouchableOpacity>
          </View>
          
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
          {!textInput ? (
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    flexDirection:"row"
  },
  itemleft:{
    flexDirection: "row",
    alignItems:'center',
    flexWrap:'wrap',
    flex:1,
  },
  square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#2e5f55",
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    // padding: 20,
    backgroundColor: COLORS.white,
    // borderRadius:20,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 70,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:COLORS.blue
  },
  ChatScreen:{
     padding:5,
     margin:10,
     borderRadius:10,
     maxWidth:"85%",
     backgroundColor:"#DCF8C5",
     marginLeft:50,
  },
  icon: {
    //   marginLeft:100,
    marginHorizontal: 5,
  },
});

export default TodoList
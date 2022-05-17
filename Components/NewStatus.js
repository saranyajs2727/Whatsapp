import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const NewStatus = ({route,navigation}) => {
    const {name} = route.params;
    const {backgroundColor} = route.params;
  
  
      
      useEffect(() => {
        let timer = setTimeout(() => {
          navigation.goBack();
        }, 10000);
    
        Animated.timing(progress, {
          toValue: 5,
          duration: 10000,
          useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer);
      }, []);
    
      const [progress, setProgress] = useState(new Animated.Value(0));
    
      const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
      });
      
    return (
        <View> 
        {/* <Text style={{}}>{name}</Text> */}
        <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Status')}>
            <Icons
              name="arrow-back"
              style={{
                fontSize: 30,
                color: 'white',
                opacity: 0.6,
                marginTop: 20,
                marginRight:5,
              }}
            />
          </TouchableOpacity>
     
          <Image
            source={require('../Assets/Images/img11.jpeg')}
            style={{
              borderRadius: 200,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: 50,
              height: 50,
              marginTop: 10,
              //  marginLeft:5,
              borderColor: 'white',
              borderWidth: 2,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
            // marginLeft:4,
           
          }}>
          <View style={{flexDirection:"column"}}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              paddingLeft: 10,
            }}>
      My Status
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '500',
              paddingLeft: 10,
              marginTop:5,
            }}>
            Today 12.49PM
          </Text>
          </View>
                

          {/* <TouchableOpacity onPress={sidemenu}>
            <Icon
              name="dots-three-vertical"
              style={{fontSize: 20,fontWeight:"bold", color: 'white', opacity: 0.6,marginLeft:-70,marginTop:10}}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <View  style={{position: 'absolute', width: '100%', height: 400 ,backgroundColor:backgroundColor}}>
<Text style={{
    fontSize:30,
    fontWeight:"500",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:150,
    color:"white"
}}>{name}</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
        }}> 
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-up" style={{fontSize: 45, color: 'white'}} />
          <Text style={{color: 'white', marginBottom: 2}}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
         </View>
    )
}

export default NewStatus

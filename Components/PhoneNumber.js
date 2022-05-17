import { View, TextInput ,StyleSheet,Pressable,Text,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
// import {  } from 'react-native-gesture-handler';

const PhoneNumber = () => {
    const [phoneNumber, addPhoneNumber] = useState('+91');
    const GetOTP = () => {
        if(phoneNumber && phoneNumber.length > 9){
        navigation.navigate('OTP Screen', {phoneNumber});
        }
        else
        alert("Please enter 10 digit phone number");
    }
  return (
    <View>
        <TextInput
            value={phoneNumber}
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="+91 1234567890"
                onChangeText={(text) => addPhoneNumber(text)}
            />
                  <TouchableOpacity onPress={GetOTP}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
                <Text style={styles.btnText}>
                    Get OTP!
                </Text>
            </TouchableOpacity>

            <Text>jkhkjhkl</Text>
    </View>
  )
}

export default PhoneNumber
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 2,
        height:40,
        width:100,
        borderRadius: 10,
        marginTop: 30,
    },
    btnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 200, width: 150,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});
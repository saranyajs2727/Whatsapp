import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import Icons from 'react-native-vector-icons/Ionicons';
// import CustomButton from '../Utils/CustomButton';
import * as RNFS from 'react-native-fs';


export default function Camera() {
     const [front, setfront] = useState(false)
    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
       
    }

    return (
        <View style={styles.body}>
        {
            front ? (
                <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.front}
                style={styles.preview}
            >  
            <View style={{  display:"flex",
                flexDirection:"row",}}>
                
                  <TouchableOpacity
                  onPress={() => captureHandle()} 
                  style={{
                width:70,
                height:70,
                borderRadius:50,
                // backgroundColor:"red",
                borderColor:"white",
                marginBottom:30,
                borderWidth: 4,
                marginLeft:100,
            }}>
   
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => setfront(!front)}  
   >
               <Icons name="camera-reverse-sharp" color='white' size={40}   style={{marginLeft:90,marginTop:20}} />

            </TouchableOpacity>
   
            </View>
           
               {/* <Button
                    title="Capture"
                    color='#1eb900'
                    onPress={() => captureHandle()}
                />  */}
                </RNCamera>
            ):(
                <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
            <View style={{  display:"flex",
                flexDirection:"row",}}>
                
                  <TouchableOpacity
                  onPress={() => captureHandle()} 
                  style={{
                width:70,
                height:70,
                borderRadius:50,
                // backgroundColor:"red",
                borderColor:"white",
                marginBottom:30,
                borderWidth: 4,
                marginLeft:100,
            }}>
   
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => setfront(true)}  
   >
               <Icons name="camera-reverse-sharp" color='white' size={40}   style={{marginLeft:90,marginTop:20}} />

            </TouchableOpacity>
   
            </View>
            </RNCamera>  
            )

        }
          
             
        {/* <Button
                    title="Capture"
                    color='#1eb900'
                    onPress={() =>  setfront(true)}
                /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});


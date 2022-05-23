import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QrCode() {
  const navigation = useNavigation();


    const [scan, setScan] = useState(true)
    const [result, setResult] = useState()
   
    useEffect(() => {
      // console.log("call");
      startScan()
    }, [])
    const   startScan = () => {
      setScan(true)
      setResult()
    } 
    const onSuccess = (e) => {
      setResult(e.data)
      setScan(false)
    }
    
  return (
    <View>
   <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}
          <View style={styles.body}>
            { result &&
              <View style={styles.sectionContainer}>
                <Text style={styles.centerText}>{result}</Text>
              </View>
            }
            {/* { !scan &&
              <View style={styles.sectionContainer}>
                <Button
                  title="Start Scan"
                  color="#f194ff"
                  onPress={startScan}
                />
              </View>
            } */}
            { scan &&
              <View style={styles.sectionContainer}>
                <QRCodeScanner
                  reactivate={true}
                  showMarker={true}
                  //ref={(node) => { scanner = node }}
                  onRead={onSuccess}
                  topContent={
                    <Text style={styles.centerText}>
                      Scan your QRCode!
                    </Text>
                  }
                  bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.goBack()}>
                      <Text style={styles.buttonText}>Cancel Scan</Text>
                    </TouchableOpacity>
                  }
                />
              </View>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "green",
    },
    body: {
      backgroundColor: "white",
    },
    sectionContainer: {
      marginTop: 32,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: "black",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: "red",
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: "red",
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
  });
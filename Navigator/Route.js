import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import MainStack from './MainStack';
import LoginStack from './LoginStack';
export default function Route() {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  console.log(user,"hh");
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {!user ? <LoginStack /> : <MainStack />}
    </NavigationContainer>
  );
}

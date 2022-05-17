
// import { initializeApp } from "@firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { initializeFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdibXNKja9sS6XlVXjO-bRyooEFXREpXc",
  authDomain: "whatsapp-9a16a.firebaseapp.com",
  projectId: "whatsapp-9a16a",
  storageBucket: "whatsapp-9a16a.appspot.com",
  messagingSenderId: "702002934363",
  appId: "1:702002934363:web:48af7acca35f8ef959857e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
  
  export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
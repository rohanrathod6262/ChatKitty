// Import the functions you need from the SDKs you need

import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence
  } from 'firebase/auth';
  
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA2Gp0h7bRcfpP9HWCoPiSrVR-fc-k7Nc",
  authDomain: "chatkitty-example-30829.firebaseapp.com",
  projectId: "chatkitty-example-30829",
  storageBucket: "chatkitty-example-30829.appspot.com",
  messagingSenderId: "239117109069",
  appId: "1:239117109069:web:5756defe585757aecfd904",
  measurementId: "G-P6EV39LQ5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = initializeAuth(app);
  

  export { auth };
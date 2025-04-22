// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKaHFUeaXwCO2TwhuEFMfkPgfFuH9Yj60",
  authDomain: "travelapp-a51af.firebaseapp.com",
  projectId: "travelapp-a51af",
  storageBucket: "travelapp-a51af.firebasestorage.app",
  messagingSenderId: "552133749407",
  appId: "1:552133749407:web:fc4960fcb32f67a1b450aa",
  measurementId: "G-35EB9FTGFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
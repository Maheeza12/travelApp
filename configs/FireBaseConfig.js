import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBKaHFUeaXwCO2TwhuEFMfkPgfFuH9Yj60",
  authDomain: "travelapp-a51af.firebaseapp.com",
  projectId: "travelapp-a51af",
  storageBucket: "travelapp-a51af.appspot.com", // fix: `.app` → `.appspot.com`
  messagingSenderId: "552133749407",
  appId: "1:552133749407:web:fc4960fcb32f67a1b450aa",
  measurementId: "G-35EB9FTGFW"
};

// Initialize Firebase App only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth only once
let auth;
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

// Firestore DB
const db = getFirestore(app);

// Export
export { app, auth, db };

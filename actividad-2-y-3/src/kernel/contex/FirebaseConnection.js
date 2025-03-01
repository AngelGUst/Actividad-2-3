import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA81V55DnHM19u84brfCJppH50yL9RCesU",
  authDomain: "actividad-2-2-7d615.firebaseapp.com",
  projectId: "actividad-2-2-7d615",
  storageBucket: "actividad-2-2-7d615.firebasestorage.app",
  messagingSenderId: "814763324520",
  appId: "1:814763324520:web:bbbef543b27f87e38537dd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Wxi0kp3LaDn56_t9ahh2rJTBjuFXHUQ",
  authDomain: "eventplaner-dea21.firebaseapp.com",
  projectId: "eventplaner-dea21",
  storageBucket: "eventplaner-dea21.appspot.com",
  messagingSenderId: "1045258497124",
  appId: "1:1045258497124:web:dc1851c6458beef3d78371",
  measurementId: "G-E6QLY18DKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
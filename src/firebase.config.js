import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChtkvSJVFhrfCZY-KKxV2f83_8U3Vj7IY",
  authDomain: "house-market-place-app-c0bfd.firebaseapp.com",
  projectId: "house-market-place-app-c0bfd",
  storageBucket: "house-market-place-app-c0bfd.appspot.com",
  messagingSenderId: "571046320538",
  appId: "1:571046320538:web:7e839cd6352998e3c94223"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);
export const db = getFirestore();
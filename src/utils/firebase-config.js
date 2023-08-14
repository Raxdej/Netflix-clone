// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDULN1Kutc4pGBo_I6Rg21-kSxxgLv5b0",
  authDomain: "netflix-clone-d5b13.firebaseapp.com",
  projectId: "netflix-clone-d5b13",
  storageBucket: "netflix-clone-d5b13.appspot.com",
  messagingSenderId: "330899292992",
  appId: "1:330899292992:web:fcf6290e4f7a3919e5f0a5",
  measurementId: "G-H5MTZG0PRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
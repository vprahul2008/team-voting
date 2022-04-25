import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Na3XxTt5dystHg06PJOX_5VWzd2T6b0",
  authDomain: "classtest-c6975.firebaseapp.com",
  projectId: "classtest-c6975",
  storageBucket: "classtest-c6975.appspot.com",
  messagingSenderId: "495477109620",
  appId: "1:495477109620:web:e49658c110fb330ccaf221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
     
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
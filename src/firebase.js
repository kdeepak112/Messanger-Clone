import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  {
    apiKey: "AIzaSyBND838R0bNi2fTLdZBgZTzkzpwLyOW1Zs",
    authDomain: "messenger-clone-f3014.firebaseapp.com",
    projectId: "messenger-clone-f3014",
    storageBucket: "messenger-clone-f3014.appspot.com",
    messagingSenderId: "300453589948",
    appId: "1:300453589948:web:d999a8ec02cf6a80cbb1b9",
    measurementId: "G-K2HG9628WS",
  }
);

const db = firebaseApp.firestore();

export default  db ;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnyiDMrdev_tZRqooTJsTxnubDe1KdR2E",
  authDomain: "abhi-instagram-clone.firebaseapp.com",
  databaseURL: "https://abhi-instagram-clone.firebaseio.com",
  projectId: "abhi-instagram-clone",
  storageBucket: "abhi-instagram-clone.appspot.com",
  messagingSenderId: "993851486333",
  appId: "1:993851486333:web:19fe46f29a9d0a61a40114",
  measurementId: "G-7355SRMHSK",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

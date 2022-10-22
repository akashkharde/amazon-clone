import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgKCJ8yrwiS_V2Sned9UAcItR87pWu39s",
    authDomain: "clone-5f259.firebaseapp.com",
    projectId: "clone-5f259",
    storageBucket: "clone-5f259.appspot.com",
    messagingSenderId: "213720918801",
    appId: "1:213720918801:web:de0d1f98579a3b0598bab0",
    measurementId: "G-506ZE4ZEPR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
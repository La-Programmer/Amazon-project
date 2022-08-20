// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCoLppYUwPhTz35wXAwSzTeVeURJ2glED8",
    authDomain: "challenge-609c1.firebaseapp.com",
    projectId: "challenge-609c1",
    storageBucket: "challenge-609c1.appspot.com",
    messagingSenderId: "860801863082",
    appId: "1:860801863082:web:f953d8a9e492a85774afd3",
    measurementId: "G-5S05BNNW9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth}


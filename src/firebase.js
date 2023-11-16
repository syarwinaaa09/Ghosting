import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyBszKmKWitxxfsOwVkWsfaM_hqPjJt2ULA",
    authDomain: "ghosting-45bc8.firebaseapp.com",
    projectId: "ghosting-45bc8",
    storageBucket: "ghosting-45bc8.appspot.com",
    messagingSenderId: "975206452875",
    appId: "1:975206452875:web:50f44c222bed7b4d9a0e8e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
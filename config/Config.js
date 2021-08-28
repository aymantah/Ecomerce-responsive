import firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDNB6WIn8akfjLzd0HmaV-LsHxqF2S6Txw",
    authDomain: "cami-799ab.firebaseapp.com",
    projectId: "cami-799ab",
    storageBucket: "cami-799ab.appspot.com",
    messagingSenderId: "677352516118",
    appId: "1:677352516118:web:ce3f766d25ba486f9d2337",
    measurementId: "G-3MFCBGXLMW"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
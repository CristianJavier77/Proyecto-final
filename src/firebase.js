import firebase from 'firebase/app'
import 'firebase/firestore'





  var firebaseConfig = {
    apiKey: "AIzaSyBJnPHJZWpeZoleE5BY4-CGjCq1e9oXY1o",
    authDomain: "muro-interactivo-e3cd7.firebaseapp.com",
    projectId: "muro-interactivo-e3cd7",
    storageBucket: "muro-interactivo-e3cd7.appspot.com",
    messagingSenderId: "320218486977",
    appId: "1:320218486977:web:a3eefb6d82253679249c40"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

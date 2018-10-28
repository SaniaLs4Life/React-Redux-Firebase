
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKFI9itXPWF0A5PWVFM2kYRnC82hyFRC4",
    authDomain: "react-redux-firebase-7599b.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-7599b.firebaseio.com",
    projectId: "react-redux-firebase-7599b",
    storageBucket: "react-redux-firebase-7599b.appspot.com",
    messagingSenderId: "874965405355"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase
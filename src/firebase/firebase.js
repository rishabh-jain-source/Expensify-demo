import * as firebase from 'firebase'
//import {firebase} from '@firebase/app'
//var firebase = require('firebase/app');
var firebaseConfig = {
    apiKey: "AIzaSyDu_xMuAHVJtKOXomWQ47yLNwz6a700plA",
    authDomain: "expensify-62751.firebaseapp.com",
    databaseURL: "https://expensify-62751-default-rtdb.firebaseio.com",
    projectId: "expensify-62751",
    storageBucket: "expensify-62751.appspot.com",
    messagingSenderId: "6372854601",
    appId: "1:6372854601:web:daa91dde9b446ca3bb2898"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// firebase.database().ref().set({
//       name:'andrew'
// })
  
const database = firebase.database();
const googleauthprovider = new firebase.auth.GoogleAuthProvider();
export { firebase, database,googleauthprovider as default }
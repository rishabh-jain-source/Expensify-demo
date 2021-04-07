import firebase from 'firebase/app';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyDu_xMuAHVJtKOXomWQ47yLNwz6a700plA",
    authDomain: "expensify-62751.firebaseapp.com",
    databaseURL: "https://expensify-62751-default-rtdb.firebaseio.com",
    projectId: "expensify-62751",
    storageBucket: "expensify-62751.appspot.com",
    messagingSenderId: "6372854601",
    appId: "1:6372854601:web:daa91dde9b446ca3bb2898"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
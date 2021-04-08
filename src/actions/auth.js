import {  provider,firebase } from '../firebase/firebase'
export const startLogin = () => {
    return()=> {
        return firebase.auth().signInWithPopup(provider)
    }
}
 const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}
export {startLogout}
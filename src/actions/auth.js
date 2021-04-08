import {  provider,firebase } from '../firebase/firebase'
export const startLogin = () => {
    return()=> {
        return firebase.auth().signInWithPopup(provider)
    }
}
 export const startLogout = () => {
     return () => {
        console.log('logout')
        return firebase.auth().signOut(provider);
    }
}
//export {startLogout}
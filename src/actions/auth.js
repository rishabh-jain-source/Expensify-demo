import { firebase, googleauthprovider } from '../firebase/firebase'
export const startLogin = () => {
    return()=> {
        return firebase.auth().signInWithPopup(provider)
    }
}
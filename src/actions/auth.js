import { auth, provider } from '../firebase/firebase'
export const startLogin = () => {
    return()=> {
        return auth.signInWithPopup(provider)
    }
}
export const startLogout = () => {
    return () => {
        return auth.signOut();
    }
}
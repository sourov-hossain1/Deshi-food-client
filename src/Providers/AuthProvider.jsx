import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
     const user = null;

     const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
     }

     const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
     }

    const AuthInfo = {
        user,
        createUser,
        signIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
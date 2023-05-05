import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);

      useEffect(()=>{
         const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
         })
         return () =>{
            unsubscribe();
         }
      },[])

      const logOut = () =>{
         return signOut(auth);
      }

     const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider);
     }

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
        googleSignIn,
        githubSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
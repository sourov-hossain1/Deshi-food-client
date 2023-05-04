import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const user = {displayName: 'muri khan'}
    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
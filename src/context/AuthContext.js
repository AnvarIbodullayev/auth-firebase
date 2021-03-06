import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const gihubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return(
            createUserWithEmailAndPassword(auth, email, password)
        );
    };

    const signIn = (email, password) => {
        return(
            signInWithEmailAndPassword(auth, email, password)
        );
    };

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
    })

    return(
        <UserContext.Provider value={{ gihubSignIn, googleSignIn, createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return(
        useContext(UserContext)
    );
};
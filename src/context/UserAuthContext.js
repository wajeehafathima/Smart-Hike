import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebase-config"

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }){
    const [user, setUser] = useState({});

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    

    return(
        <userAuthContext.Provider value = {{ user, signup, login, logout, googleSignIn, resetPassword }}>
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}
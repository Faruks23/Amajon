import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading ,setlodeing]=useState(true)
  console.log(user);
  
  // create a new user with email and password
  const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password);
  }
// sign in with password and email
  
  const signIn = (email, password) => { 
    return signInWithEmailAndPassword(auth, email, password);
  }
 const provider = new FacebookAuthProvider();
    const Logout = () => {
      return signOut(auth);
  };
  const facbooklogin = () => {
    signInWithPopup(auth, provider);
  }
  
  
  
  useEffect(() => {
    const subsriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setlodeing(false)
  
    })
    return subsriber;

    
  }, [])
  

  const Authinfo = {
    user,
    createUser,
    signIn,
    Logout,
    loading,
    facbooklogin,
  };
  
  
  return (
    <div>
      <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
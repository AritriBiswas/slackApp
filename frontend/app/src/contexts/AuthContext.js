import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider,  signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] =  useState()
  const [loading, setLoading] = useState(true)
  //signup
  function signup(email,password) {
    
    return createUserWithEmailAndPassword(auth, email,password)
    
    
  }
  //Google Authentication
  function googleSignIn() {
    
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
    
  }
  //Signin
  function signin(email,password) {
    
    return signInWithEmailAndPassword(auth,email,password)
    
    
    
    
  }

  





  // function login(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password)
  // }

  // function logout() {
  //   return auth.signOut()
  // }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
      setCurrentUser(currentuser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    //login,
    signup,
    googleSignIn,
    signin

    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
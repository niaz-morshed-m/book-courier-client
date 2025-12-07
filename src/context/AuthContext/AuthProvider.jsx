import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // register new user
const registerUser = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password);
}

// login registered user
const signinUser= (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

// signin with google
const googleLogin = ()=>{
return signInWithPopup(auth, provider);
}


  const authInfo = {
    registerUser,
    signinUser,
    googleLogin,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

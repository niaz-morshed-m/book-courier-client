import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    // register new user
const registerUser = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password);
}

// login registered user
const signinUser= (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

  const authInfo = {
    registerUser,
    signinUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

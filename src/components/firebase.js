// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY || "",
  authDomain: "login-auth-46cd8.firebaseapp.com",
  projectId: "login-auth-46cd8",
  storageBucket: "login-auth-46cd8.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_MESSAGESENDERID || "",
  appId: process.env.REACT_APP_APPID || ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
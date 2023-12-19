// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt7UwLoH33YmXN8_m6gHzKeHCPgiPKp2M",
  authDomain: "vite-quizapp.firebaseapp.com",
  projectId: "vite-quizapp",
  storageBucket: "vite-quizapp.appspot.com",
  messagingSenderId: "566473868461",
  appId: "1:566473868461:web:e46c7df443b436f7667224",
};

// Initialize Firebase
const quizApp = initializeApp(firebaseConfig);

// Authentication
const quizAuth = getAuth(quizApp);

// SignIn with
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = async () =>
  await signInWithPopup(quizAuth, googleProvider);

  const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(quizAuth,email,password)
  }

  const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(quizAuth,email,password)
  }

  // firestore db

  const quizDataBase = getFirestore(quizApp);

  const createUserDocumentFromAuth = async (userAuth,additionalInfo = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(quizDataBase,"users",userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }catch (err){
        console.log("error in creating user", err.message)
      }
    }
    return userDocRef;
  }

  export {
    signInWithGooglePopup, 
    signInWithEmailAndPassword, 
    createAuthUserWithEmailAndPassword, 
    signInAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth
  };

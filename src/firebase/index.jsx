// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

const signInWithGooglePopup = () =>
  signInWithGooglePopup(quizAuth, googleProvider);



  export {signInWithGooglePopup};

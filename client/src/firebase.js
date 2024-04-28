// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9d909.firebaseapp.com",
  projectId: "mern-estate-9d909",
  storageBucket: "mern-estate-9d909.appspot.com",
  messagingSenderId: "466106347955",
  appId: "1:466106347955:web:d11fec815bd521baed1bc6"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
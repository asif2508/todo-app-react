// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQWi0j8r8cVKPAc4Kc-2FPbo9PmEm-bHc",
  authDomain: "todo-app-2c572.firebaseapp.com",
  projectId: "todo-app-2c572",
  storageBucket: "todo-app-2c572.appspot.com",
  messagingSenderId: "1001511285638",
  appId: "1:1001511285638:web:67549742d1bfd20936f207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
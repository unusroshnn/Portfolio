// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcLngoV6Ii0K2fXqoWzjmMax5rNqWGBls",
  authDomain: "blog-app-605e3.firebaseapp.com",
  projectId: "blog-app-605e3",
  storageBucket: "blog-app-605e3.firebasestorage.app",
  messagingSenderId: "19110239135",
  appId: "1:19110239135:web:4b75207ac35d4dab63fbaa",
  measurementId: "G-32KHY7EPWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

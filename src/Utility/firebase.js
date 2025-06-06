// import { firebase} from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQzJkj4f0K6P5MgvgVbQxgJG12sj711k",
  authDomain: "clone-45bf9.firebaseapp.com",
  projectId: "clone-45bf9",
  storageBucket: "clone-45bf9.firebasestorage.app",
  messagingSenderId: "871258208501",
  appId: "1:871258208501:web:7c47a7fd08d3e533d02dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = app.firestore(); 
export const db = getFirestore(app);


// ************************************************************the top code is from the initial********************
// src/Utility/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "YOUR_API_KEY",
// 	authDomain: "YOUR_AUTH_DOMAIN",
// 	projectId: "YOUR_PROJECT_ID",
// 	storageBucket: "YOUR_STORAGE_BUCKET",
// 	messagingSenderId: "YOUR_SENDER_ID",
// 	appId: "YOUR_APP_ID",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

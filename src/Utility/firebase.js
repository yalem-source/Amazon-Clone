// Modular Firebase SDK setup for v9+
// This file initializes Firebase and exports auth and Firestore instances

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyDnQzJkj4f0K6P5MgvgVbQxgJG12sj711k",
  authDomain: "clone-45bf9.firebaseapp.com",
  projectId: "clone-45bf9",
  storageBucket: "clone-45bf9.appspot.com",
  messagingSenderId: "871258208501",
  appId: "1:871258208501:web:7c47a7fd08d3e533d02dbc",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export initialized services
export { auth, db };

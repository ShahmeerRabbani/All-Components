// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-udlvKzRTGFGaScg_9QtRBK0SXuvT1k",
  authDomain: "hackaton-web-aae74.firebaseapp.com",
  projectId: "hackaton-web-aae74",
  storageBucket: "hackaton-web-aae74.appspot.com",
  messagingSenderId: "971710790929",
  appId: "1:971710790929:web:35d7d4ab41bfa77cb320b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, db, auth};
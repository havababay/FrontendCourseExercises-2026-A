// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTh8G9ieRuvpMrRy9EYrhJtrH1519Djik",
  authDomain: "candidate-management-7c8f4.firebaseapp.com",
  projectId: "candidate-management-7c8f4",
  storageBucket: "candidate-management-7c8f4.firebasestorage.app",
  messagingSenderId: "986759922950",
  appId: "1:986759922950:web:ab65230645dfbaec634a87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
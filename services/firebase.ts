// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9EjVO3m2HtYlo3sV3ZKSjzU_v92HJyW4",
  authDomain: "orth-genai-v250613.firebaseapp.com",
  projectId: "orth-genai-v250613",
  storageBucket: "orth-genai-v250613.firebasestorage.app",
  messagingSenderId: "246927722002",
  appId: "1:246927722002:web:14b04fb8dfb30a861fbacb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };
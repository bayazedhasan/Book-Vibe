
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvoMm-XjKoOFvebZVZlGNtkYoCyKZyfIw",
  authDomain: "books-vibe.firebaseapp.com",
  projectId: "books-vibe",
  storageBucket: "books-vibe.firebasestorage.app",
  messagingSenderId: "832148286843",
  appId: "1:832148286843:web:7f9f386319889fd56461de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
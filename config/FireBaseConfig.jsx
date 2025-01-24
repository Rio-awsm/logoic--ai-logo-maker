
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "logoic-64aab.firebaseapp.com",
  projectId: "logoic-64aab",
  storageBucket: "logoic-64aab.firebasestorage.app",
  messagingSenderId: "351514984959",
  appId: "1:351514984959:web:d58eeb1023c039cb13e7ca",
  measurementId: "G-XEEJ8DHN3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
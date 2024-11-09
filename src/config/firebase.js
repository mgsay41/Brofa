import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4qcyrQfFS8cg9PSzUllAC2PMDT4bMdCs",
  authDomain: "brofa-13039.firebaseapp.com",
  projectId: "brofa-13039",
  storageBucket: "brofa-13039.firebasestorage.app",
  messagingSenderId: "7779218358",
  appId: "1:7779218358:web:b7ffe7c2d72d7498524717",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

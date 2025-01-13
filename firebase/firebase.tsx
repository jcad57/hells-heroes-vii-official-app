import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVR-53TAceipZ_WaejuVwwgZ89gFnD5dw",
  authDomain: "hell-s-heroes-hq.firebaseapp.com",
  projectId: "hell-s-heroes-hq",
  storageBucket: "hell-s-heroes-hq.firebasestorage.app",
  messagingSenderId: "477371321781",
  appId: "1:477371321781:web:8b93f987f6a702eeac9dfc",
  measurementId: "G-SR4N7NGJC3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

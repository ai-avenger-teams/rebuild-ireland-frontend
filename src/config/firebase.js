// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO3ffWqy4j5Adke853Iql-C-JzxASC_eI",
  authDomain: "rebuildireland-demo.firebaseapp.com",
  projectId: "rebuildireland-demo",
  storageBucket: "rebuildireland-demo.appspot.com",
  messagingSenderId: "773168703200",
  appId: "1:773168703200:web:b585b98b007dbe1a899285",
  measurementId: "G-QH4W512K9M",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

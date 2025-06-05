// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0R2mLr82m0OYY-nuHv3f7P3sZxeq6hhM",
    authDomain: "contact-management-98f7a.firebaseapp.com",
    projectId: "contact-management-98f7a",
    storageBucket: "contact-management-98f7a.firebasestorage.app",
    messagingSenderId: "223320476526",
    appId: "1:223320476526:web:19a30c7f337dd84a714f7f",
    measurementId: "G-DF7SRPYHV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
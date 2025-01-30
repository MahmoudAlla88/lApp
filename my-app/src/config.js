
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyDklXKivNTV9ygeAEoKi2vVudzPKTIeaHw",
    authDomain: "libraryapp-ba572.firebaseapp.com",
    projectId: "libraryapp-ba572",
    storageBucket: "libraryapp-ba572.firebasestorage.app",
    messagingSenderId: "668518492347",
    appId: "1:668518492347:web:95d141c0f3905d7435219e",
    measurementId: "G-3T2P3KJJMH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


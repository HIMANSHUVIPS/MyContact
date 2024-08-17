// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjA6kvirfThwqDPIRXNegxKEfof6FH1KU",
  authDomain: "vite-mycontact.firebaseapp.com",
  projectId: "vite-mycontact",
  storageBucket: "vite-mycontact.appspot.com",
  messagingSenderId: "150448047338",
  appId: "1:150448047338:web:eae564b6aa553bc6cd8393",
  measurementId: "G-3SVDWCC4GD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
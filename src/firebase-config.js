// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn2JN_iJHN4eIf-l_8OnpttRHW3z2OXTc",
  authDomain: "fir-tutorial-4ccb9.firebaseapp.com",
  projectId: "fir-tutorial-4ccb9",
  storageBucket: "fir-tutorial-4ccb9.appspot.com",
  messagingSenderId: "938981921550",
  appId: "1:938981921550:web:ccff1547608865bf107d5f",
  measurementId: "G-FNNM3X4X0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
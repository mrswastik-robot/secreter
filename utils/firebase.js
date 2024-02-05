// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_cwWU60L9hZZeIuh4T7REYzFwLoHvfPo",
  authDomain: "secreter-d43fd.firebaseapp.com",
  projectId: "secreter-d43fd",
  storageBucket: "secreter-d43fd.appspot.com",
  messagingSenderId: "830872699344",                                          //hey don't steal my keys please
  appId: "1:830872699344:web:bab0d97f96b508595df9d5",
  measurementId: "G-5DFB7V6N6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
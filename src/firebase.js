// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjwF9JCSmHeD-DBtckfYrGVmsS9NJziuE",
  authDomain: "positive-news-63a01.firebaseapp.com",
  projectId: "positive-news-63a01",
  storageBucket: "positive-news-63a01.appspot.com",
  messagingSenderId: "1057456182839",
  appId: "1:1057456182839:web:a55cee6e1669e75e3fd1b2",
  measurementId: "G-LQX3WESXP9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

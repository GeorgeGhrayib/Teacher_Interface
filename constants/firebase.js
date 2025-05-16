// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHK3f1Ml7TNiWlsSbmIkvAPJnZhN5nvE",
  authDomain: "sukoon-b0dbe.firebaseapp.com",
  projectId: "sukoon-b0dbe",
  storageBucket: "sukoon-b0dbe.firebasestorage.app",
  messagingSenderId: "273970068693",
  appId: "1:273970068693:web:d49885fb1f5097221c765c",
  measurementId: "G-XR5TVWV926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
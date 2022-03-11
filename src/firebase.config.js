
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaBPrjdLMMRhATmeIbb8Ul9jHd0OYq-tE",
  authDomain: "house-marketplace-app-d2831.firebaseapp.com",
  projectId: "house-marketplace-app-d2831",
  storageBucket: "house-marketplace-app-d2831.appspot.com",
  messagingSenderId: "960528829633",
  appId: "1:960528829633:web:4ec8a4a30febffb684d840",
  measurementId: "G-Y46QNQ4NLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 getAnalytics(app);
export const db = getFirestore();
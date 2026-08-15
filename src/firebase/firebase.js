import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6Klq373uwOTZoa6RVWfWI4aXLOP0xQYk",
  authDomain: "eduhome-d8b01.firebaseapp.com",
  projectId: "eduhome-d8b01",
  storageBucket: "eduhome-d8b01.firebasestorage.app",
  messagingSenderId: "610177244432",
  appId: "1:610177244432:web:200224863a7e2575571995",
  measurementId: "G-SCBM6PCWPB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); 

export default app;
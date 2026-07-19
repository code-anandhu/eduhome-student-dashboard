import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArl1oKVOJr5RG3a2UaniO9Yb4Z5ptXbBQ",
  authDomain: "eduhome-4b7b4.firebaseapp.com",
  projectId: "eduhome-4b7b4",
  storageBucket: "eduhome-4b7b4.firebasestorage.app",
  messagingSenderId: "646386057726",
  appId: "1:646386057726:web:2d147cd7c0464c1ab9c0af",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
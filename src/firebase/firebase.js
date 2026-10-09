import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkjWnhqr1dUqcqGZJgw6RQswQpV9LgybY",
  authDomain: "eduhome-55323.firebaseapp.com",
  projectId: "eduhome-55323",
  storageBucket: "eduhome-55323.firebasestorage.app",
  messagingSenderId: "814180495434",
  appId: "1:814180495434:web:a3b28453d90202235776b3",
  measurementId: "G-KME8E0HHL1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); 

export default app;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYn3BMT4_7FJJ5NlckJDn7S_bV-IV1Z1E",
  authDomain: "eduhome-cec54.firebaseapp.com",
  projectId: "eduhome-cec54",
  storageBucket: "eduhome-cec54.firebasestorage.app",
  messagingSenderId: "627428198711",
  appId: "1:627428198711:web:5c8aa7a3d2bdebb38eb2b2",
  measurementId: "G-SCBM6PCWPB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;
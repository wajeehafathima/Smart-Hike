import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5gEnmxYDGIWyiYg8J-WpSZTmPJXW3xO8",
  authDomain: "smart-hike-42c05.firebaseapp.com",
  projectId: "smart-hike-42c05",
  storageBucket: "smart-hike-42c05.appspot.com",
  messagingSenderId: "872183206531",
  appId: "1:872183206531:web:29c6d24d33e0f5f1e341b6"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
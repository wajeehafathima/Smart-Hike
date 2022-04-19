import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBJMjTkeMUIKYEZkaz2OeN86_6nY3yVnJs",
//     authDomain: "smart-hike.firebaseapp.com",
//     projectId: "smart-hike",
//     storageBucket: "smart-hike.appspot.com",
//     messagingSenderId: "876864580764",
//     appId: "1:876864580764:web:276389d599882ee5c05159"
//   };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
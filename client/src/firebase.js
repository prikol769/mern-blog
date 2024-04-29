// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8433a.firebaseapp.com",
  projectId: "mern-blog-8433a",
  storageBucket: "mern-blog-8433a.appspot.com",
  messagingSenderId: "299118066525",
  appId: "1:299118066525:web:ad856c0dae939ec45706b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rescuenet-34dc5.firebaseapp.com",
  projectId: "rescuenet-34dc5",
  storageBucket: "rescuenet-34dc5.appspot.com",
  messagingSenderId: "968581560907",
  appId: "1:968581560907:web:588cb8a17acc9b6588ebce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

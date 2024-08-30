// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4qhrGrBpamfc_xEboZQTTVUeAAmXHVLc",
  authDomain: "coffee-store-3.firebaseapp.com",
  projectId: "coffee-store-3",
  storageBucket: "coffee-store-3.appspot.com",
  messagingSenderId: "1027863715353",
  appId: "1:1027863715353:web:2b316ddcb2cb6e79f35488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
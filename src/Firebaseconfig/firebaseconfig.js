// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMVvwVkm9kTwyhdBBhQ-f0r0WwW8uFJTA",
  authDomain: "validation-form-465d9.firebaseapp.com",
  databaseURL: "https://validation-form-465d9-default-rtdb.firebaseio.com",
  projectId: "validation-form-465d9",
  storageBucket: "validation-form-465d9.appspot.com",
  messagingSenderId: "618114203894",
  appId: "1:618114203894:web:ad4cb1da4dd5b5db50acd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;
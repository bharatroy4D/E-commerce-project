// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUVTdr5mD88hmOqBJp3D8Q39gi_nF_a0",
  authDomain: "ecommerse-project-bd907.firebaseapp.com",
  projectId: "ecommerse-project-bd907",
  storageBucket: "ecommerse-project-bd907.firebasestorage.app",
  messagingSenderId: "413737217901",
  appId: "1:413737217901:web:4b1183a4fcdda24050b464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
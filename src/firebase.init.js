// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgdYyc9ASEjD83gSIIgATUk1qUPQNj9dU",
    authDomain: "stowage-home.firebaseapp.com",
    projectId: "stowage-home",
    storageBucket: "stowage-home.appspot.com",
    messagingSenderId: "1038305375",
    appId: "1:1038305375:web:9f643e9c9e6e8bee75f3ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
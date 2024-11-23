// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeGThUiApR8dEGj6XzU22I5ko93FwM6PY",
  authDomain: "netflix-gpt-52a83.firebaseapp.com",
  projectId: "netflix-gpt-52a83",
  storageBucket: "netflix-gpt-52a83.firebasestorage.app",
  messagingSenderId: "465197419927",
  appId: "1:465197419927:web:f8e788bc842100680c08d2",
  measurementId: "G-YPQ0HG4V45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLgFBbKmUBtLhBKnSXtBbUxRgeqZbU7gU",
  authDomain: "luistiendacesde.firebaseapp.com",
  projectId: "luistiendacesde",
  storageBucket: "luistiendacesde.appspot.com",
  messagingSenderId: "402750851849",
  appId: "1:402750851849:web:2bb2ab12846dbbb48021d8",
  measurementId: "G-JX5QN7KKQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
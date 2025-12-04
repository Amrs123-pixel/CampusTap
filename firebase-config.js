// firebase-config.js

// Firebase Imports (Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

// Your REAL Firebase Config (from screenshot)
const firebaseConfig = {
 apiKey: "AIzaSyA6OmfsgRx-D6dN2Mto5Btczi8A64ReQJg",
  authDomain: "campustap-522d8.firebaseapp.com",
  databaseURL: "https://campustap-522d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campustap-522d8",
  storageBucket: "campustap-522d8.firebasestorage.app",
  messagingSenderId: "929159058918",
  appId: "1:929159058918:web:2378bbb19f873e98dcb227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

// Export for use in all HTML pages
export { app, auth, db, rtdb };

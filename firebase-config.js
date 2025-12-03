// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbCIJt3182dl6tPnnIt5AwOgxzB6b9efg",
  authDomain: "campustap2.firebaseapp.com",
  projectId: "campustap2",
  storageBucket: "campustap2.firebasestorage.app",
  messagingSenderId: "301788997959",
  appId: "1:301788997959:web:d3c8f1e6b2c7d32b488462",
  measurementId: "G-CE67W70TBS",
  databaseURL: "https://campustap2-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app   = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db    = getFirestore(app);     // Firestore
const rtdb  = getDatabase(app);      // Realtime Database

export { app, auth, db, rtdb };

// Firebase v9 COMPAT config
const firebaseConfig = {
    apiKey: "AIzaSyBDQvjQ968Roz-03vYmbIP7zD6TJZuINu8",
    authDomain: "campustap-522d8.firebaseapp.com",
    databaseURL: "https://campustap-522d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "campustap-522d8",
    storageBucket: "campustap-522d8.appspot.com",
    messagingSenderId: "461548181335",
    appId: "1:461548181335:web:c26a6e0bdb5e61d45abec5"
};

// Initialize app
firebase.initializeApp(firebaseConfig);

// Global references
const auth = firebase.auth();
const db   = firebase.firestore();
const rtdb = firebase.database();

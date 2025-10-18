CampusTap — Firebase Auth + Mock Tap + Admin Top-Up
- Login/Registration uses Firebase Auth + Firestore (stores fullName, email, role, balance).
- Student 'Tap to Ride' deducts ₱10 from Firestore balance and records ride (with date/time) in localStorage for demo.
- Admin Dashboard shows mock charts from localStorage rides and includes a Manage Accounts section to top up balances via Firestore.
Files:
  - firebase-config.js
  - index.html
  - campustap.html
  - account.html
  - admin.html
  - about.html

CampusTap — Firebase Auth + Mock Tap
- Login/Registration uses Firebase Auth + Firestore (stores name/role/balance).
- Tap button simulates RFID and does two things:
  (1) Deducts balance in Firestore.
  (2) Records a ride (with date/time) in localStorage per user (mock).
- Student sees OWN ride history with date/time.
- Admin dashboard aggregates mock rides (from localStorage) just for demo.
- When RFID + backend are ready, switch ride storage from localStorage -> Firestore.

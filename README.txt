CUSTOMER + ADMIN FIREBASE SYSTEM

FILES
1. index.html = customer
2. admin.html = admin
3. firebase-config.js = Firebase connection
4. firebase-rules.json = Realtime Database rules
5. style.css = common design

ADMIN
Only: joshibasu12345@gmail.com

IMPORTANT FIREBASE SETUP
1. Firebase Console -> Authentication -> Sign-in method -> enable Google.
2. Authentication -> Settings -> Authorized domains: add your hosting domain.
3. Realtime Database -> Rules -> paste firebase-rules.json and Publish.
4. Upload all 5 files to the same hosting folder.
5. Open index.html for customers.
6. Open admin.html for admin.

DATA
- Customer details are saved under users/{customerUid}.
- Messages are saved under messages/{customerUid}.
- Presence under presence/{customerUid}.
- Typing under typing/{customerUid}.
- No Firebase Storage is used.
- Photo limit: 700 KB.
- Voice limit: 450 KB.

NOTE
Browser notifications require notification permission. Voice recording requires HTTPS (or localhost) and microphone permission.

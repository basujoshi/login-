CUSTOMER-ADMIN CHAT V6 FINAL

Customer flow:
Google Login -> Details Form -> Submit -> Form disappears -> success message -> chat.

Customer details:
Name, Gmail, Contact Number, WhatsApp Number, Reason.
Reason options include Website Developer, Software Developer, Shop Website, Billing Software, KhataPro Software, App Development, Website & App Development, Business Software, Other.

Chat:
Text, photo, voice, small profile photo, Sent/Read, online/offline, typing, browser notification, 1-minute edit/delete.

Admin:
Only joshibasu12345@gmail.com. Customer list/search, customer details, chat, photo/voice/text, online/typing/read, edit/delete.

NO FIREBASE STORAGE:
All photo and voice chat media are saved as data URLs inside Realtime Database.
Photo max 700KB. Voice max 450KB. Keep media small to avoid large database usage.

SETUP:
1. Firebase Authentication -> Google sign-in ON.
2. Realtime Database -> Rules -> paste firebase-rules.json -> Publish.
3. No Storage setup/rules required.
4. Use HTTPS or localhost.

LOGIN FIX V8:
Firebase Auth browserLocalPersistence is explicitly enabled. Refreshing/reopening the page keeps the Google session. The login screen appears only after an actual signed-out state. Use the Logout button to require login again.

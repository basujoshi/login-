import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase, ref, update, push, onValue, onDisconnect, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0C8ZAlYUZQM4UYs49xBhyMHwArJDLJpA",
  authDomain: "website-a091e.firebaseapp.com",
  databaseURL: "https://website-a091e-default-rtdb.firebaseio.com",
  projectId: "website-a091e",
  storageBucket: "website-a091e.firebasestorage.app",
  messagingSenderId: "204226900375",
  appId: "1:204226900375:web:2edc07a4db0a90fa4b14d2",
  measurementId: "G-WNSLPLBJB2"
};
const app=initializeApp(firebaseConfig);
const auth=getAuth(app),db=getDatabase(app),provider=new GoogleAuthProvider();
// Keep Google login after refresh/browser restart. Login is removed only by Logout.
await setPersistence(auth,browserLocalPersistence);
provider.setCustomParameters({prompt:"select_account"});
export {auth,db,provider,signInWithPopup,onAuthStateChanged,signOut,ref,update,push,onValue,onDisconnect,serverTimestamp};

import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH6RHvgLD2H22mSFe8gHqzraxcki9oc3U",
  authDomain: "express-auth-4dad2.firebaseapp.com",
  projectId: "express-auth-4dad2",
  storageBucket: "express-auth-4dad2.firebasestorage.app",
  messagingSenderId: "950999266047",
  appId: "1:950999266047:web:d0681cd20dddec335412ca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

if (typeof window !== "undefined" && location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}

export { auth, db };

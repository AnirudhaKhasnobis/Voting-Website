import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKBxv-zKbL0hxwC_uI_8X-giJOFyX3Jm8",
  authDomain: "http://blockfort-b8a91.firebaseapp.com",
  projectId: "blockfort-b8a91",
  storageBucket: "http://blockfort-b8a91.firebasestorage.app",
  messagingSenderId: "1036521088446",
  appId: "1:1036521088446:web:6cd3db860ede55edc3c5ef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo9JsPem6NqNWL1DHiPQFck5PLJvADRUI",
  authDomain: "congo-reservation.firebaseapp.com",
  projectId: "congo-reservation",
  storageBucket: "congo-reservation.appspot.com",
  messagingSenderId: "54528039217",
  appId: "1:54528039217:web:8158927e3b22c8a24a3810",
  measurementId: "G-E4MZGSVB4H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup, onAuthStateChanged, signOut, collection, addDoc, getDocs };

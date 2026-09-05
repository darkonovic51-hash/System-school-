// ==========================================================
// firebase-config.js
// نقطة الاتصال المركزية بـ Firebase - يُستورد في جميع صفحات النظام
// ==========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase, ref, get, set, update, remove, push, child,
  onValue, off, query, orderByChild, equalTo
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCljtKMldmy8V2IIEKwnYvVjFcKp2fC33g",
  authDomain: "academy-school-16d1b.firebaseapp.com",
  databaseURL: "https://academy-school-16d1b-default-rtdb.firebaseio.com",
  projectId: "academy-school-16d1b",
  storageBucket: "academy-school-16d1b.firebasestorage.app",
  messagingSenderId: "284992101039",
  appId: "1:284992101039:web:f6a3b834a58db6a037125a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

/* ================= إدارة الجلسة ================= */

const SESSION_KEY = "sm_institutionId";
const YEAR_KEY = "sm_currentYearId";

function setSessionInstitution(institutionId) {
  sessionStorage.setItem(SESSION_KEY, institutionId);
}

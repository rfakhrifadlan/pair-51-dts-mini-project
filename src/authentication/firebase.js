// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBQjYVxkcNPErJdMZ52MEp-A3jwkRE64hE",

  authDomain: "movies-051.firebaseapp.com",

  projectId: "movies-051",

  storageBucket: "movies-051.appspot.com",

  messagingSenderId: "406937222012",

  appId: "1:406937222012:web:d9455e2714b4229f6a82f9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registerByEmail = async (email, pass) => {
  try {
    const getUserRegis = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    console.log("Berhasil Login", getUserRegis.user);
  } catch (e) {
    console.log(e);
    console.log("error auth ", e.code);
    console.log("error msg ", e.message);
  }
};

const loginByEmail = async (email, password) => {
  try {
    const getUserLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Logged", getUserLogin.user);
  } catch (e) {
    console.log(e);
    console.log("error auth ", e.code);
    console.log("error msg ", e.message);
  }
};

const logout = () => {};

export { auth, registerByEmail, loginByEmail, logout };

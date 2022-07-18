// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPsGfmJd1Hf5e-IU_VfxxtdLdjHf0fM4o",
  authDomain: "dts-movie51.firebaseapp.com",
  projectId: "dts-movie51",
  storageBucket: "dts-movie51.appspot.com",
  messagingSenderId: "708085648856",
  appId: "1:708085648856:web:9508d92f120064dd0536ad",
  measurementId: "G-8B1GQNVQSR",
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
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

const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const loginByGoogle = async () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
const loginByGithub = async () => {
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};

export {
  auth,
  registerByEmail,
  loginByEmail,
  logout,
  loginByGoogle,
  loginByGithub,
};

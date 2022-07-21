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
    // console.log(e);
    // console.log("error auth ", e.code);
    // console.log("error msg ", e.message);
    alert("Email / Password Salah");
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

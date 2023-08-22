// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1EAA_qIhjH94WLzgRELmDeLxLgnhRRFY",
  authDomain: "fir-auth-777c8.firebaseapp.com",
  projectId: "fir-auth-777c8",
  storageBucket: "fir-auth-777c8.appspot.com",
  messagingSenderId: "729903317812",
  appId: "1:729903317812:web:af44a257eee41abd1edb61",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

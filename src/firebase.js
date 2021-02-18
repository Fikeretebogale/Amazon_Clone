import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBat6xHS4Jlrewhcn-PS84urvWQLR2c11E",
  authDomain: "clone-b6447.firebaseapp.com",
  projectId: "clone-b6447",
  storageBucket: "clone-b6447.appspot.com",
  messagingSenderId: "918711191197",
  appId: "1:918711191197:web:6ba11350cf7ac549633674",
  measurementId: "G-WCCMCTHMWD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

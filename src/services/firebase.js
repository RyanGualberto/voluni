import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTCrsM6WS5ISLfG-DZ7C6tfHlduEHLnUg",
  authDomain: "voluni.firebaseapp.com",
  projectId: "voluni",
  storageBucket: "voluni.appspot.com",
  messagingSenderId: "210945298494",
  appId: "1:210945298494:web:bb4b549d164187bb64c16f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

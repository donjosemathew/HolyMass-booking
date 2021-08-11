import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-UPKjMWSUsxBUyP6N6b3LE-cr7YixYks",
  authDomain: "smcbookmass.firebaseapp.com",
  projectId: "smcbookmass",
  storageBucket: "smcbookmass.appspot.com",
  messagingSenderId: "685443174416",
  appId: "1:685443174416:web:55fd099168b105a9bbba95",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, provider, db, storage };

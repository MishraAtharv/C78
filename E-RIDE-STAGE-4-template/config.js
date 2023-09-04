import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDG2fu_W8sRcnkwBFvQNe5IY_zXIYhhRxE",
  authDomain: "e-ride-fe16e.firebaseapp.com",
  projectId: "e-ride-fe16e",
  storageBucket: "e-ride-fe16e.appspot.com",
  messagingSenderId: "45486628308",
  appId: "1:45486628308:web:a2ce468507f4f037520a41",
  measurementId: "G-H2J6RN2JPF"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



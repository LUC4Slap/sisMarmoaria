import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDGeWBf7HdAyD0OF-5oLsApqL2Sxvf7iyw",
  authDomain: "orcamento-marmoaria.firebaseapp.com",
  projectId: "orcamento-marmoaria",
  storageBucket: "orcamento-marmoaria.appspot.com",
  messagingSenderId: "125868939167",
  appId: "1:125868939167:web:37d05b50c9dcb965c50faa",
  measurementId: "G-1BB3YTSFZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

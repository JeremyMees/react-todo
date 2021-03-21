import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBXevANEGq9L3vANC8Tj4XtOMDR_a8-E6U",
  authDomain: "todo-1e98b.firebaseapp.com",
  projectId: "todo-1e98b",
  storageBucket: "todo-1e98b.appspot.com",
  messagingSenderId: "738099301924",
  appId: "1:738099301924:web:f2f3c1cdcfbf650842d2b1",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export default firebase;

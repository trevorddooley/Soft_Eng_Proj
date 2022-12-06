import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTTEIXbO0fQKCyLMsWR6VDvgvRyeBS1Ic",
    projectId: "apcs360-9ac59",
    appId: "1:830189127711:web:82efddaa5f96beb5c8ad2a"
}

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = firebase.firestore();

export {db, firebase};

import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB8rAGe7oQYpKEnzZPiNJzFq0LNfqJzcYg",
  authDomain: "design-demo-app.firebaseapp.com",
  projectId: "design-demo-app",
  storageBucket: "design-demo-app.appspot.com",
  messagingSenderId: "435112721107",
  appId: "1:435112721107:web:3ac8427736434ba94c3226",
  measurementId: "G-1VDLWZQMBM"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
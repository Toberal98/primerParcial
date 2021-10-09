import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzUY3WjaYcM18p9mCAvrWHjsBynL36VgU",
    authDomain: "reactnative-firabase.firebaseapp.com",
    projectId: "reactnative-firabase",
    storageBucket: "reactnative-firabase.appspot.com",
    messagingSenderId: "999370739767",
    appId: "1:999370739767:web:ed6101d89bb0bcb374afb2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBgMI2_ZowUv7kLO5X5BEKK9u56GknpE",
  authDomain: "frequency-55b5a.firebaseapp.com",
  projectId: "frequency-55b5a",
  storageBucket: "frequency-55b5a.appspot.com",
  messagingSenderId: "51706311986",
  appId: "1:51706311986:web:b0a4aca219ef4ebb97132b",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
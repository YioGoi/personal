import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAA3XcFv8Ui0rNSkaZWZ-PMJZ-vR21-bYU",
  authDomain: "my-journey-8e7ba.firebaseapp.com",
  projectId: "my-journey-8e7ba",
  storageBucket: "my-journey-8e7ba.appspot.com",
  messagingSenderId: "148876067835",
  appId: "1:148876067835:web:ac80dd5d529ef6057a015e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }

 
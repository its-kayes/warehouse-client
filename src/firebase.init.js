// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBoxKHtzlB4eyPDj-dnsJSGG5ZPilXVocU",
  // authDomain: "warehouse-32ec4.firebaseapp.com",
  // projectId: "warehouse-32ec4",
  // storageBucket: "warehouse-32ec4.appspot.com",
  // messagingSenderId: "638592481283",
  // appId: "1:638592481283:web:4487e5076e261c6c9c7636"

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyADU02P8Bd7mslsBMkGSmEdnpK-U_pUywU",
  authDomain: "react-p2-5bc06.firebaseapp.com",
  projectId: "react-p2-5bc06",
  storageBucket: "react-p2-5bc06.appspot.com",
  messagingSenderId: "434689819784",
  appId: "1:434689819784:web:cc3964538ee9571d174b3d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export { database };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyOZi5XNjYaLXumYe4MO7Nltldps-MlC4",
  authDomain: "group2-movie-app.firebaseapp.com",
  projectId: "group2-movie-app",
  storageBucket: "group2-movie-app.firebasestorage.app",
  messagingSenderId: "721730561014",
  appId: "1:721730561014:web:bd1ca263b61f286c955dd7",
};

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const firestore = getFirestore(app);

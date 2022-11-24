import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxvgzUytTgwYXoetZxYTKWeWPvAa8ivEU",
  authDomain: "fb-curd-479c6.firebaseapp.com",
  projectId: "fb-curd-479c6",
  storageBucket: "fb-curd-479c6.appspot.com",
  messagingSenderId: "704483404754",
  appId: "1:704483404754:web:bcfd092baa10d4e83c760b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
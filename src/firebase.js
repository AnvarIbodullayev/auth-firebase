// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqda0qosXv-Zxb4MialYNV6doiI-TOnLM",
  authDomain: "authproject-9f04b.firebaseapp.com",
  projectId: "authproject-9f04b",
  storageBucket: "authproject-9f04b.appspot.com",
  messagingSenderId: "594089138879",
  appId: "1:594089138879:web:b32981ba69ae19f9b9040a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
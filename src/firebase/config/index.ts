// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnZopNa-UvLWX7oLKynXUkFoVVskYK6HM',
  authDomain: 'ocean-quality.firebaseapp.com',
  projectId: 'ocean-quality',
  storageBucket: 'ocean-quality.appspot.com',
  messagingSenderId: '380664517429',
  appId: '1:380664517429:web:5faeabf5c90fc4dbcb727c',
  measurementId: 'G-Z8WM9C93LS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// eslint-disable-next-line import/prefer-default-export
export { db, auth };

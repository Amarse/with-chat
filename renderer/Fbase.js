import * as firebase from 'firebase/compat/app';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {  Timestamp, getFirestore, collection } from 'firebase/firestore';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseInstance = firebase;
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app); //access to the database
const auth = getAuth(app); //access to the authentication
const storage = getStorage(app);
const timeStamp = Timestamp;
export { db, auth, storage, firebaseInstance, timeStamp, collection };

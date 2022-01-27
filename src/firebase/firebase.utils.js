import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCH0WHusfO79y70JnMvk0CVf3CXGmnbtY',
  authDomain: 'crown-db-44167.firebaseapp.com',
  projectId: 'crown-db-44167',
  storageBucket: 'crown-db-44167.appspot.com',
  messagingSenderId: '409872052638',
  appId: '1:409872052638:web:4678883e721d92744ba68f',
  measurementId: 'G-YHV75MSNZF',
};

const app = initializeApp(firebaseConfig);

const signInWithGoogleProvider = new GoogleAuthProvider();
signInWithGoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const firestore = getFirestore();
export const signInWithGoogle = () =>
  signInWithPopup(auth, signInWithGoogleProvider);
export default app;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBf7hcJo_PdajQWxxYcsaYhNsO5pbIP1vw',
  authDomain: 'pirasanth.firebaseapp.com',
  projectId: 'pirasanth',
  storageBucket: 'pirasanth.appspot.com',
  messagingSenderId: '684717025357',
  appId: '1:684717025357:web:f2b5e1e29282ca4c9b5404',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

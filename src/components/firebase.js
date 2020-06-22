import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
  apiKey: 'AIzaSyC3c-29Zt0jtVNddq_RWc3psSts_9nAmoc',
  authDomain: 'pl-training-platform.firebaseapp.com',
  databaseURL: 'https://pl-training-platform.firebaseio.com',
  projectId: 'pl-training-platform',
  storageBucket: 'pl-training-platform.appspot.com',
  messagingSenderId: '256685770769',
  appId: '1:256685770769:web:4171c75652aeafeb7149b0',
  measurementId: 'G-QW7861NQWK',
};

let instance = null;

const getFirebase = () => {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
};

export default getFirebase;

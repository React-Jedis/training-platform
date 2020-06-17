// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3c-29Zt0jtVNddq_RWc3psSts_9nAmoc',
  authDomain: 'pl-training-platform.firebaseapp.com',
  databaseURL: 'https://pl-training-platform.firebaseio.com',
  projectId: 'pl-training-platform',
  storageBucket: 'pl-training-platform.appspot.com',
  messagingSenderId: '256685770769',
  appId: '1:256685770769:web:4171c75652aeafeb7149b0',
  measurementId: 'G-QW7861NQWK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.analytics()

export default firebase;

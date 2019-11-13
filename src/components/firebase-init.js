import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD5mx9Rgatv74pKXzJ7ZcN2oaO7znZWyFw',
  authDomain: 'cis-371-group-proj-note-taker.firebaseapp.com',
  databaseURL: 'https://cis-371-group-proj-note-taker.firebaseio.com',
  projectId: 'cis-371-group-proj-note-taker',
  storageBucket: 'cis-371-group-proj-note-taker.appspot.com',
  messagingSenderId: '76241381852',
  appId: '1:76241381852:web:46dc069daedfb82b334719',
  measurementId: 'G-JV07JG72N7',
};

firebase.initializeApp(firebaseConfig);
const AppDB = firebase.firestore();
const AppAuth = firebase.auth();
const AppStorage = firebase.storage();

export { AppDB, AppAuth, AppStorage };

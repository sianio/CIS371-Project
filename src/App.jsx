import React from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseConfig from './firebaseConfig';
import LoginScreen from './screens/login-screen';
import { AppAuth } from './firebase-init';

const firebaseAppAuth = AppAuth;

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = (props) => {
  const bundledAuthProps = props;

  return (
    <div className="App">
      <LoginScreen authInstance={bundledAuthProps} />
    </div>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

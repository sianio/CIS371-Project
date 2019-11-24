import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import DashboardScreen from './screens/dashboard-screen';
import { AppAuth } from './firebase-init';

const firebaseAppAuth = AppAuth;

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = (props) => {
  const bundledAuthProps = props;

  return (
    <div className="App">
      <DashboardScreen authInstance={bundledAuthProps} />
    </div>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

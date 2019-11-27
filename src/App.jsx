import React, { useState, useEffect } from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from './screens/login-screen';
import DashboardScreen from './screens/dashboard-screen';
import { AppAuth } from './firebase-init';

import cloneDeep from 'lodash/cloneDeep';

const firebaseAppAuth = AppAuth;

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const App = (props) => {
  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    user,
    signOut,
  } = props;

  const [userState, setUserState] = useState(null);

  useEffect(() => {
    if (user !== null) {
      if (user) {
        const { uid } = user;
        setUserState(cloneDeep({ uid }));
      }
    }
  }, [user]);

  const loginFunctions = { signInWithEmailAndPassword, createUserWithEmailAndPassword };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen loginFunctions={loginFunctions} userStateHooks = {{ userState, setUserState }} />
          </Route>
          <Route path="/dashboard">
            <DashboardScreen userStateHooks={{ userState, setUserState }} signOut={signOut} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

import React from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginScreen from './screens/login-screen';
import DashboardScreen from './screens/dashboard-screen';
import { AppAuth } from './firebase-init';
import LoginScreen from './screens/login-screen';
        
const firebaseAppAuth = AppAuth;

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = (props) => {
  const bundledAuthProps = props;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginScreen authInstance={bundledAuthProps} />
          </Route>
          <Route path="/dashboard">
            <DashboardScreen authInstance={bundledAuthProps} />
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

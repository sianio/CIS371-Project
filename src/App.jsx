import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import useFirebaseAuthentication from './components/effects/auth-effects';
import { AppAuth } from './firebase-init';

import LoginScreen from './screens/login-screen';
import DashboardScreen from './screens/dashboard-screen';

const LoginWithHistory = withRouter(LoginScreen);
const DashboardWithHistory = withRouter(DashboardScreen);

const App = () => {

  const [uid, setUid] = useState(null);
  const authHook = useFirebaseAuthentication(AppAuth);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen uidHooks={{ uid, setUid }} authHook={authHook} />
          </Route>
          <Route path="/dashboard">
            <DashboardScreen uidHooks={{ uid, setUid }} authHook={authHook} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from './screens/login-screen';
import DashboardScreen from './screens/dashboard-screen';
import { AppAuth } from './firebase-init';

const App = (props) => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/dashboard">
            <DashboardScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { flexbox } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { gray } from 'ansi-colors';
import HomeToolbar from '../components/toolbar/HomeToolbar';

const loginStyle = makeStyles(() => ({
  root: {
    color: gray,
    display: flexbox
  },
  textField: {
    width: 200
  }
}));

const LoginScreen = ({ authInstance }) => {
  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    user,
    error,
    signOut,
  } = authInstance;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: Make this change screens to the dashboard on update.
  useEffect(() => {
    console.log(user);
  }, [user]);

  // TODO: Make this give some sort of message to the user saying invalid password
  useEffect(() => {
    console.log(error);
  }, [error]);

  const login = () => {
    signInWithEmailAndPassword(email, password);
  };

  const signUp = () => {
    createUserWithEmailAndPassword(email, password);
  };

  const classes = loginStyle();

  const routeToDashboard = () => (
    <Redirect to="/dashboard" />
  );

  const renderLogin = () => (
    <Paper className={classes.root} elevation={10}>
      <HomeToolbar />
      <Typography variant="h5" component="h3" className={classes.heading}>
        Welcome, login or sign-up!
      </Typography>
      <TextField
        id="login"
        required
        variant="outlined"
        className={classes.textField}
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        type="text"
        label="Username"
      />
      <TextField
        id="password"
        required
        variant="outlined"
        className={classes.textField}
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        type="password"
        label="Password"
      />
      <Button color="inherit" onClick={login}>
        Login
      </Button>
      <Button color="inherit" onClick={signUp}>
        Sign Up
      </Button>
      <Button color="inherit" onClick={signOut}>
        Logout (PLACEHOLDER)
      </Button>
    </Paper>
  );

  const checkRendering = () => {
    if (user === null) {
      return renderLogin();
    }
    return routeToDashboard();
  };

  return (
    <div>
      {checkRendering()}
    </div>
  );
};

export default LoginScreen;

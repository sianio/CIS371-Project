import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { flexbox } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { gray } from 'ansi-colors';
import HomeToolbar from '../components/toolbar/HomeToolbar';

import { AppAuth } from '../firebase-init';


const loginStyle = makeStyles(() => ({
  root: {
    color: gray,
    display: flexbox,
  },
  textField: {
    width: 200,
  },
}));

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AppAuth.onAuthStateChanged((u) => {
      alert(`Auth state has changed`);
    });
  }, []);

  const classes = loginStyle();

  const login = () => {
    AppAuth.signInWithEmailAndPassword(email, password)
      .then((u) => {
        // eslint-disable-next-line no-alert
        alert('Signed in successfuly');
        // Do the routing stuff below. Remove the alert eventually
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`Error with sign in ${err}`);
      });
  };

  const signUp = () => {
    AppAuth.createUserWithEmailAndPassword(email, password)
      .then((u) => {
        // eslint-disable-next-line no-alert
        alert(`Created an account with email ${email}.`);
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`Failed to create an account ${err}`);
      });
  };

  // This is a placeholder function to sign out of the application.
  const logout = () => {
    setEmail('');
    setPassword('');
    AppAuth.signOut()
      .then(() => {
        alert('Signed out ');
      })
      .catch((err) => {
        alert(`Error on sign out ${err}`);
      });
  };

  return (
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
      <Button color="inherit" onClick={logout}>
        Logout (PLACEHOLDER)
      </Button>
    </Paper>
  );
};

export default LoginScreen;

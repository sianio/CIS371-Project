import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import HomeToolbar from '../components/toolbar/HomeToolbar';

import { AppAuth } from '../firebase-init';
import useFirebaseAuthentication from '../components/effects/auth-effects.js';

const loginStyle = makeStyles(() => ({
  root: {
    height: 200,
    width: 450,
    margin: 20,
    padding: 10,
    textAlign: 'center',
    display: 'inline-box',
    background: '#c5cae9',
  },
  textField: {
    width: 400,
    padding: 10,
  },
  heading: {
    width: 600,
    padding: 15,
    color: 'white',
  },
  main: {
    background: '#7986cb',
  }
}));

const LoginScreen = ({ uidHooks, authHook }) => {
  const { uid, setUid } = uidHooks;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = AppAuth.onAuthStateChanged((event) => {
  //     if (event) {
  //       setLoggedIn(true);
  //       console.log('Event was true');
  //     } else {
  //       setLoggedIn(false);
  //       console.log('Event was false');
  //     }
  //   });
  //   unsubscribe();
  // }, []);

  const login = () => {
    AppAuth.signInWithEmailAndPassword(email, password)
      .then((event) => {
        console.log(event);
        setUid(event.user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signUp = () => {
    AppAuth.createUserWithEmailAndPassword(email, password)
      .then((e) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    AppAuth.signOut()
      .then(() => {
        console.log('Signed out');
      });
  };

  const classes = loginStyle();

  const routeToDashboard = () => <Redirect to="/dashboard" />;

  const renderLogin = () => (
    <Box>
      {/* <Paper className={classes.root} elevation={10}> */}
      <HomeToolbar />
      <Typography variant="h5" component="h3" className={classes.heading}>
        Welcome, login or sign-up!
      </Typography>
      <Paper className={classes.root} elevation={10}>
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
        <ButtonGroup
          variant="contained"
          // color="#e8eaf6"
          size="large"
          aria-label="large contained button group"
        >
          <Button onClick={login}>Login</Button>
          <Button onClick={signUp}>Sign Up</Button>
          <Button onClick={signOut}>Sign Out</Button>
        </ButtonGroup>
      </Paper>
    </Box>
  );

  const checkRendering = () => {
    if (!authHook) {
      return renderLogin();
    }
    return routeToDashboard();
  };

  return <div>{checkRendering()}</div>;
};

export default LoginScreen;

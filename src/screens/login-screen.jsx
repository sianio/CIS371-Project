import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import HomeToolbar from '../components/toolbar/HomeToolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';
import { AppAuth } from '../firebase-init';


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
  },
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
              color='#e8eaf6'
              size="large"
              aria-label="large contained button group"
      >
              <Button onClick={login}>Login</Button>
              <Button onClick={signUp}>Sign Up</Button>
              <Button onClick={logout}>Log Out (PLACEHOLDER)</Button>
      </ButtonGroup>
    </Paper>
    </Box>
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

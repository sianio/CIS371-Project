import React, { useState, useEffect } from 'react';
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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   AppAuth.onAuthStateChanged((u) => {
  //     alert(`Auth state has changed`);
  //     // TODO: Change the current route to the dashboard.
  //   });
  // }, []);

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
    <Box className={classes.main} height="100%">
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
};

export default LoginScreen;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HomeToolbar from '../components/toolbar/HomeToolbar';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { flexbox } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { gray } from 'ansi-colors';


const loginStyle = makeStyles((theme) => ({
    root: {
        color: gray,
        display: flexbox,
    },
    textField: {
        width: 200
      },
  }));

  const LoginScreen = () => {
    const classes = loginStyle();
  
    return (
      <Paper className={classes.root} elevation={10}>
          <HomeToolbar />
          <Typography variant="h5" component="h3" className={classes.heading}>
             Welcome, login or sign-up!
        </Typography>
        <TextField id="login" required variant="outlined" className={classes.textField} type="text" label="Username"/>
        <TextField id="password" required variant="outlined" className={classes.textField} type="text" label="Password"/>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
    </Paper>
    );
  };
  
  export default LoginScreen;
  
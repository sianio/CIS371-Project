import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import toolbarStyles from './toolbarStyles';

const HomeToolbar = () => {
  const classes = toolbarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Typography variant="h6" className={classes.title}>
          Blanks
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </AppBar>
    </div>
  );
};

export default HomeToolbar;

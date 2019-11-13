import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const homeStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    // eslint-disable-next-line quotes
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomeToolbar = () => {
  const classes = homeStyle();

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

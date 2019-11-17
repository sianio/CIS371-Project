import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import AccountMenu from './AccountMenu';
import NotificationMenu from './NotificationMenu';

const dashboardStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    // eslint-disable-next-line quotes
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
  },
}));

const DashboardBar = () => {
  const classes = dashboardStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Typography variant="h5" className={classes.title}>
          Blanks
        </Typography>
        <Button color="inherit">Create New Document</Button>
        <Tabs>
          <Tab color="inherit" label="My Documents" />
          <Tab color="inherit" label="Shared With Me" />
        </Tabs>
        <NotificationMenu />
        <AccountMenu />
      </AppBar>
    </div>
  );
};

export default DashboardBar;

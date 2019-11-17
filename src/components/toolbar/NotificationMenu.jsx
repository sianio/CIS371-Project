import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { spacing } from '@material-ui/system';

// TODO Implement recivieng messeges from Cloud messeging.

// eslint-disable-next-line react/prop-types
// const NotificationItem = ({ details }) => (
//   <MenuItem>
//     {details}
//   </MenuItem>
// );

const notificationStyle = makeStyles(() => ({
  root: {
    alignSelf: 'center',
  },
}));


const NotificationMenu = () => {
  const classes = notificationStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Button color="inherit" onClick={handleClick}>
        Notifications
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          Placeholder1
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Placeholder2
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationMenu;

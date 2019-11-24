import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import Paper from '@material-ui/core/Paper';

import DashboardBar from '../components/toolbar/DashboardBar';

import { AppDB } from '../firebase-init.js';

const DocumentItem = (props) => {
  const { docName, dateModified } = props;

  const openDoc = () => {
    // TODO: Open a document
    alert(`Opening file ${docName}`);
    return true;
  };

  return (
    <ListItem button onClick={openDoc}>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary={docName} />
      <ListItemText primary={dateModified} />
    </ListItem>
  );
};

const DashboardScreen = ({ authInstance }) => {
  const {user, signOut, error} = authInstance;

  const [myDocList, setMyDocList] = useState([]);
  const [sharedDocList, setShareDocList] = useState([]);
  const [docDbRoot, setDocDbRoot] = useState(undefined);
  const [usersRoot, setUsersRoot] = useState(undefined);
  const [tabIndex, setTabIndex] = useState(0);

  // Setup content instances.
  useEffect(() => {
    if (user !== null) {
      console.log(user);
    }
  });
  
  const onTabChange = (event, value) => {
    setTabIndex(value);
  };

  return (
    <div>
      <DashboardBar tabVal={tabIndex} tabOnChange={onTabChange} />
      <Paper>
        <List>
          <ListItem>
            <ListItemText primary="place1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="place2" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default DashboardScreen;

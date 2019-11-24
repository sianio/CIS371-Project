import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import Paper from '@material-ui/core/Paper';

import DashboardBar from '../components/toolbar/DashboardBar';

import { AppAuth, AppDB } from '../firebase-init.js';

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

const DashboardScreen = () => {
  const [myDocList, setMyDocList] = useState([]);
  const [sharedDocList, setShareDocList] = useState([]);
  const [docDbRoot, setDocDbRoot] = useState(undefined);
  const [usersRoot, setUsersRoot] = useState(undefined);
  const [tabIndex, setTabIndex] = useState(0);

  // useEffect(() => {
  //   AppAuth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // const { uid } = AppAuth.currentUser.providerData;
  //       // setUsersRoot(AppDB.collection('users').doc(uid));
  //       setDocDbRoot(AppDB.collection('documents'));
  //     } else {
  //       alert(`User is logged out`);
  //       setMyDocList([]);
  //       setShareDocList([]);
  //       setDocDbRoot(undefined);
  //       setUsersRoot(undefined);
  //       // TODO: route back to login screen.
  //     }
  //   });
  //   // const { uid } = AppAuth.currentUser.providerData;
  //   docDbRoot
  //     .where('sharedWith', 'array-contains', 'abc')
  //     .onSnapshot((snapshot) => {
  //       snapshot.docChanges().forEach((change) => {
  //         if (change.type === 'added') {
  //           const data = { ...change.doc.data(), id: change.doc.id };
  //           setShareDocList([...sharedDocList, data]);
  //         }
  //         if (change.type === 'removed') {
  //           const { id } = change.doc;
  //           const victimIndex = sharedDocList.findIndex((e) => e.id === id);
  //           const list = sharedDocList.splice(victimIndex, 1);
  //           setShareDocList([...list]); // Is there any better way to do this?
  //         }
  //       });
  //     });

  //   usersRoot.collection('docs').onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === 'added') {
  //         const data = { ...change.doc.data(), id: change.doc.id };
  //         setMyDocList([...myDocList, data]);
  //       }
  //       if (change.type === 'removed') {
  //         const { id } = change.doc;
  //         const victimIndex = myDocList.findIndex((e) => e.id === id);
  //         const list = myDocList.splice(victimIndex, 1);
  //         setMyDocList([...list]);
  //       }
  //     });
  //   });
  // });

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

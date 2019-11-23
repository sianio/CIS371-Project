import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
// import FolderIcon from '@material-ui/icons/Folder';

import Paper from '@material-ui/core/Paper';

import DashboardBar from '../components/toolbar/DashboardBar';

import { AppDB } from '../firebase-init.js';

// const DocumentItem = props => {
//   const { docName, dateModified } = props;

//   const openDoc = () => {
//     // TODO: Open a document
//     alert(`Opening file ${docName}`);
//     return true;
//   };

//   return (
//     <ListItem button onClick={openDoc}>
//       <ListItemIcon>
//         <DescriptionIcon />
//       </ListItemIcon>
//       <ListItemText primary={docName} />
//       <ListItemText primary={dateModified} />
//     </ListItem>
//   );
// };

// // NOT DONE
// const FolderType = (props) => {
//   const { folderName, folderPk } = props;
//   const [folderItems, setFolderItems] = useState(undefined);
//   const [open, setOpen] = useState(false);

//   // const showFolderItems = () => {
//   //   const listReturn = undefined
//   //   if (!open) {
//   //     return <div />
//   //   }
//   //   else {

//   //   }
//   // }
//   return (
//     <ListItem button>
//       <ListItemIcon>
//         <FolderIcon />
//       </ListItemIcon>
//       <ListItemText primary={folderName} />
//     </ListItem>
//   );
// };

// const DashboardScreen = () => {
//   const [docList, setDocList] = useState(undefined);
//   const [docDbRoot, setDocDbRoot] = useState(undefined);
//   const [usersRoot, setUsersRoot] = useState(undefined);
//   useEffect(() => {
//     setDocDbRoot(AppDB.collection('documents'));
//   });
// };

// export default DashboardScreen;

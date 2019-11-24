import React from 'react';
import './App.css';
// import LoginScreen from './screens/login-screen';
// import DashboardScreen from './screens/dashboard-screen';
import HomeToolbar from './components/toolbar/HomeToolbar';
import NoteEditor from './components/editor/NoteEditor';

const App = () => (
  <div className="App">
    <HomeToolbar />
    <NoteEditor />
  </div>
);

export default App;

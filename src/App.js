import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import IssueUploadPage from './IssueUploadPage/IssueUploadPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <IssueUploadPage />
    </div>
  );
}

export default App;
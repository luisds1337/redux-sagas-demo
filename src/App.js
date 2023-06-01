import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { LoginPage, AccountPage } from './containers';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" Component={LoginPage}/>
          <Route exact path="/home" Component={AccountPage}/>
        </Routes>
    </Router>
  );
};

export default App;

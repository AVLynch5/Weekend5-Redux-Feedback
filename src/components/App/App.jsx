import React from 'react';
import axios from 'axios';
import './App.css';
//import useSelector
import { useSelector } from 'react-redux';
//import components
import Home from '../Home/Home';
import Form1 from '../Form1/Form1';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';
import Form4 from '../Form4/Form4';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
//import Router, Route, Link for hash routing
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  //declare reduxStore
  const reduxStore = useSelector(store => store);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/*<p>{JSON.stringify(reduxStore)}</p> - to view reduxStore contents - */}
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form1">
          <Form1 />
        </Route>
        <Route path="/Form2">
          <Form2 />
        </Route>
        <Route path="/Form3">
          <Form3 />
        </Route>
        <Route path="/Form4">
          <Form4 />
        </Route>
        <Route path="/Review">
          <Review />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;

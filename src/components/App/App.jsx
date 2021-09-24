import React from 'react';
import axios from 'axios';
import './App.css';
//import useSelector
import { useSelector } from 'react-redux';
//import components
import Form1 from '../Form1/Form1';

function App() {

  //declare reduxStore
  const reduxStore = useSelector(store => store);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <p>{JSON.stringify(reduxStore)}</p>
      <Form1 />
    </div>
  );
}

export default App;

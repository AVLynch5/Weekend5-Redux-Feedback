import React from 'react';
import axios from 'axios';
import './App.css';
//import useSelector
import { useSelector } from 'react-redux';
//import components
import Form1 from '../Form1/Form1';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';
import Form4 from '../Form4/Form4';
import Review from '../Review/Review';

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
      <Form2 />
      <Form3 />
      <Form4 />
      <Review />
    </div>
  );
}

export default App;

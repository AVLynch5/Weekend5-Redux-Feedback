import React from 'react';
import axios from 'axios';
import './App.css';
//import useSelector
import { useSelector } from 'react-redux';
//import useDispatch
import { useDispatch } from 'react-redux';
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
  //declare dispatch
  const dispatch = useDispatch();

  //declare reduxStore
  //const reduxStore = useSelector(store => store); - not needed if not displaying store with JSON.stringify

  //Move AXIOS functions here! Pass via props

  //GET function. Could just GET data from server with DB query and map response.data like before, but will dispatch to redux for practice
  //typically, would put useEffect and GET in app.jsx and access in components via props. I could move GET to app.jsx and pass it here via props, therefore making it passable to Review.jsx where it can be called in POST.
  //No need for POST function in Review.jsx to call GET function.... admin page GETs and reloads on page load.
  const refreshFeedback = () => {
    axios({
        method: 'GET',
        url: '/feedback',
    }).then((response) => {
        //response.data is the array of feedback objects
        //dispatch response.data to storedFeedbackReducer
        dispatch({
            type: 'GET_FEEDBACK_DATA',
            payload: response.data,
        });
    }).catch((error) => {
        console.log('Error on GET', error);
    })
  }

  //function deleteFeedback - axios delete call. Takes feedbackId
  const deleteFeedback = (feedbackId) => {
    axios({
        method: 'DELETE',
        url: `/feedback/${feedbackId}`,
    }).then((response) => {
        //then GET function to re-render
        refreshFeedback();
    }).catch((error) => {
        console.log('Error deleting feedback', error);
    })
  }
  
  //function putFeedback - takes in item id and item flagged bool. Declares var toggleBool to switch value of bool. Makes axios PUT call to server to change value of bool to toggleBool then calls GET
  const putFeedback = (feedbackId, feedbackBool) => {
    //declare toggleBool to switch current value of boolean
    const toggleBool = !feedbackBool;
    //axios
    axios({
        method: 'PUT',
        url: `/feedback/${feedbackId}`,
        data: {bool: toggleBool},
    }).then((response) => {
        //GET function to refresh DOM
        refreshFeedback();
    }).catch((error) => {
        console.log('Error changing BOOL value in DB', error);
    })
  }

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
          <Admin refreshFeedback={refreshFeedback} deleteFeedback={deleteFeedback} putFeedback={putFeedback}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;



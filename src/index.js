import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import logger
import logger from 'redux-logger';
//import redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers
//reducer to interact with DB
const storedFeedbackReducer = (state = [], action) => {
    //TODO - set w/ data from server/DB
    switch (action.type) {
        //GET action
        case 'GET_FEEDBACK_DATA':
            return action.payload;
        default:
            return state;
    }
}
//reducer to temporarily hold feedback object
const tempFeedbackReducer = (state = {form1: '', form2: '', form3: '', form4: ''}, action) => {
    //TODO - set with data stored temporarily for form submit
    //if (action.type === 'SET_FORM_1') {
    //    return {...state, form1: action.payload}
    //}
    //if (action.type === 'SET_FORM_2') {
    //    return {...state, form2: action.payload}
    //}
    //if (action.type === 'SET_FORM_3') {
    //    return {...state, form3: action.payload}
    //}
    //if (action.type === 'SET_FORM_4') {
    //    return {...state, form4: action.payload}
    //}
    //if (action.type === 'CLEAR_TEMPFB') {
    //    return {form1: '', form2: '', form3: '', form4: ''};
    //}
    //return state;
    //IDEA - replace wall of if statements with a switch
    switch (action.type) {
        case 'SET_FORM_1':
            return {...state, form1: action.payload};
        case 'SET_FORM_2':
            return {...state, form2: action.payload};
        case 'SET_FORM_3':
            return {...state, form3: action.payload};
        case 'SET_FORM_4':
            return {...state, form4: action.payload};
        case 'CLEAR_TEMPFB':
            return {form1: '', form2: '', form3: '', form4: ''};
        default:
            return state;
    }
}

//declare store instance - store is js object that holds info
const storeInstance = createStore(
    combineReducers({
        storedFeedbackReducer, tempFeedbackReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();

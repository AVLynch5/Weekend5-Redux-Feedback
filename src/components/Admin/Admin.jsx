//import react and useEffect
import React, { useEffect } from 'react';
//import axios
import axios from 'axios';
//import useDispatch
import {useDispatch} from 'react-redux';
//import useSelector 
import { useSelector } from 'react-redux';

function Admin() {
    //declare dispatch
    const dispatch = useDispatch();

    //declare store - access array storedFeedbackReducer
    const dataArray = useSelector(store => store.storedFeedbackReducer);

    //useEffect with GET function to GET feedback data from server on page load
    useEffect(() => {
        console.log('In useEffect');
        refreshFeedback();
    }, []);

    //GET function. Could just GET data from server with DB query and map response.data like before, but will dispatch to redux for practice
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

    return(
        <>
            <div>
                <h1>Feedback Results</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        
        </>
    );
}

export default Admin;
//import react and useEffect
import React, { useEffect } from 'react';
//import axios
import axios from 'axios';
//import useDispatch
import {useDispatch} from 'react-redux';
//import useSelector 
import { useSelector } from 'react-redux';
import { CommandCompleteMessage } from 'pg-protocol/dist/messages';

function Admin() {
    //declare dispatch
    const dispatch = useDispatch();

    //declare store - access array storedFeedbackReducer which should be populated by GET
    const dataArray = useSelector(store => store.storedFeedbackReducer);

    //useEffect with GET function to GET feedback data from server on page load
    useEffect(() => {
        console.log('In useEffect');
        refreshFeedback();
    }, []);

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

    //handleFeedbackDelete - calls function deleteFeedback on button click. Takes feedbackId
    const handleFeedbackDelete = (feedbackId) => {
        console.log('Admin deleted feedback with ID', feedbackId);
        deleteFeedback(feedbackId);
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

    //function handleFeedbackFlag - takes in item id and item flagged boolean and passes them to putFeedback
    const handleFeedbackFlag = (feedbackId, feedbackBool) => {
        console.log('User is toggling flagged status', feedbackId, feedbackBool);
        putFeedback(feedbackId, feedbackBool);
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
                        <th>Date</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((item, i) => 
                        <tr key={i}> 
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td>{item.date}</td>
                            <td>
                                {item.flagged ? 
                                (<button onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Unflag</button>)
                                :
                                (<button onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Flag</button>)
                                }
                            </td>
                            <td><button onClick={() => handleFeedbackDelete(item.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        
        </>
    );
}

export default Admin;
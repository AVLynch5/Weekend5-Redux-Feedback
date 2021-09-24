//import react and useEffect
import React, { useEffect } from 'react';
//import useSelector 
import { useSelector } from 'react-redux';

function Admin({refreshFeedback, deleteFeedback, putFeedback}) {

    //declare store - access array storedFeedbackReducer which should be populated by GET
    const dataArray = useSelector(store => store.storedFeedbackReducer);

    //useEffect with GET function to GET feedback data from server on page load
    useEffect(() => {
        console.log('In useEffect');
        refreshFeedback();
    }, []);

    //handleFeedbackDelete - calls function deleteFeedback on button click. Takes feedbackId
    const handleFeedbackDelete = (feedbackId) => {
        console.log('Admin deleted feedback with ID', feedbackId);
        deleteFeedback(feedbackId);
    }

    //function handleFeedbackFlag - takes in item id and item flagged boolean and passes them to putFeedback
    const handleFeedbackFlag = (feedbackId, feedbackBool) => {
        console.log('User is toggling flagged status', feedbackId, feedbackBool);
        putFeedback(feedbackId, feedbackBool);
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
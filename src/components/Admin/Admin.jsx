//import react and useEffect
import React, { useEffect } from 'react';
//import useSelector 
import { useSelector } from 'react-redux';
//import adminitems
import AdminItems from '../AdminItems/AdminItems';
//import delete icon
import DeleteIcon from '@mui/icons-material/Delete';
//import flag icon
import FlagIcon from '@mui/icons-material/Flag';

function Admin({refreshFeedback, deleteFeedback, putFeedback}) {

    //declare store - access array storedFeedbackReducer which should be populated by GET
    const dataArray = useSelector(store => store.storedFeedbackReducer);

    //useEffect with GET function to GET feedback data from server on page load
    useEffect(() => {
        console.log('In useEffect');
        refreshFeedback();
    }, []);

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
                        <th>{<FlagIcon fontSize="small"/>}</th>
                        <th>{<DeleteIcon fontSize="small"/>}</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((item, i) => 
                      <AdminItems item={item} key={i} deleteFeedback={deleteFeedback} putFeedback={putFeedback}/>
                    )}
                </tbody>
            </table>

        
        </>
    );
}

export default Admin;
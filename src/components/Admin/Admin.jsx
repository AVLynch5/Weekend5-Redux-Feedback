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
//import MUI Table tags
import {Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead} from '@mui/material';

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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>{<FlagIcon fontSize="small"/>}</TableCell>
                            <TableCell>{<DeleteIcon fontSize="small"/>}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataArray.map((item, i) => 
                        <AdminItems item={item} key={i} deleteFeedback={deleteFeedback} putFeedback={putFeedback}/>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Admin;
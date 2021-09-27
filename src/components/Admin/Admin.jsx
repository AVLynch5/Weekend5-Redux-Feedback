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
//Import Grid
import { Grid } from '@mui/material';
//import MUI Table tags
import {Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead} from '@mui/material';

function Admin({refreshFeedback, deleteFeedback, putFeedback}) {
    //declare store - access array storedFeedbackReducer which should be populated by GET
    const dataArray = useSelector(store => store.storedFeedbackReducer);

    //declare styles to add style properties to TableContainer and Table. But how to control width??
    const styles = () => ({
        root: {
            width: '100%',
            overflowX: "auto",
        }, table: {
            minwidth: 600,
        }
    });

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
                    <TableContainer className={styles.root} component={Paper}>
                        <Table className={styles.table} border={3}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Feeling</TableCell>
                                    <TableCell align="center">Comprehension</TableCell>
                                    <TableCell align="center">Support</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">{<FlagIcon fontSize="small"/>}</TableCell>
                                    <TableCell align="center">{<DeleteIcon fontSize="small"/>}</TableCell>
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
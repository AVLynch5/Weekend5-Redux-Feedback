//import useState
//import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useSelector
import { useSelector } from "react-redux";
//import useHistory
import { useHistory } from "react-router";
//import Textfield and Box
import {TextField, Box} from '@mui/material';
//import Button
import Button from '@mui/material/Button';
//import Prev icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import Nect icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";

function Form4() {
    //declare state variable for form data - for clearing form after submission
    //const [form4Data, setForm4Data] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //declare history
    const history = useHistory();

    //import useSelector - use instead of state variable. Call form1 property for Form1!
    const feedbackobj = useSelector(store => store.tempFeedbackReducer);

    //declare function to handle submit
    const handleSubmit = (event) => {
        //prevent default form behavior 
        event.preventDefault();
        //comments are optional - no validation
        //declare const censorText = feedbackobj.Form4
        const censorText = feedbackobj.form4;
        //check censorText via conditionals - if no comment proceed normally, else censor
        if (!censorText) {
            //console.log('no comment');
            history.push("/Review");
        } else {
            //console.log('comment received');
            axios({
                method: 'GET',
                url: `/feedback/censor/${censorText}`,
            }).then((response) => {
                //dispatch censored text from GET to feedbackobj
                dispatch({type: 'SET_FORM_4', payload: response.data.result});
                history.push("/Review");
            }).catch((error) => {
                console.log('ERROR CENSORING TEXT');
            })
        }
    }

    //handleBack function to move backwards one page
    const handleBack = () => {
        //move backwards one page
        history.push("/Form3")
    }

    return(
        <>
        <h2 className="page-header">Any comments you want to leave?</h2>
        <form className="form" onSubmit={handleSubmit}>
            {/*<input placeholder="Comments?" type="text" value={feedbackobj.form4} onChange={(event) => dispatch({type: 'SET_FORM_4', payload: event.target.value})} />*/}
            <Box>
                <TextField style={{width: 300}} size="small" label="Optional: Leave a Comment" type="text" value={feedbackobj.form4} onChange={(event) => dispatch({type: 'SET_FORM_4', payload: event.target.value})}/>
            </Box>
            <Button size="small" variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} onClick={handleBack}>Back</Button>
            <Button size="small" variant="contained" endIcon={<ArrowForwardIcon fontSize="small"/>} type="submit">Next</Button>
        </form>
        </>
    );
}

export default Form4;
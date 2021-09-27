//import useState
//import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useSelector
import { useSelector } from "react-redux";
//import useHistory
import { useHistory } from "react-router";
//import slider from mui
import { Slider } from '@mui/material';
//import box from mui - to contain and size slider
import { Box } from '@mui/material';
//import sweetalerts to replace alerts
import swal from "sweetalert";
//import Button
import { Button } from '@mui/material';
//import Nect icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Form1() {
    //declare state variable for form data - for clearing form after submission
    //const [form1Data, setForm1Data] = useState('');

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
        //conditional to check user input - input validation - made redundant/unnecesary by slider bar
        if (feedbackobj.form1 > 0 && feedbackobj.form1 < 6) {
            //const action = {type: 'SET_FORM_1', payload: feedbackobj.form1}; - this is already done! If success, route to next page and retain value.
            //dispatch action
            //dispatch(action);
            history.push("/Form2");//to redirect user to next form
        } else {
            swal('Please select a valid number between 1 and 5', {button: 'Got it!'});
            return;
        }
        //setForm1Data(''); - no longer want to clear input after submit button. If we return to this page, user should see entered value and be able to change.
        
    }
    return(
        <>
        <h2 className="page-header">How are you feeling today?</h2>
        <p>1 = worst feeling, 5 = best feeling</p>
            <form className="form" onSubmit={handleSubmit}>
                {/*<input required placeholder="Feeling?" type="number" value={feedbackobj.form1} onChange={(event) => dispatch({type: 'SET_FORM_1', payload: event.target.value})} />*/}
                <Box sx={{mx: "auto", width: 300}}>    
                    <Slider
                        aria-label="Feeling?"
                        defaultValue={feedbackobj.form1}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                        onChange={(event) => dispatch({type: 'SET_FORM_1', payload: event.target.value})}
                    />
                </Box>
                <Button size="small" variant="contained" endIcon={<ArrowForwardIcon fontSize="small"/>} type="submit">Next</Button>
            </form>
        </>
    );
}

export default Form1;
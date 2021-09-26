//import useState
//import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useSelector
import { useSelector } from "react-redux";
//import useHistory
import { useHistory } from "react-router";
//import box and slider from mui
import { Box, Slider } from '@mui/material';
//import sweetalerts
import swal from "sweetalert";
//import Prev icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import Nect icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Form3() {
    //declare state variable for form data - for clearing form after submission
    //const [form3Data, setForm3Data] = useState('');

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
        //conditional to check user input - input validation
        if (feedbackobj.form3 > 0 && feedbackobj.form3 < 6) {
            //const action = {type: 'SET_FORM_3', payload: feedbackobj.form3}; - this is already done! If success, route to next page and retain value.
            //dispatch action
            //dispatch(action);
            history.push("/Form4");
        } else {
            swal('Please select a valid number between 1 and 5', {button: 'Got it!'});
            return;
        }
        //setForm3Data(''); - no longer want to clear input after submit button. If we return to this page, user should see entered value and be able to change.
        
    }

    //handleBack function to move backwards one page
    const handleBack = () => {
        //move backwards one page
        history.push("/Form2")
    }

    return(
        <>
        <h2 className="page-header">How well are you being supported?</h2>
        <form className="form" onSubmit={handleSubmit}>
            {/*<input required placeholder="Support?" type="number" value={feedbackobj.form3} onChange={(event) => dispatch({type: 'SET_FORM_3', payload: event.target.value})} />*/}
            <Box sx={{mx: "auto", width: 300}}>    
                <Slider
                    aria-label="Supported?"
                    defaultValue={feedbackobj.form3}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={5}
                    onChange={(event) => dispatch({type: 'SET_FORM_3', payload: event.target.value})}
                />
            </Box>
            <Button size="small" variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} onClick={handleBack}>Back</Button>
            <Button size="small" variant="contained" endIcon={<ArrowForwardIcon fontSize="small"/>} type="submit">Next</Button>
        </form>
        </>
    );
}

export default Form3;
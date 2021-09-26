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

function Form2() {
    //declare state variable for form data - for clearing form after submission
    //const [form2Data, setForm2Data] = useState('');

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
        if (feedbackobj.form2 > 0 && feedbackobj.form2 < 6) {
            //const action = {type: 'SET_FORM_2', payload: feedbackobj.form2}; - this is already done! If success, route to next page and retain value.
            //dispatch action
            //dispatch(action);
            history.push("/Form3");
        } else {
            swal('Please select a valid number between 1 and 5', {button: 'Got it!'});
            return;
        }
        //setForm2Data(''); - no longer want to clear input after submit button. If we return to this page, user should see entered value and be able to change.
        
    }

    //handleBack function to move backwards one page
    const handleBack = () => {
        //move backwards one page
        history.push("/Form1")
    }

    return(
        <>
        <h2 className="page-header">How well are you understanding the content?</h2>
        <form className="form" onSubmit={handleSubmit}>
            {/*<input required placeholder="Understanding?" type="number" value={feedbackobj.form2} onChange={(event) => dispatch({type: 'SET_FORM_2', payload: event.target.value})} />*/}
            <Box sx={{mx: "auto", width: 300}}>    
                    <Slider
                        aria-label="Understanding?"
                        defaultValue={feedbackobj.form2}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={5}
                        onChange={(event) => dispatch({type: 'SET_FORM_2', payload: event.target.value})}
                    />
            </Box>
            <Button size="small" variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} onClick={handleBack}>Back</Button>
            <Button size="small" variant="contained" endIcon={<ArrowForwardIcon fontSize="small"/>} type="submit">Next</Button>
        </form>
        </>
    );
}

export default Form2;
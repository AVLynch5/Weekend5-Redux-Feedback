//import useSelector to access stored data
import axios from "axios";
import { useSelector } from "react-redux";
//import useHistory for routing
import { useHistory } from "react-router";
//import sweetalerts to handle confirm submit 
import swal from "sweetalert";
//import Button
import Button from '@mui/material/Button';
//import Prev icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//import useDispatch
import { useDispatch } from "react-redux";

function Review() {
    //declare dispatch
    const dispatch = useDispatch();

    //declare store to access temp info
    const tempObj = useSelector(store => store.tempFeedbackReducer);

    //declare history
    const history = useHistory();

    //handleSubmit function - When moved to app.jsx, I couldn't get this to work. Despite importing useHistory and declaring history, history undefined...
    const handleSubmit = (event) => {
        //prevent default form behavior
        event.preventDefault();
        //axios POST data: tempObj -> on success, .then history.push to success confirmation page
        //sweetalert here
        swal({
            title: 'Really submit Feedback?',
            text: 'Once submitted, feedback cannot be changed!',
            icon: 'warning',
            buttons: ["No Chance", "Submit!"], //adds cancel button
            dangerMode: true,
        }).then((confirmPOST) => {
            if (confirmPOST) {
                swal('Your feedback was submitted', {button: 'Phenomenal!', icon: 'success',});
                postFeedback();
            } else {
                swal('Your feedback was not submitted', {button: 'Thank goodness...'});
                return;//cancel function, postFeedback not called
            }
        })
    }

    //function postFeedback - called in swal
    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: tempObj,
        }).then((response) => {
            console.log('Successfully added new feedback');
            //declare action to wipe tempFeedbackReducer
            const action = {type: 'CLEAR_TEMPFB'};
            dispatch(action);
            history.push("/Success");
        }).catch((error) => {
            console.log('Error adding new feedback', error);
        })
    }

    //handleBack function to move backwards one page
    const handleBack = () => {
        //move backwards one page
        history.push("/Form4")
    }

    return(
        <>
            <h2 className="page-header">Review Your Feedback</h2>
            <p>Feeling: <span>{tempObj.form1}</span></p>
            <p>Understanding: <span>{tempObj.form2}</span></p>
            <p>Support: <span>{tempObj.form3}</span></p>
            <p>Comments: <span>{tempObj.form4}</span></p>
            <form className="form" onSubmit={handleSubmit}>
                <Button size="small" variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} onClick={handleBack}>Back</Button>
                <Button size="small" variant="contained" endIcon={<ArrowUpwardIcon fontSize="small"/>} type="submit">Submit</Button>
            </form>
        </>
    );
}

export default Review;
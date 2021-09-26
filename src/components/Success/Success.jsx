//import useDispatch;
import { useDispatch } from "react-redux";
//import useHistory;
import { useHistory } from "react-router";
//import Button
import Button from '@mui/material/Button';
//import restart icon
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function Success() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //function handleSubmissionSuccess - declare action to wipe tempFeedbackReducer and route to Form1
    const handleSubmissionSuccess = () => {
        const action = {type: 'CLEAR_TEMPFB'};
        dispatch(action);
        history.push("/Form1");
    }
    return(
        <>
            <div>
                <h1>Feedback submitted successfully!</h1>
            </div>
            <div>
                <p>Thank you for your feedback!</p>
                <Button size="small" variant="contained" endIcon={<RestartAltIcon fontSize="small"/>} type="submit" onClick={handleSubmissionSuccess}>Leave New Feedback</Button>
            </div>
        </>
    );
}

export default Success;
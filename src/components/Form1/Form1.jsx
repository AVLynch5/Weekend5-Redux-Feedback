//import useState
//import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useSelector
import { useSelector } from "react-redux";
//import useHistory
import { useHistory } from "react-router";

function Form1() {
    //declare state variable for form data - for clearing form after submission
    //const [form1Data, setForm1Data] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //import useSelector - use instead of state variable. Call form1 property for Form1!
    const feedbackobj = useSelector(store => store.tempFeedbackReducer);

    //declare function to handle submit
    const handleSubmit = (event) => {
        //prevent default form behavior 
        event.preventDefault();
        //conditional to check user input - input validation
        if (feedbackobj.form1 > 0 && feedbackobj.form1 < 6) {
            const action = {type: 'SET_FORM_1', payload: feedbackobj.form1};
            //dispatch action
            dispatch(action);
        } else {
            alert('Please enter a valid number between 1 and 5');
            return;
        }
        //setForm1Data(''); - no longer want to clear input after submit button. If we return to this page, user should see entered value and be able to change.
        //history.push(route); to redirect user to next form
    }
    return(
        <>
        <h2 className="page-header"></h2>
        <form className="form" onSubmit={handleSubmit}>
            <input required placeholder="Feeling?" value={feedbackobj.form1} onChange={(event) => dispatch({type: 'SET_FORM_1', payload: event.target.value})} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default Form1;
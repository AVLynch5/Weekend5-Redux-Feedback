//import useState
//import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useSelector
import { useSelector } from "react-redux";
//import useHistory
import { useHistory } from "react-router";

function Form4() {
    //declare state variable for form data - for clearing form after submission
    //const [form4Data, setForm4Data] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //import useSelector - use instead of state variable. Call form1 property for Form1!
    const feedbackobj = useSelector(store => store.tempFeedbackReducer);

    //declare function to handle submit
    const handleSubmit = (event) => {
        //prevent default form behavior 
        event.preventDefault();
        //conditional to check user input - input validation
        if (feedbackobj.form4 > 0 && feedbackobj.form4 < 6) {
            //const action = {type: 'SET_FORM_4', payload: feedbackobj.form4}; - this is already done! If success, route to next page and retain value.
            //dispatch action
            //dispatch(action);
            //history.push(route); to redirect user to next form
        } else {
            alert('Please enter a valid number between 1 and 5');
            return;
        }
        //setForm4Data(''); - no longer want to clear input after submit button. If we return to this page, user should see entered value and be able to change.
        
    }
    return(
        <>
        <h2 className="page-header">Any comments you want to leave?</h2>
        <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Comments?" value={feedbackobj.form4} onChange={(event) => dispatch({type: 'SET_FORM_4', payload: event.target.value})} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default Form4;
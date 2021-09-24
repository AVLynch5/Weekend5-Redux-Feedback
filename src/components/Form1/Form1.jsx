//import useState
import { useState } from "react";
//import useDispatch
import { useDispatch } from "react-redux";
//import useHistory
import { useHistory } from "react-router";

function Form1() {
    //declare state variable for form data
    const [form1Data, setForm1Data] = useState('');

    //declare function to handle submit
    const handleSubmit = (event) => {
        //prevent default form behavior 
        event.preventDefault();
        //conditional to check user input
        if (form1Data > 0 && form1Data < 6) {
            const action = {type: 'SET_FORM_1', payload: form1Data};
        } else {
            alert('Please enter a valid number between 1 and 5');
            return;
        }
        setForm1Data('');
        //history.push(route); to redirect user to next form
    }
    return(
        <>
        </>
    );
}

export default Form1;
//import useSelector to access stored data
import { useSelector } from "react-redux";
//import useHistory for routing
import { useHistory } from "react-router";

function Review() {
    //declare store to access temp info
    const tempObj = useSelector(store => store.tempFeedbackReducer);

    const handleSubmit = (event) => {
        //prevent default form behavior
        event.preventDefault();
        //axios POST data: tempObj and dispatch to storedFeedbackReducer?
            //on success, .then history.push to success confirmation page
    }

    return(
        <>
            <h2 className="page-header">Review Your Feedback</h2>
            <br/>
            <p>Feeling: <span>{tempObj.form1}</span></p>
            <p>Understanding: <span>{tempObj.form2}</span></p>
            <p>Support: <span>{tempObj.form3}</span></p>
            <p>Comments: <span>{tempObj.form4}</span></p>
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Review;
//import useSelector to access stored data
import axios from "axios";
import { useSelector } from "react-redux";
//import useHistory for routing
import { useHistory } from "react-router";

function Review() {
    //declare store to access temp info
    const tempObj = useSelector(store => store.tempFeedbackReducer);

    //declare history
    const history = useHistory();

    //handleSubmit function - When moved to app.jsx, I couldn't get this to work. Despite importing useHistory and declaring history, history undefined...
    const handleSubmit = (event) => {
        //prevent default form behavior
        event.preventDefault();
        //axios POST data: tempObj -> on success, .then history.push to success confirmation page
        axios({
            method: 'POST',
            url: '/feedback',
            data: tempObj,
        }).then((response) => {
            console.log('Successfully added new feedback');
            //call GET function to refresh admin page
            history.push("/Success");
        }).catch((error) => {
            console.log('Error adding new feedback', error);
        })
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
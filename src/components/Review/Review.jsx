//import useSelector to access stored data
import { useSelector } from "react-redux";

function Review() {
    //declare store to access temp info
    tempObj = useSelector(store => store.tempFeedbackReducer);

    return(
        <>
            <h2 className="page-header">Review Your Feedback</h2>
            <br/><br/>
            <p>Feeling: <span>{tempObj.Form1}</span></p>
            <br/>
            <p>Understanding: <span>{tempObj.Form2}</span></p>
            <br/>
            <p>Support: <span>{tempObj.Form3}</span></p>
            <br/>
            <p>Comments: <span>{tempObj.Form4}</span></p>
        </>
    );
}

export default Review;
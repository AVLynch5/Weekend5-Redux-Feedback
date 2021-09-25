//import moment to format date
import moment from "moment";

function AdminItems({item, deleteFeedback, putFeedback}) {
    
    //handleFeedbackDelete - calls function deleteFeedback on button click. Takes feedbackId
    const handleFeedbackDelete = (feedbackId) => {
        console.log('Admin deleted feedback with ID', feedbackId);
        deleteFeedback(feedbackId);
    }

    //function handleFeedbackFlag - takes in item id and item flagged boolean and passes them to putFeedback
    const handleFeedbackFlag = (feedbackId, feedbackBool) => {
        console.log('User is toggling flagged status', feedbackId, feedbackBool);
        putFeedback(feedbackId, feedbackBool);
    }

    return(
        <>
            <tr> 
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td>{moment(item.date).format('lll')}</td>
                <td>
                    {item.flagged ? 
                    (<button onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Unflag</button>)
                    :
                    (<button onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Flag</button>)
                    }
                </td>
                <td><button onClick={() => handleFeedbackDelete(item.id)}>Delete</button></td>
            </tr>
        </>
    );
}

export default AdminItems;
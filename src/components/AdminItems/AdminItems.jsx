//import moment to format date
import moment from "moment";
//import sweetalerts for delete validation
import swal from "sweetalert";

function AdminItems({item, deleteFeedback, putFeedback}) {
    
    //handleFeedbackDelete - delete validation. Calls function deleteFeedback on button click with confirmation. Takes feedbackId
    const handleFeedbackDelete = (feedbackId) => {
        //sweetalert
        swal({
            title: 'Really delete Feedback?',
            text: 'Once deleted, feedback cannot be recovered!',
            icon: 'warning',
            buttons: ['Heck no', 'Delete!'],
            dangerMode: true,
        }).then((confirmDelete) => {
            if (confirmDelete) {
                swal('The feedback was deleted', {button: 'Great!', icon: 'success',});
                deleteFeedback(feedbackId);
            } else {
                swal('The feedback was not deleted', {button: 'Excellent!'});
                return;//cancels function, deleteFeedback not called
            }
        })
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
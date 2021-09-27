//import moment to format date
import moment from "moment";
//import sweetalerts for delete validation
import swal from "sweetalert";
//import Button
import { Button } from "@mui/material";
//import MUI table components - table row and table cell
import { TableRow, TableCell } from '@mui/material';

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
            <TableRow> 
                <TableCell align="center">{item.feeling}</TableCell>
                <TableCell align="center">{item.understanding}</TableCell>
                <TableCell align="center">{item.support}</TableCell>
                <TableCell align="center"><div className="comments-DIV">{item.comments}</div></TableCell>
                <TableCell align="center">{moment(item.date).format('lll')}</TableCell>
                <TableCell align="center">
                    {item.flagged ? 
                    (<Button size="small" variant="outlined" onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Unflag</Button>)
                    :
                    (<Button size="small" variant="contained" onClick={() => handleFeedbackFlag(item.id, item.flagged)}>Flag</Button>)
                    }
                </TableCell>
                <TableCell align="center"><Button size="small" variant="outlined" onClick={() => handleFeedbackDelete(item.id)}>Delete</Button></TableCell>
            </TableRow>
        </>
    );
}

export default AdminItems;
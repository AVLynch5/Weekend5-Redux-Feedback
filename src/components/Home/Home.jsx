//import useHistory
import { useHistory } from "react-router";
//import Button 
import { Button } from "@mui/material";
//import start icon 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Home() {
    //import history
    const history = useHistory();

    //function to call history.push (aka handle route) on click
    const handleStart = () => {
        history.push("/Form1")
    }

    return(
        <>
            <h1>Click here to give Feedback!</h1>
            <Button size="small" variant="contained" endIcon={<PlayCircleOutlineIcon fontSize="small"/>} type="submit" onClick={handleStart}>Start</Button>
        </>
    );
}

export default Home;
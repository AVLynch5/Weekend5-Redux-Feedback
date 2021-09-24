//import useHistory
import { useHistory } from "react-router";

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
            <button onClick={handleStart}>Start</button>
        </>
    );
}

export default Home;
//import useHistory
import { useHistory } from "react-router";

function Home() {
    //import history
    const history = useHistory();

    return(
        <>
            <h1>Click here to give Feedback!</h1>
            <button onClick={history.push("/Form1")}>Start</button>
        </>
    );
}

export default Home;
import { useState, useEffect } from 'react'
import './AppStyle.css'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";


export default function PollsPage(){
    const [polls, setPolls] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const userName = location.state?.userName || "Guest";

    useEffect(() => {
        axios
          .get('https://pkotowski.pythonanywhere.com/polls')
          .then((response) => {
            setPolls(response.data.polls);
            console.log("Polls fetched:", response.data.polls);
          })
          .catch((error) => {
            console.error("Error fetching polls:", error);
          });
      }, []);

    function Logout(){
        navigate("/login")
    }

    return(
    <>
        <div id="pollsPage" className="polls-container">
            <h2><b>POLLS</b></h2> <br></br>
            Hello user {userName}
            {polls.map((poll) => (<button key={poll.id} className="poll-button">{poll.title}</button>))}
            <button onClick={Logout}>Log Out</button>
            
        </div>
    </>
    )
}
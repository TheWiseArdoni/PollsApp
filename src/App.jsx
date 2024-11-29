import { useState } from 'react'
import './AppStyle.css'
import LoginPage from './LoginPage'
import axios from 'axios';
import PollsPage from './PollsPage';



function App() {
  
  const [user, setUser] = useState(null)

  function LoginUser(u){
    setUser(u)
  }
  function Logout(){
    setUser(null)
  }

  function HandleClick(){
    setUser("Total Random")
    axios.postForm('https://pkotowski.pythonanywhere.com/login', {email:"ja@ja",password:"1234"}).then(
      (response) => {
        console.log(response)
      }
    )

  }

  return (
    <>
    hi
    <br></br>
    go to a useful endpoint damnit
    </>
  )
}

export default App

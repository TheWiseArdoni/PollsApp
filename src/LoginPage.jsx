import { useState } from 'react'
import './AppStyle.css'
import axios from 'axios';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function LoginPage({approveLogin}) {
    const [formData, setFormData] = useState({email:"",password:""})
    const navigate = useNavigate();

    function onChange(e){
        var v = e.target.value
        var n = e.target.name
        setFormData({...formData, [n]:v})
    }
    
    function login(){
        
        setFormData({email:document.getElementById("email")},{password:document.getElementById("password")})
        
        axios.postForm('https://pkotowski.pythonanywhere.com/login',formData).then(
            (response) => {
                console.log(response)
                if (response.data.message == "OK"){
                  navigate("/polls", {state: {userName: response.data.user.name}});
                }
            }
            )
        }

   

    return (
    <>
      <div id="loginPage" className="login-container">  
        <h2><b>LOGIN</b></h2> <br></br>
        <label><b>Email</b></label><br></br>
        <input id="email" type="text" name="email" onChange={onChange}></input><br></br><br></br>
        <label><b>Password</b></label>
        <input id="password" type="password" name="password" onChange={onChange}></input><br></br><br></br>
        <button id="log" onClick={login}>Log In</button>
        
      </div>
    
    </>
  )
}

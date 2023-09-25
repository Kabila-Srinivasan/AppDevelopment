import React, { useState } from 'react'
import ".//Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from './userSlice';


function Login() {
  const nav=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const dispatch =useDispatch();

  const authenticate=(e)=>{
    e.preventDefault();
    const usernameRegex=/^[a-zA-Z0-9_]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

    
    if(username.length===0||password.length===0){
      alert("Enter All fields")
    }
    else if(password.length===0)
    {
      alert("Password is Required");
    }
    else if(password.length<8)
    {
      alert('Password should be atleast 8 characters');
    }
    else if(!usernameRegex.test(username)){
      alert("Invalid username format")
    }
    else if(!passwordRegex.test(password))
    {
      alert("Invalid Password format")
    }
  else if (username && password) {
    dispatch(login(username));
    nav("/d");
  }

 }
 
return(
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        <h2>Login Credentials</h2>
      </div>
      <form>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required pattern="pattern=^[a-zA-Z0-9_]+$" placeholder="Username" />
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <Link to="/register" style={{ textDecoration:'none' }}> <p>No Account? Register Now!</p></Link>   
    </div>
  </div>
  </div>
  )
}
export default Login;

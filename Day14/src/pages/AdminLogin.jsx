import React, { useState } from 'react'
import "../assets/AdminLogin.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const nav = useNavigate();
  const [adminName, setUsername] = useState('');
  const [adminPassword, setpassword] = useState('');
  const authenticate = (e) => {
    e.preventDefault();
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
    const register={adminName,adminPassword}
    axios.post("http://localhost:8080/adminlogin/postAdminLogin",register)
    if(adminName.length===0 || adminPassword.length===0){
      alert("Enter All fields")
    }
    else if(adminPassword.length===0) {
      alert("Password is Required");
    }
    else if(adminPassword.length<8) {
      alert('Password should be atleast 8 characters');
    }
    else if(!usernameRegex.test(adminName)) {
      alert("Invalid username format")
    }
    else if(!passwordRegex.test(adminPassword)) {
      alert("Invalid Password format")
    }
    else if (adminName && adminPassword) {
      nav("/d");
    }
   
  }


  return (
    <div id="body">
      <div className='pic'>
        <img src='https://pbs.twimg.com/media/Ec6TwwuX0AAKM1x.png:large' height="700px" width="1525px"></img>
      </div>
      <div className="signup-form">
        <div className="container">
          <div className='form'>
            <div className="header">
              <h2>Login Credentials</h2>
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
              </div>
              <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
            </form>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default AdminLogin;

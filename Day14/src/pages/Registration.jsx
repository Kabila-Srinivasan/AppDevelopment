import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../assets/Registration.css"
import axios from 'axios';
function Registration() {
  const nav=useNavigate();
  const [userName, setName] = useState('');
  const [ userEmail, setEmail] = useState('');
  const [userUserName, setUsername] = useState('');
  const [userMobile, setMobile] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userConfirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const senddb = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.]+[a-z]/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
    const phoneNumberRegex = /^[6-9]\d{9}$/;
    

    if (
      !userName ||
      !userEmail ||
      !userUserName ||
      !userMobile ||
      !userPassword ||
      !userConfirmPassword
    )
     {
      alert('Enter all fields');
    }
     else if (userPassword !== userConfirmPassword) 
     {
      setConfirmPasswordError('Passwords do not match');
    } 
    else if (!emailRegex.test(userEmail)) 
    {
      alert('Invalid email format');
    }
     else if (!usernameRegex.test(userUserName)) 
     {
      alert('Invalid username format');
    } else if (!passwordRegex.test(userPassword)) {
      alert(
        'Invalid password format. Password must meet the criteria:\n' +
          '- At least 8 characters\n' +
          '- At least one uppercase letter\n' +
          '- At least one lowercase letter\n' +
          '- At least one digit\n' +
          '- At least one special character'
      );
    } 
    else if(!phoneNumberRegex.test(userMobile))
    {
      alert('Invalid Mobile Number');
    }
    else{
      e.preventDefault()
      const Register={userName,userEmail,userUserName,userMobile,userPassword,userConfirmPassword}
      console.log(Register)
      fetch("http://localhost:8080/register/postUserRegister",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Register)   
  }
      ).then(()=>{
          console.log("New Order Added")
          nav("/get")
      })
  }
    
  
}
  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
          </div>
          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                value={userName}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                value={userUserName}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="number"
                maxLength={10}
                value={userMobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Mobile"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                value={userConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
              />
              {confirmPasswordError && (
                <p className="error">{confirmPasswordError}</p>
              )}
            </div>
            <Link to="/get"> <input className="signup-btn" onClick={senddb} type="submit" value="SAVE" /> </Link>
          </form>
          <Link to="/" style={{ textDecoration: 'none' }}>
  <p style={{ color: '#000000', fontWeight: 'bold' }}>Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Registration;

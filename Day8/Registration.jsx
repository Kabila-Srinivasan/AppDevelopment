import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ".//Registration.css"

function Registration() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const senddb = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.]+[a-z]/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
    const phoneNumberRegex = /^[6-9]\d{9}$/;



    if (
      !name ||
      !email ||
      !username ||
      !mobile ||
      !password ||
      !confirmPassword
    )
     {
      alert('Enter all fields');
    }
     else if (password !== confirmPassword) 
     {
      setConfirmPasswordError('Passwords do not match');
    } 
    else if (!emailRegex.test(email)) 
    {
      alert('Invalid email format');
    }
     else if (!usernameRegex.test(username)) 
     {
      alert('Invalid username format');
    } else if (!passwordRegex.test(password)) {
      alert(
        'Invalid password format. Password must meet the criteria:\n' +
          '- At least 8 characters\n' +
          '- At least one uppercase letter\n' +
          '- At least one lowercase letter\n' +
          '- At least one digit\n' +
          '- At least one special character'
      );
    } 
    else if(!phoneNumberRegex.test(mobile))
    {
      alert('Invalid Mobile Number');
    }
    else {
      setPasswordError('');
      setConfirmPasswordError('');
      nav('/log');
    }
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                value={username}
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                placeholder="Mobile"
              />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                value={password}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
              />
              {confirmPasswordError && (
                <p className="error">{confirmPasswordError}</p>
              )}
            </div>
            <input
              className="signup-btn"
              onClick={senddb}
              type="submit"
              value="REGISTER"
            />
          </form>
          <Link to="/" style={{ textDecoration: 'none' }}>
  <p style={{ color: '#000000', fontWeight: 'bold' }}>Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;

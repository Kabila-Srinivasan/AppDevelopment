import React, { useState } from 'react'
import "../assets/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from './userSlice';
import axios from "axios";

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();

  const authenticate = (e) => {
    e.preventDefault();
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;
    
    if(username.length===0 || password.length===0){
      alert("Enter All fields")
    }
    else if(password.length===0) {
      alert("Password is Required");
    }
    else if(password.length<8) {
      alert('Password should be atleast 8 characters');
    }
    else if(!usernameRegex.test(username)) {
      alert("Invalid username format")
    }
    else if(!passwordRegex.test(password)) {
      alert("Invalid Password format")
    }
    else if (username && password) {
      dispatch(login(username));
      nav("/d");
      
      const Login = { username, password };
      axios.post("http://localhost:8080/login/postUserLogin", Login)
        .then(() => {
          console.log("New Login Added");
        })
        .catch((error) => {
          console.error("Error adding login:", error);
        });
    }
  }

  const getUserData = () => {
    axios.get("http://localhost:8080/login/getUserLogin")
      .then((response) => {
        console.log("User Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  const updateUser = () => {
    const updatedUserData = { username: 'newUsername', password: 'newPassword' }; 

    axios.put("http://localhost:8080/login/putUserLogin", updatedUserData)
      .then(() => {
        console.log("User Updated");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  }

  const deleteUser = () => {
    axios.delete("http://localhost:8080/login/delUserLogin")
      .then(() => {
        console.log("User Deleted");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

  return (
    <div id="body">
      <div className='pic'>
        <img src='https://png.pngtree.com/background/20230408/original/pngtree-kitchen-white-refrigerator-cartoon-background-picture-image_2338856.jpg' height="700px" width="1525px"></img>
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
            <Link to="/register" style={{ textDecoration:'none' }}> <p style={{ color: '#000000', fontWeight: 'bold' }}>No Account? Register!</p></Link>  
          </div>
        </div> 
      </div>
      <button onClick={getUserData}>Get User Data</button>
      <button onClick={updateUser}>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}

export default Login;

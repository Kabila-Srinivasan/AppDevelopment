import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
export default function Signup() {
    const[username,setUserName]=useState('');
    
    const[emailid,setEmail]=useState('');
    const[mobileno,setMobileNum]=useState('');
    const[password,setPassword]=useState('');
    
    const[error,seterror]=useState(false);
    const navigate=useNavigate();

    const formHandler=async (e)=>{
        e.preventDefault();
        if(username.length===0 ||  mobileno.length<10 || mobileno.length>10 || emailid.length===0 ||  password.length===0)
        {
          seterror(true);
          
        }
        else if (username  && emailid && mobileno
          && password) {
               await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno,password});
               navigate("/");
             }
      }
      return (
        <div>
        <div className='full2'>
       
    <div className='rectangle2'></div>
    
    <h4><form className="form_signup" onSubmit={formHandler}>
    <br/>
    <h2>CREATE ACCOUNT</h2><br/>
    USERNAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={username} placeholder="user name" onChange={e=>setUserName(e.target.value)}/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
      </div><br/>
      E-MAIL ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" value={emailid} placeholder="email id" onChange={e=>setEmail(e.target.value)}/><br/>
      <div>
      {error && emailid.length===0?
        <label style={{color:'red'}}>E-mail ID is required</label>:""} 
        </div><br/>
      
      MOBILE NUMBER:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><input type="text" value={mobileno} placeholder="mobile number" onChange={e=>setMobileNum(e.target.value)}/><br/>
    <div>
    {error && mobileno.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
      </div>
      <div>
      {error && mobileno.length>10?
        <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
        </div><br/>
          
          PASSWORD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
      </div><br/>
      
        <div>
        <br/><br/>
        <button type='submit' class="but3" >SUBMIT</button><br/>
        </div>
        <br/><br/><br/><br/>
        </form>
        </h4>
        
        </div>
        </div>
        )
      }
      /*const handleSubmitButtonClick = () => {
        navigate('/');
        onClick={handleSubmitButtonClick}
      };*/

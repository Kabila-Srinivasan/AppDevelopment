import React, { useEffect, useState } from 'react'
import UserRegistrationService from '../Service/UserRegistrationService';



import '../assets/GetData.css'
import { Link } from 'react-router-dom';
const GetData=()=> {
  const [register, setregister] = useState([])
  useEffect(() => {
    getAllRegister();
  }, [])
  const getAllRegister = () => {
      UserRegistrationService.getAllRegister().then((response) => {
          setregister(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const deleteRegister = (RegisterId) => {
    UserRegistrationService.deleteRegister(RegisterId).then((response) =>{
      getAllRegister();
     }).catch(error =>{
         console.log(error);
     })
  }
  return (
    <div className='ob'>
    <p id='order'><h1>Registration</h1></p>
    
    <table id='gettable'>            
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Mobile</th>
                  <th>Password</th>
                  <th>Confirm Password</th>
                  <th>Actions</th>
                </tr>         
              {
                register.map(
                    registers => (
      <tr>
             <th> {registers.name}</th>
             <th> {registers.email}</th>
             <th> {registers.username}</th>
             <th> {registers.mobile}</th>
             <th> {registers.password}</th>
             <th> {registers.confirmPassword}</th>
            
            
             <th><Link to={`/update/${registers.id}`}><button id="actions">Update</button></Link>
             <button id="actions"  onClick = {() =>  deleteRegister(registers.id)}> Delete!</button>
             <Link to="/home"><button id='actions'>New</button></Link></th>         
      </tr>
    ))}    
            </table>
            </div>
  )
}
export default GetData;


import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Dashboard() {
  const user = useSelector(selectUser);
  console.log("User object:", user);
  const username=
    user.user && user.user.username ? user.user.username : "Guest";

  return (
    <div className="dashboard">
      <h2>Welcome to the Appliance Service Center Dashboard</h2>
     <h1>Welcome {username}</h1> 
      <div className="stats">
        <div className="stat">
          <h3>Total Orders</h3>
          <p>25</p>
        </div>
        <div className="stat">
          <h3>Active Orders</h3>
          <p>25</p>
        </div>
        <div className="stat">
          <h3>Completed Orders</h3>
          <p>5</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button">View All Orders</button>
        <button className="action-button">Add New Technician</button>
      </div>
    </div>
  );
}

export default Dashboard;

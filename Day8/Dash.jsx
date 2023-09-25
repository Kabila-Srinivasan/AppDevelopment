
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
          <h3>Provided Services</h3>
          <p>25</p>
        </div>
        <div className="stat">
          <h3>Services</h3>
          <ul>
        <li>Refrigerator Repair</li>
        <li>Washing Machine Repair</li>
        <li>Dishwasher Repair</li>
        <li>Oven and Stove Repair</li>
        <li>Microwave Repair</li>
        <li>And much more...</li>
      </ul>
        </div>
        <div className="stat">
          <h3>Serivers Providers Avaliable </h3>
          <p>10</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="action-button">Order Service</button>
        <button className="action-button">Cancel</button>
      </div>
    </div>
  );
}

export default Dashboard;

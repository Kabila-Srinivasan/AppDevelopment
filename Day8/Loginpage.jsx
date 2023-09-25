import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "./actions";
import "./Loginpage.css";
import { navigateavigate, useNavigate } from "react-router-dom";

function LoginForm({ login, loggedIn, error }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.username || !formData.password) {
      alert("Both username and password are required.");
      return;
    }

   
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(formData.username)) {
      alert("Username should contain only letters and numbers.");
      return;
    }

    
    login(formData);
  };
  const handlelogin=()=>{
    navigate('/dash');
  }

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      {loggedIn ? (
        <p className="success">Logged in successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button type="submit" onClick={handlelogin}>Login</button>
        </form>
     
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  error: state.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

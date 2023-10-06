import React, { useEffect, useState } from 'react';
import UserRegistrationService from '../Service/UserRegistrationService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../assets/EditData.css';

const EditData = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    username: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const saveOrUpdateUser = (e) => {
    e.preventDefault();
    const { name, email, username, mobile, password, confirmPassword } = registerData;

    if (
      name.length === 0 ||
      email.length === 0 ||
      username.length === 0 ||
      mobile.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      alert('Enter All fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else 
    {
      e.preventDefault()
      const registers = {
        id,
        name,
        email,
        username,
        mobile,
        password,
      };

      if (id) {
        UserRegistrationService.updateRegister(id, registers)
          .then((response) => {
            nav('/get');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  useEffect(() => {
    UserRegistrationService.getRegisterById(id)
      .then((response) => {
        setRegisterData({
          name: response.data.name,
          email: response.data.email,
          username: response.data.username,
          mobile: response.data.mobile,
          password: response.data.password,
          confirmPassword: response.data.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <p id="update">
              <h1>Update Details</h1>
            </p>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                value={registerData.username}
                onChange={(e) =>
                  setRegisterData({ ...registerData, username: e.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="number"
                placeholder="Mobile"
                value={registerData.mobile}
                onChange={(e) =>
                  setRegisterData({ ...registerData, mobile: e.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="bu">
              <input
                onClick={saveOrUpdateUser}
                className="e-signup-btn"
                type="submit"
                value="Submit"
              />
              <Link to="/get">
                <button className="e-cancel-btn">Cancel </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditData;

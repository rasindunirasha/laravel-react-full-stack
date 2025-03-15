import React from "react";
import { Link } from "react-router-dom"; 

const Signup = () => {


    const onSubmit = (ev) => {
      ev.preventDefault();
    };


  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}> 
          <h1 className="title">Signup for free</h1>
          <input type="email" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Password Confirmation" required />
          <button className="btn btn-block">Signup</button> 
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

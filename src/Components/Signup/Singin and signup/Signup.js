import React from "react";
import "./Signin.css";

function Signup() {
  return (
    <div className="main">
      <div className="screen">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt=""
          className="logo"
        />
        <div className="signIn-form">
          <form action="">
            <h1>Create an account</h1>
            <label htmlFor="email">Name</label>
            <input className="textBox" name="name" type="text" />
            <label htmlFor="email">Email</label>
            <input className="textBox" name="email" type="email" />
            <label htmlFor="password">Password</label>
            <input className="textBox" type="password" />
            <i className='fas fa-info-circle'/>
            <p className='info'>Passwords must be at least 6 characters.</p>
            <label htmlFor="password">Re-enter Password</label>
            <input className="textBox" type="password" />
            <button className="btn">Create your amazon  account </button>
            <p className="privacy">
              By continuing, you agree to Amazon's{" "}
              <a href="/">Conditions of Use</a> and{" "}
              <a href="/">Privacy Notice.</a>
            </p>
           <p className='privacy' >
             Already have an account ?    <a href="/"> Sign-In </a>
           </p>
           
          </form>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>
            <a href="/">Conditions of Use </a>
          </li>
          <li>
              <a href="/"> Privacy Notice </a>
          </li>
          <li>
              <a href="/">Help</a>
          </li>
        </ul>
        <p  > &copy; 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

export default Signup;

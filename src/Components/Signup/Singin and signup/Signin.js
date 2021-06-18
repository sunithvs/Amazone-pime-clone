import React from "react";
import "./Signin.css";
function Signin() {
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
            <h1>Sign-In</h1>
            <label htmlFor="email">Email or mobile phone number</label>
            <input className="textBox" name="email" type="email" />
            <label htmlFor="password">Password</label>
            <p className="forgot-pass">Forgot your password?</p>
            <input className="textBox" type="password" />
            <button className="btn">Sign-In</button>
            <p className="privacy">
              By continuing, you agree to Amazon's{" "}
              <a href="/">Conditions of Use</a> and{" "}
              <a href="/">Privacy Notice.</a>
            </p>
            <input className="check" type="checkbox" />
            <p className="privacy">
              Keep me signed in <a href="/">Details</a>
            </p>
            <h2>
              <span>New to Amazon ?</span>
            </h2>
            <button className="btn new-account">
              Create your Amazon account
            </button>
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

export default Signin;

import React from 'react'
import "./Signin.css";
import { useHistory,Link } from 'react-router-dom'
function EmailVerification() {
    const history= useHistory()
    return (
        <div className="main">
      <div className="screen">
        <img
          onClick={()=>(history.push('/'))}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt=""
          className="logo1"
        />
        <div className="signIn-form">
          <form action="">
            <h1>Verify email address </h1>
            <p className="privacy">
            To verify your email, we've sent a One Time Password (OTP) to your mail{" "}
            
            </p>
            <label htmlFor="otp">Enter OTP</label>
            <input className="textBox focus-effect" name="otp" type="text" />
           
            <button className="btn1 focus-effect">Create your Amazon account</button>
            <p className="privacy">
            By creating an account, you agree to Amazon's{" "}
              <Link >Conditions of Use</Link> and{" "}
              <Link >Privacy Notice.</Link>
            </p>
            <button className='resend'>Resend OTP</button>
          </form>
        </div>
        
      </div>
      <footer className="footer">
        <ul>
          <li>
            <Link>Conditions of Use </Link>
          </li>
          <li>
              <Link > Privacy Notice </Link>
          </li>
          <li>
              <Link >Help</Link>
          </li>
        </ul>
        <p  > &copy; 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
    )
}

export default EmailVerification

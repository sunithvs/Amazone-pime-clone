import React from "react";
import "./Signin.css";
import { useHistory, Link } from "react-router-dom";
function EmailVerification() {
  const history = useHistory();
  return (
    <div className="main">
      <div className="screen">
        <img
          onClick={() => history.push("/")}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt=""
          className="logo1"
        />
        <div className="signIn-form">
          <form action="">
            <h1>Add mobile number </h1>
            <p className=" instructions ">
              To enhance your account security, add and verify your mobile
              number. By enrolling a mobile phone number, you consent to receive
              automated security notifications via text message from Amazon.
              Remove your number in Login &amp; Security to cancel. For more
              information reply HELP or call +1 888 280 4331. Message and data
              rates may apply. Message frequency varies.{" "}
            </p>
            <label htmlFor="otp">New mobile number</label>
            <div className="input_div">
              <button onClick={(e) => e.preventDefault()} className="lag_btn focus-effect">
                IN +91
              </button>
              <input
                className="textBox focus-effect numberBox"
                placeholder="(e.g., 201-555-5555)"
                name="otp"
                type="tel"
              />
            </div>

            <button className="btn1 focus-effect">Add mobile number</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>
            <Link>Conditions of Use </Link>
          </li>
          <li>
            <Link> Privacy Notice </Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
        </ul>
        <p> &copy; 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

export default EmailVerification;

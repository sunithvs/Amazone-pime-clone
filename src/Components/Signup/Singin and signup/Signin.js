import React, { useState, useContext } from "react";
import isEmail from "validator/lib/isEmail";
import "./Signin.css";
import { useHistory, Link } from "react-router-dom";
import { FirebaseContext } from "../../../Firebase/FirebaseContext";

function Signin() {
  const history = useHistory();
  function signUpHandler() {
    history.push("/sign-up");
  }
  const [state, setState] = useState({});
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);

  function submitHandler(e) {
    e.preventDefault();
    if (!state.email) {
      setError(["Email required"]);
    } else if (!state.password) {
      setError(["Password is required"]);
    } else if (!isEmail(state.email)) {
      setError(["Email is not valid"]);
    } else {
      setError([]);
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .then(() => alert("you are successfull loged in"))
        .catch((err) => setError([err.message]))
        .then(() => history.push("/"));
    }
  }

  return (
    <div className="main">
      <div className="screen">
        <img
          onClick={() => history.push("/")}
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt=""
          className="logo1"
        />
        {error.length > 0 ? (
          <div className="alert-container">
            <i className="fas fa-exclamation-triangle"></i>
            <div className="msgs">
              <h1>There was a problem</h1>
              <ul>
                {error.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        <div className="signIn-form">
          <form action="">
            <h1>Sign-In</h1>

            <label htmlFor="email">Email or mobile phone number</label>

            <input
              onChange={(e) => {
                state.email = e.target.value;
                setState(state);
              }}
              className="textBox focus-effect"
              name="email"
              type="email"
            />

            <label htmlFor="password">Password</label>

            <p className="forgot-pass">Forgot your password?</p>

            <input
              onChange={(e) => {
                state.password = e.target.value;
                setState(state);
              }}
              className="textBox focus-effect "
              type="password"
            />

            <button onClick={submitHandler} className="btn1 focus-effect">
              Sign-In
            </button>

            <p className="privacy">
              By continuing, you agree to Amazon's{" "}
              <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link>
            </p>

            <input className="check" type="checkbox" />

            <p className="privacy">
              Keep me signed in <Link>Details</Link>
            </p>

            <h2>
              <span>New to Amazon ?</span>
            </h2>

            <button
              onClick={signUpHandler}
              className="btn1 new-account focus-effect"
            >
              Create your Amazon account
            </button>
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

export default Signin;

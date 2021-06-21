import React from "react";
import "./Signin.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { FirebaseContext } from "../../../Firebase/FirebaseContext";
import validate from "./validate";
function Signup() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [state, setState] = useState({});
  const [error, setError] = useState([]);
  const submitHandler = () => {
    if (validate(state, setError)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((result) => {
          console.log(result);
          result.user
            .updateProfile({ displayName: state.name })
            .catch((err) => setError([err.message]))
            .then(() => {
              console.log("update completed");
              firebase
                .firestore()
                .collection("users")
                .doc(result.uid)
                .set({ name: state.name, email: state.email })
                .catch((err) => setError([err.message]))
                .then(() => history.push("/sign-in"));
            });
        })
        .catch((err) => {
          console.log(err.message);
          setError([err.message]);
        });
    }
  };

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
            <h1>Create an account</h1>
            <label htmlFor="email">Name</label>
            <input
              onChange={(e) => {
                state.name = e.target.value;
                setState(state);
              }}
              required
              autoComplete="name"
              className="textBox focus-effect"
              name="name"
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                state.email = e.target.value;
                setState(state);
              }}
              required
              autoComplete="email"
              className="textBox focus-effect"
              name="email"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                state.password = e.target.value;
                setState(state);
              }}
              required
              autoComplete="password"
              className="textBox focus-effect"
              type="password"
            />
            <i className="fas fa-info-circle" />
            <p className="info">Passwords must be at least 6 characters</p>
            <br />
            <label htmlFor="password">Re-enter Password</label>
            <input
              onChange={(e) => {
                state.rePassword = e.target.value;
                setState(state);
              }}
              className="textBox focus-effect"
              type="password"
              autoComplete="password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                submitHandler();
              }}
              type="submit"
              className="btn1 focus-effect"
            >
              Create your amazon account{" "}
            </button>
            <p className="privacy">
              By continuing, you agree to Amazon's{" "}
              <Link to="">Conditions of Use</Link> and{" "}
              <Link to="">Privacy Notice.</Link>
            </p>
            <p className="privacy">
              Already have an account ? <Link to="/sign-in">Sign in </Link>
            </p>
          </form>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>
            <Link to="/">Conditions of Use </Link>
          </li>
          <li>
            <Link to="/"> Privacy Notice </Link>
          </li>
          <li>
            <Link to="/">Help</Link>
          </li>
        </ul>
        <p> &copy; 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}

export default Signup;

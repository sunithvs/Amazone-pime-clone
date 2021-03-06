import React from "react";
import "./Header.css";
import{Link} from 'react-router-dom'
function Header() {
  return (
    <header className="head">
      <div className="logo">
        <img
          className="image"
          src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
          alt="prime video"
        />
      </div>
      <div className="menu">
        <ul className="list">
          <li>
            <i className="fas fa-globe" />
          </li>
          <li>
            <h1>EN</h1>
          </li>
          <li>
            <i className="fas fa-angle-down" />
          </li>
          <li>
            <h1  className="sign-in">
              <Link className='sign-in' to='/sign-in'>Sign in</Link> {" "}
            </h1>
          </li>
        </ul>
      </div>
      <i className="far fa-user" />
    </header>
  );
}

export default Header;

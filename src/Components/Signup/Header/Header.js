import React from "react";
import "./Header.css";
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
        <ul className='list' >
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
            <h1 className='sign-in'>Sign in </h1>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

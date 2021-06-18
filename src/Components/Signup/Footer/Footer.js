import React from 'react'
import './Footer.css'
function Footer() {
    return (  
      <footer className="footer">
      <div className="lgo">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png"
          alt="prime video"
          className="footer-logo"
        />
      </div>
      <div className="description">
        <ul>
          <li>
            <h1>Terms and Privacy Notice</h1>
          </li>
          <li>
            <h1>Send us feedback</h1>
          </li>
          <li>
            <h1>Help</h1>
          </li><br/>
          <li>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer

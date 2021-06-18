import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="page">
      <div className="hero">
        <div className="content">
          <h1>Welcome to Prime Video</h1>
          <h2>
            Join Prime to watch the latest movies, TV shows and award-winning
            Amazon Originals
          </h2>
          <button className="btn">Login to join Prime</button>
        </div>
      </div>
      <div className="entertainment hero">
        <div className=" content-right">
          <h1>Great Entertainment</h1>
          <h2>
            With your Prime membership, you have access to exclusive Amazon
            Originals, blockbuster Bollywood movies, regional movies and more.
          </h2>
          <button className="btn">Get started</button>
        </div>
      </div>
      <div className="hero membership">
        <div className="content">
          <h1>One membership, many benefits</h1>
          <h2>
            Your Prime membership now also includes ad-free music along with
            unlimited free, fast delivery on eligible items, exclusive access to
            deals &amp; more. Get started
          </h2>
          <button className="btn">Get started</button>
          <h3>*Go to amazon.in/prime for more information</h3>
        </div>
      </div>
      <div className="hero tv">
        <div className=" content-right">
          <h1>Even better with Fire TV Stick</h1>
          <h2>
            The biggest movies and TV shows are always better on a big screen.
            Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
            Press the voice button on the remote and say the name of the title
            you want to watch to find it in seconds.
          </h2>
          <button className="btn">Get started</button>
        </div>
      </div>
      <div className="features">
        <div className="box">
          <img
            className="pic"
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg"
            alt=""
          />
          <h1>Watch anywhere</h1>
          <h2>
            Enjoy from the web or with the Prime Video app on your phone,
            tablet, or select Smart TVs — on up to 3 devices at once.
          </h2>
        </div>
        <div className="box">
          <img
            className="pic"
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg"
            alt=""
          />
          <h1>Download and go</h1>
          <h2>
            Watch offline on the Prime Video app when you download titles to
            your iPhone, iPad, Tablet, or Android device
          </h2>
        </div>
        <div className="box">
          <img
            className="pic"
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png"
            alt=""
          />
          <h1>Data saver</h1>
          <h2>
          Control data usage while downloading and watching videos on select phones or tablets.
          </h2>
        </div>
      </div>
      <div className="hero family">
        <div className="content">
          <h1>Family Friendly</h1>
          <h2>
            With easy to use Parental Controls and a dedicated kids page, enjoy
            secure, ad-free kids entertainment. Kids can enjoy popular TV shows
            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </h2>
          <button className="btn">Get started</button>
        </div>
      </div>
      <footer className='footer' >
        <div className="lgo">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" alt="prime video" className="footer-logo" />
        </div>
        <div className="description">
          <ul>
            <li ><h1>Terms and Privacy Notice</h1></li>
            <li ><h1>Send us feedback</h1></li>
            <li ><h1>Help</h1></li>
            <li>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</li>

          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Hero;

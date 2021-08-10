import React from "react";
import "./home.scss";
import Fade from "react-reveal/Fade";
const Home = () => {
  return (
    <div className="home">
      <img src="/img/bgHome.jpg" alt="Church" className="bgImg" />
      <div className="container">
        <div className="header">
          <Fade>
            <h2>St.Marys Church Kabanigiri</h2>
            <h1>Holy Mass Booking</h1>{" "}
          </Fade>
        </div>
        <div className="section">
          <Fade>
            <p className="sectiontext">
              It would be easier for the world to survive without the sun than
              to do so without the Holy Mass.
              <span>Padre Pio</span>
            </p>
          </Fade>
          <Fade>
            <button className="booknow">BOOK HOLY MASS</button>
          </Fade>
        </div>
        <p className="footerText">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default Home;

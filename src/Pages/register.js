import React from "react";
import Fade from "react-reveal/Fade";
import "./books.scss";
import { MdDateRange } from "react-icons/md";

const BookMass = () => {
  return (
    <div className="home bookmass">
      <div className="container2">
        <div className="header">
          <Fade>
            <h2>St.Marys Church Kabanigiri</h2>
            <h1>Holy Mass Booking</h1>{" "}
          </Fade>
        </div>

        <p className="footerText">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default BookMass;

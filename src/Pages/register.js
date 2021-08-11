import React from "react";
import Fade from "react-reveal/Fade";
import "./books.scss";

import {
  MdDateRange,
  MdPerson,
  MdStoreMallDirectory,
  MdPhone,
} from "react-icons/md";
import "./register.scss";
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
        <div className="register">
          <div className="register__col1">
            <Fade top>
              <div className="item">
                <p className="item__date">
                  <MdDateRange />
                  14-10-2020
                </p>
                <p className="item__datebig">14 ഞായര്‍</p>
                <p className="item__type">ഒന്നാം കുർബാന</p>
                <p className="item__descrip">സമയം:2.00 PM</p>

                <p className="item__available item__descrip">
                  മൊത്തം സീറ്റുകൾ:40
                </p>
                <p className="item__total item__descrip">
                  ലഭ്യമായ സീറ്റുകൾ: <span>04</span>
                </p>
              </div>
            </Fade>
          </div>
          <Fade>
            <div className="register__col2">
              <h3>വി.കുർബാന തിരഞ്ഞെടുക്കുക</h3>
              <p className="text">
                പേര് <span>*</span>
              </p>
              <div className="inputholder">
                <MdPerson className="inputholder__icn" />
                <input type="text" className="input" placeholder="Your Name" />
              </div>
              <p className="text">
                വീട്ടുപേര് <span>*</span>
              </p>
              <div className="inputholder">
                <MdStoreMallDirectory className="inputholder__icn" />
                <input
                  type="text"
                  className="input"
                  placeholder="Your House Name"
                />
              </div>
              <p className="text">
                ഫോൺനമ്പർ <span>*</span>
              </p>
              <div className="inputholder">
                <MdPhone className="inputholder__icn" />
                <input
                  type="tel"
                  className="input"
                  placeholder="Your Phone Number"
                />
              </div>
              <button className="submit">BOOK NOW</button>
            </div>
          </Fade>
        </div>
        <p className="footerText footerText2">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default BookMass;

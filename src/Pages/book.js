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
        <div className="section">
          <div className="sectionbook">
            <h3>വി.കുർബാന തിരഞ്ഞെടുക്കുക</h3>
            <div className="sectionbook__list">
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
              </div>{" "}
            </div>
          </div>
        </div>
        <p className="footerText">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default BookMass;

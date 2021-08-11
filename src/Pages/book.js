import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./books.scss";
import { MdDateRange } from "react-icons/md";
import { db } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
/////Import Firebase

const BookMass = () => {
  ////////////Get Firebase data
  //////////////////////////////////
  let history = useHistory();
  const ref = db.collection("holymass");
  const [dataload, setdataload] = useState(true);
  const [querydata, setQuerydata] = useState([]);

  function getFirebaseQueryData() {
    ref.onSnapshot((querysnapshot) => {
      let querydatalist = [];
      querysnapshot.forEach((doc) => {
        querydatalist.push({ ...doc.data(), uniqueid: doc.id });
      });
      setQuerydata(querydatalist);
      setdataload(false);

      //
    });
  }
  useEffect(() => {
    getFirebaseQueryData();
  }, []); ////Get All Data
  /////////////////
  function NumberOfItems(total, data) {
    let count = data.length;
    return total - count;
  }
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
              {querydata
                ? querydata.map((item) => {
                    return (
                      <div className="item" key={item.uniqueid}>
                        <p className="item__date">
                          <MdDateRange />
                          {item.date}
                        </p>
                        <p className="item__datebig">{item.datemal}</p>
                        <p className="item__type">{item.massdesc}</p>
                        <p className="item__descrip">സമയം:{item.time}</p>

                        <p className="item__available item__descrip">
                          മൊത്തം സീറ്റുകൾ:{item.totalseats}
                        </p>

                        <p className="item__total item__descrip">
                          ലഭ്യമായ സീറ്റുകൾ:{" "}
                          <span>
                            {NumberOfItems(
                              item.totalseats,
                              item.registeration
                            ) < 10
                              ? "0" +
                                NumberOfItems(
                                  item.totalseats,
                                  item.registeration
                                )
                              : NumberOfItems(
                                  item.totalseats,
                                  item.registeration
                                )}
                          </span>
                        </p>
                        <div className="flexend">
                          <button
                            className="submit"
                            onClick={() => {
                              history.push(`bookholymass/${item.uniqueid}`);
                            }}
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          {dataload ? (
            <div className="centerDiv">
              <CircularProgress color="secondary" />
            </div>
          ) : null}
        </div>
        <p className="footerText">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default BookMass;

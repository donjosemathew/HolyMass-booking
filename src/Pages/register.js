import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./books.scss";
import { db } from "../firebase/firebase";
import { useHistory, useParams } from "react-router-dom";
import {
  MdDateRange,
  MdPerson,
  MdStoreMallDirectory,
  MdPhone,
} from "react-icons/md";
import "./register.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
const BookMass = () => {
  let { slug } = useParams();
  ////////////Get Firebase data
  //////////////////////////////////
  let history = useHistory();
  console.log(slug);
  const ref = db.collection("holymass").doc(slug);
  const [dataload, setdataload] = useState(true);
  const [querydata, setQuerydata] = useState(false);

  function getFirebaseQueryData() {
    ref.onSnapshot((querysnapshot) => {
      setQuerydata(querysnapshot.data());
      setdataload(!querysnapshot.exists);

      if (!querysnapshot.exists) {
        history.push("/bookholymass");
      }
      //
    });
  }
  useEffect(() => {
    getFirebaseQueryData();
  }, [slug]); ////Get All Data

  function NumberOfItems(total, data) {
    let count = 0;
    console.log(total, data);
    for (const [key, value] of Object.entries(data)) {
      count++;
    }
    console.log(total - count);
    return total - count;
  }
  /////////////////
  return (
    <div className="home bookmass">
      <div className="container2">
        <div className="header">
          <Fade>
            <h2>St.Marys Church Kabanigiri</h2>
            <h1>Holy Mass Booking</h1>{" "}
          </Fade>
        </div>
        {dataload ? (
          <div className="centerDiv">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <>
            <div className="register">
              <div className="register__col1">
                {querydata ? (
                  <Fade top>
                    <div className="item">
                      <p className="item__date">
                        <MdDateRange />
                        {querydata.date}
                      </p>
                      <p className="item__datebig">{querydata.datemal}</p>
                      <p className="item__type">{querydata.massdesc}</p>
                      <p className="item__descrip">സമയം:{querydata.time}</p>

                      <p className="item__available item__descrip">
                        മൊത്തം സീറ്റുകൾ:{querydata.totalseats}
                      </p>
                      <p className="item__total item__descrip">
                        ലഭ്യമായ സീറ്റുകൾ:{" "}
                        <span>
                          {NumberOfItems(
                            querydata.totalseats,
                            querydata.register
                          ) < 10
                            ? "0" +
                              NumberOfItems(
                                querydata.totalseats,
                                querydata.register
                              )
                            : NumberOfItems(
                                querydata.totalseats,
                                querydata.register
                              )}
                        </span>
                      </p>
                    </div>
                  </Fade>
                ) : null}
              </div>
              <Fade>
                <div className="register__col2">
                  <h3>വി.കുർബാന തിരഞ്ഞെടുക്കുക</h3>
                  <p className="text">
                    പേര് <span>*</span>
                  </p>
                  <div className="inputholder">
                    <MdPerson className="inputholder__icn" />
                    <input
                      type="text"
                      className="input"
                      placeholder="Your Name"
                    />
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
          </>
        )}

        <p className="footerText footerText2">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
    </div>
  );
};

export default BookMass;

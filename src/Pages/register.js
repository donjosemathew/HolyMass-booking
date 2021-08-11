import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./books.scss";
import firebase from "firebase";
import { db } from "../firebase/firebase";
import { useHistory, useParams } from "react-router-dom";
import {
  MdDateRange,
  MdPerson,
  MdStoreMallDirectory,
  MdPhone,
  MdCheckCircle,
} from "react-icons/md";
import "./register.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

/////////////
import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

////////////
const BookMass = () => {
  ////////////BackDrop

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  ////////////////////
  let { slug } = useParams();
  ////////////Get Firebase data
  //////////////////////////////////
  let history = useHistory();

  const ref = db.collection("holymass").doc(slug);
  const [dataload, setdataload] = useState(true);
  const [querydata, setQuerydata] = useState(false);

  //////////////////////
  const [name, setName] = useState("");
  const [HouseName, setHouseName] = useState("");
  const [phone, setphone] = useState("");
  const [registered, setregistered] = useState(false);
  ///////////
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
  }, []); ////Get All Data

  function NumberOfItems(total, data) {
    let count = data.length;

    return total - count;
  }

  /////////////////////
  const [error, seterror] = useState("");
  function AddData() {
    if (name.length < 2) {
      seterror("പേര് നൽകുക!");
    } else if (HouseName.length < 2) {
      seterror("വീട്ട് പേര്  നൽകുക!");
    } else if (phone.length < 9) {
      seterror("ശരിയായ ഫോൺ നമ്പർ നൽകുക");
    } else {
      setOpen(true);
      const data =
        name.replace(",", "") + " " + HouseName.replace(",", "") + "," + phone;
      seterror("");
      ref
        .update({
          registeration: firebase.firestore.FieldValue.arrayUnion(data),
        })
        .then(() => {
          console.log("Document successfully updated!");
          setOpen(false);
          setregistered(true);
        })
        .catch(() => {
          seterror("കുർബാന ബുക്കിങ് പരാജയപ്പെട്ടിരിക്കുന്നു");
        });
    }
  }
  //////

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
                            querydata.registeration
                          ) < 10
                            ? "0" +
                              NumberOfItems(
                                querydata.totalseats,
                                querydata.registeration
                              )
                            : NumberOfItems(
                                querydata.totalseats,
                                querydata.registeration
                              )}
                        </span>
                      </p>
                    </div>
                  </Fade>
                ) : null}
              </div>
              <Fade>
                {!registered ? (
                  <div className="register__col2">
                    <h3>വി.കുർബാന ബുക്കിങ്</h3>
                    <p className="text">
                      പേര് <span>*</span>
                    </p>
                    <div className="inputholder">
                      <MdPerson className="inputholder__icn" />
                      <input
                        type="text"
                        className="input"
                        placeholder="Your Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setHouseName(e.target.value);
                        }}
                      />
                    </div>
                    <p className="text">
                      ഫോൺനമ്പർ <span>*</span>
                    </p>
                    <div className="inputholder">
                      <MdPhone className="inputholder__icn" />
                      <input
                        onChange={(e) => {
                          setphone(e.target.value);
                        }}
                        type="tel"
                        className="input"
                        placeholder="Your Phone Number"
                      />
                    </div>{" "}
                    <p className="text error">{error}</p>
                    <button
                      className="submit"
                      onClick={() => {
                        AddData();
                      }}
                    >
                      BOOK NOW
                    </button>
                  </div>
                ) : (
                  <Fade>
                    <div className="sucess">
                      <MdCheckCircle size="5em" color="#ffff" />
                      <p className="sucess__text">
                        കുർബാന ബുക്കിങ് വിജയിച്ചിരിക്കുന്നു
                      </p>
                      <button
                        className="submit"
                        onClick={() => {
                          history.push("/bookholymass");
                        }}
                      >
                        BACK TO HOME
                      </button>
                    </div>
                  </Fade>
                )}
              </Fade>
            </div>
          </>
        )}

        <p className="footerText footerText2">
          Designed and Developed By <span>KCYM Kabanigiri</span>
        </p>
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default BookMass;

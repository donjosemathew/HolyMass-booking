import React from "react";
import AuthContextProvider, { AuthContext } from "../../context/context";
import Login from "./login";

import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
const Dashlist = ({ user }) => {
  ////////////BackDrop

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

  ///////////
  function getFirebaseQueryData() {
    ref.onSnapshot((querysnapshot) => {
      setQuerydata(querysnapshot.data());
      console.log(querysnapshot.data().registeration);
      setdataload(!querysnapshot.exists);
      if (!querysnapshot.exists) {
        history.push("/dashboard");
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
  return (
    <div className="login datascreen">
      <div className="top">Top</div>
      <div className="list">
        <div className="list__col">
          <div className="sectionbook ">
            <h3 className="sectionbook2">
              വി.കുർബാന {querydata.datemal}, സമയം:{querydata.time}
            </h3>
            <div className="list-holder">
              {querydata
                ? querydata.registeration.map((item, index) => {
                    return (
                      <>
                        <p className="itemdata">
                          <span>{index + 1}.</span>
                          {item}
                        </p>
                      </>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashlist;

import React from "react";

import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
const Dashboard = ({ user }) => {
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
    <div className="login">
      <div className="top">Top</div>
      <div className="list">
        <div className="list__col">
          <div className="sectionbook">
            <h3>വി.കുർബാന തിരഞ്ഞെടുക്കുക</h3>
            <div className="sectionbook__list">
              {querydata
                ? querydata.map((item) => {
                    return (
                      <div
                        className="item"
                        key={item.uniqueid}
                        onClick={() => {
                          history.push(`/dashboard/${item.uniqueid}`);
                        }}
                      >
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
                        <div className="flexend"></div>
                      </div>
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

export default Dashboard;

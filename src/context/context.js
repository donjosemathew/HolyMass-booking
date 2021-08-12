import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db, provider } from "../firebase/firebase";
import Login from "../Pages/dashboard/login";

//////////////////Alert

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  /////////////////////////////////////////
  /////////////////////Auth //////////////
  ///////////////////////////////////////
  //let history = useHistory();
  const [username, setUser] = useState(false);
  ////AuthChange
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // props.router.push("/dashboard");
      }
    });
  });
  ////Login
  const handleAuth = () => {
    console.log("Login");
    openSnackbar(false);
    if (!username) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
        //history.push("/dashboard");
      });
    }
  };
  ////SignOut
  /*
  const handleSignOut = () => {
    if (username) {
      auth.signOut().then(() => {
        setUser(false);
        setAdmin(false);
        getData();
        history.push("/login");
      });
    }
  };

  /////////////////////////////////////////
  /////////////////////Admin Roles //////////////
  ///////////////////////////////////////
 
  const [admin, setAdmin] = useState(false);
  const ref = db.collection("adminroles");
  let adminroles = [];
  function getData() {
    ref.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        // setcareerdataLoad(false);
      });
      setAdmin(items);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (admin) {
      admin.forEach((item) => {
        adminroles.push(item.gmail);
      });
    }
  }, [admin]);
  const [adminrole, SetAdminRole] = useState("");
  useEffect(() => {
    console.log("item.role");
    if (admin) {
      admin.forEach((item) => {
        if (item.gmail === username.email) {
          console.log(item.gmail, username.email);
          SetAdminRole(item.role);
        }
      });
    }
  }, [admin]);*/
  //////////////////////////////////////////
  //////////////////////////////////////////

  const [snakbar, openSnackbar] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user: username,
        handleAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

import React from "react";
import "./login.scss";
import AuthContextProvider, { AuthContext } from "../../context/context";
const Login = () => {
  return (
    <AuthContextProvider>
      <AuthContext.Consumer>
        {({ user, handleAuth }) => (
          <>
            <div className="login">
              <h2>Please Login</h2>
              <button onClick={handleAuth}>Login Now</button>
            </div>
          </>
        )}
      </AuthContext.Consumer>
    </AuthContextProvider>
  );
};

export default Login;

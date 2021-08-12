import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./context/context";
import BookMass from "./Pages/book";
import Dashboard from "./Pages/dashboard/dashboard";
import Dashlist from "./Pages/dashboard/dashlist";
import Login from "./Pages/dashboard/login";
import Home from "./Pages/home";
import Register from "./Pages/register";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AuthContext.Consumer>
          {({ user }) => (
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/bookholymass">
                  <BookMass />
                </Route>
                <Route exact path="/bookholymass/:slug">
                  <Register />
                </Route>
                <Route exact path="/dashboard/:slug">
                  <Dashlist />
                </Route>
                <Route exact path="/login">
                  {user ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <Route exact path="/dashboard">
                  {!user ? <Redirect to="/login" /> : <Dashboard />}
                </Route>
              </Switch>
            </BrowserRouter>
          )}
        </AuthContext.Consumer>
      </AuthContextProvider>
    </div>
  );
}

export default App;

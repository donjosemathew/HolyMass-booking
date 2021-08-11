import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookMass from "./Pages/book";
import Home from "./Pages/home";
import Register from "./Pages/register";

function App() {
  return (
    <div className="App">
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

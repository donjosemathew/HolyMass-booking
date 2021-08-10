import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookMass from "./Pages/book";
import Home from "./Pages/home";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

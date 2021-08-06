import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Details from "./Components/Details/Details";


function App() {
  return (
    <div>

      <Router>
        <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>

            <Route path="/details">
              <Details></Details>
            </Route>

            <Route path="*">
            <h1>Error 404: Content not found!</h1>
            </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "materialize-css/dis/css/materialize.min.css";
import "materialize-css/dis/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home.js";
import Skills from "./components/Skills.js";
import Educations from "./components/Educations.js";
import Experiences from "./components/Experiences.js";
import Portfolios from "./components/Portfolios.js";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />

        <Switch>
          <Route path="/skills" component={Skills} />

          <Route path="/educations" component={Educations} />

          <Route path="/experiences" component={Experiences} />

          <Route path="/portfolios" component={Portfolios} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

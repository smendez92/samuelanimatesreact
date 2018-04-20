import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const App = () =>(
  <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects/" component={ProjectPage} />
      </Switch>
  </Router>
);

export default App;
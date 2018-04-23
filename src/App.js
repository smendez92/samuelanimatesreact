import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import './App.css';

const App = () =>(
  <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects/:title" component={ProjectPage} />
        <Route exact path="/projects/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
  </Router>
);

export default App;
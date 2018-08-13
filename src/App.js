import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ProjectsPageSkeleton from "./pages/ProjectsPageSkeleton";

import './App.css';

const App = () =>(
  <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
		<Route path="/projects/:project" component={ProjectsPageSkeleton} />
        <Route component={HomePage} />
      </Switch>
  </Router>
);

export default App;
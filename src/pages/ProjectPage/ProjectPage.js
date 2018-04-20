import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AfterProject from "../projects/AfterProject";
import './ProjectPage.css';

const ProjectPage = () => (
    <div>
      <Switch>
        <Route exact path='/projects/after' component={AfterProject}/>
      </Switch>
    </div>
);

export default ProjectPage;
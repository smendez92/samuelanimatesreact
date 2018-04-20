import React, { Component } from 'react';
import './HomePage.css';
import HomepageProjectContainer from "../../components/HomepageProjectContainer";

class HomePage extends Component {
  state = { 
    projects: [
      {
        "title":"After, After That",
        "icon":"./assets/images/homepageIcons/homepage-icon-after.svg",
        "summary":"An experimental documentary. A cross between two marks.",
        "links":[
          {
            "location": "internal",
            "exactPath": "/projects/after",
            "componentPage": "AfterProject",
            "title": "'After, After That' Overview Page",
            "icon": "page",
          },
          {
            "location": "external",
            "title": "After, After That' Film on Vimeo",
            "icon": "film",
            "url": "https://vimeo.com/55657740"
          }
        ]
      }
    ],
    isHighContrast: false 
  };

  render() {
    return (
      <div>
        <h1>AYYY LMAO</h1>
        <section>
          <HomepageProjectContainer
            project = {this.state.projects[0]}
          />
        </section>
      </div>
    );
  };
}

export default HomePage;

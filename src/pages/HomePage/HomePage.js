import React, { Component } from 'react';
import './HomePage.css';
import HomepageProjectContainer from "../../components/HomepageProjectContainer";

class HomePage extends Component {
  state = { 
    projectSections: [
		{
			"title": "ANIMATED FILMS",
			"projects": [
				{
					"title":"After, After That",
					"icon":"./assets/images/homepageIcons/homepage-icon-after.svg",
					"iconAlt": "'After, After That' cartoon logo: a jellyfish floating in front of a cross.",
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
			]
		}
    ],
    isHighContrast: false 
  };

  render() {
    return (
      <div>
        <h1>AYYY LMAO</h1>
		{ this.state.projectSections.map(projectSection =>
			<section>
				<h2>{ projectSection.title} </h2>
			{ projectSection.projects.map(project =>
				<HomepageProjectContainer
					project = { project }
				/>
			)}
			</section>
		)}
      </div>
    );
  };
}

export default HomePage;

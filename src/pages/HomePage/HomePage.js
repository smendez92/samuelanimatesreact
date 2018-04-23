import React, { Component } from 'react';
import './HomePage.css';
import HomepageProjectsSection from '../../components/HomepageProjectsSection';

class HomePage extends Component {
  state = { 
    projectSections: [
		{
			"title": "ANIMATED FILMS",
			"id": "animation",
			"projects": [
				{
					"title": "No One Can Hear You",
					"description": "A mixed-media animation: the memories of Officer Hernández, an astronaut losing contact with her crewmates and drifting off into space.",
					"icon": "./assets/images/homepageIcons/homepage-icon-hernandez.svg",
					"iconAlt": "'No One Can Hear You' cartoon logo: an astronaut's helmet.",
					"projectPagePath": "/projects/hernandez",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/hernandez",
							"componentPage": "HernandezProject",
							"title": "'No One Can Hear You' Overview Page",
							"icon": "page",
						},
						{
							"location": "external",
							"title": "'No One Can Hear You' excerpt on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/233932687"
						}
					]
				},
				{
					"title": "By Foot: Busan and the Sea",
					"description": "An experimental documentary: a solo trip through Busan, South Korea.",
					"icon": "./assets/images/homepageIcons/homepage-icon-busan.svg",
					"iconAlt": "'By Foot' cartoon logo: a sunflower.",
					"projectPagePath": "/projects/busan",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/busan",
							"componentPage": "BusanProject",
							"title": "'Busan' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "'Busan' Trailer on Vimeo",
							"url": "https://vimeo.com/203944431",
							"icon": "video"
						}
					]
				},
				{
					"title": "Persefone's Breakfast",
					"description": "An experimental animation: Persephone's voice messages to Hades as she leaves the Underworld once and for all.",
					"icon": "./assets/images/homepageIcons/homepage-icon-breakfast.svg",
					"iconAlt": "'Persefone's Breakfast' cartoon logo",
					"projectPagePath": "/projects/breakfast",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/breakfast",
							"componentPage": "BreakfastProject",
							"title": "'Persefone's Breakfast' Overview Page",
							"icon": "page",
							
						},
						{
							"location": "external",
							"title": "'Persefone's Breakfast' Film on Vimeo",
							"url": "http://www.vimeo.com/134973465",
							"icon": "Film",
							
						}
					]
				},
				{
					"title": "How to Make Yuca Frita",
					"description": "An instructional animation: peel, chop, remove the stringy core, boil, fry, and eat.",
					"icon": "./assets/images/homepageIcons/homepage-icon-yuca.svg",
					"iconAlt": "Yuca cartoon logo: 3 pieces of chopped yuca.",
					"projectPagePath": "/projects/yuca",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/yuca",
							"componentPage": "YucaProject",
							"title": "'Yuca' Overview Page",
							"icon": "page",
						},
						{
							"location": "external",
							"title": "'Yuca' Film on Vimeo",
							"url": "http://www.vimeo.com/95826024",
							"icon": "Film"
						}
					]
				},
				{
					"title":"After, After That",
					"icon":"./assets/images/homepageIcons/homepage-icon-after.svg",
					"iconAlt": "'After, After That' cartoon logo: a jellyfish floating in front of a cross.",
					"description":"An experimental documentary. A cross between two marks.",
					"projectPagePath": "/projects/after",
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
		},
		{
			"title": "PUBLIC HEALTH RESEARCH",
			"id": "health",
			"projects": [
				{
					"title": "Health for All",
					"icon": "./assets/images/homepageIcons/homepage-icon-nlm.svg",
					"iconAlt": "Health for All logo",
					"description": "Ongoing prototype development for a clinical trial informational tool under development in partnership with Chicago Public Libraries.",
					"projectPagePath": "/projects/health",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/healthforall",
							"componentPage": "HealthforallProject",
							"title": "'Health for All' Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"title": "Perceptions of Planned Parenthood",
					"icon": "./assets/images/homepageIcons/homepage-icon-pp.svg",
					"iconAlt": "Planned Parenthood Study cartoon logo: the letters 'PP' underneath a magnifying glass",
					"description": "Qualitative study on medical providers' perceptions of Planned Parenthood in family planning referrals.",
					"projectPagePath": "/projects/plannedparenthood",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/plannedparenthood",
							"componentPage": "PlannedParenthoodProject",
							"title": "Planned Parenthood Study Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"title": "Social Media Use by Community-Based Organizations",
					"icon": "./assets/images/homepageIcons/homepage-icon-media.svg",
					"iconAlt": "Social Media Study cartoon logo: intersecting waves.",
					"description": "A content analysis of social media content by community-based organizations conducting health outreach.",
					"projectPagePath": "/projects/media",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/media",
							"componentPage": "Project",
							"title": "Social Media Study Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "Research Article on BMC Public Healt",
							"icon": "",
							"url": "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129"
						}
					]
				},
				{
					"title": "Bodegas Saludables",
					"icon": "./assets/images/homepageIcons/homepage-icon-lmhtf.svg",
					"iconAlt": "'Bodegas Saludables' cartoon logo: a bar graph in a circle.",
					"description": "Video explaining a community research partner's public health program.",
					"projectPagePath": "/projects/lmhtf",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/lmhtf",
							"componentPage": "LmhtfProject",
							"title": "'Bodegas Saludables' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "'Bodegas Saludables'excerpt on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/231980215"
						}
					]
				}
			]
		},
		{
			"title": "WEB DEVELOPMENT",
			"id": "web",
			"projects": [
				{
					"title": "AR-Tarot",
					"icon": "./assets/images/homepage-icon-tarot.svg",
					"iconAlt": "AR-Tarot cartoon logo: 8-pointed star.",
					"description": "An online tarot reading utilizing A-frame to embed an augmented reality display.",
					"projectPagePath": "/projects/tarot",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/tarot",
							"componentPage": "TarotProject",
							"title": "'AR-Tarot' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "'AR-Tarot' GitHub Repo",
							"icon": "code",
							"url": "https://github.com/smendez92/AR-tarot"
						},
						{
							"location": "external",
							"title": "'AR-Tarot' Demo on GitHub Pages",
							"icon": "",
							"url": "https://smendez92.github.io/AR-tarot/index"
						}
					]
				},
				{
					"title": "Everything But Apples",
					"icon": "./assets/images/homepage-icon-apples.svg",
					"iconAlt": "'Apples' logo: the letters E and B overlayed on an apple outline.",
					"description": "A multiplayer web-enabled party game; a social-digital version of Apples to Apples.",
					"projectPagePath": "/projects/apples",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/apples",
							"componentPage": "ApplesProject",
							"title": "'Apples' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "''Apples' GitHub Repo",
							"icon": "code",
							"url": "https://github.com/amgault/everythingButApples"
						},
						{
							"location": "external",
							"title": "'Apples' Demo on Heroku",
							"icon": "",
							"url": "https://everythingbutapples.herokuapp.com"
						}
					]
				},
				{
					"title": "GiftPitch Demo",
					"icon": "./assets/images/homepageIcons/homepage-icon-giftpitch.svg",
					"iconAlt": "GiftPitch logo: a stylized letter P.",
					"description": "Front-end logic for a web app letting users take a personality quiz to help find the perfect gift for someone from Amazon, Etsy, or Ebay.",
					"projectPagePath": "/projects/giftpitch",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/giftpitch",
							"componentPage": "GiftpitchProject",
							"title": "GiftPitch Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "GiftPitch Walkthrough Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/235300604"
						},
						{
							"location": "external",
							"title": "GiftPitch GitHub Repo",
							"icon": "",
							"url": "https://github.com/jmoc1181/GiftProject"
						}
					]
				}
			]
		},
		{
			"title": "VIDEO",
			"id": "video",
			"projects": [
				{
					"title": "Spanish Community Center (SCC) Promo Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-joliet.svg",
					"iconAlt": "SCC Promo Video cartoon logo: a green, white, and blue schoolhouse building.",
					"description": "A promotional video for the Spanish Community Center in Joliet.",
					"projectPagePath": "/projects/joliet",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/joliet",
							"componentPage": "JolietProject",
							"title": "SCC Promo Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "SCC Promo Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/221224584"
						}
					]
				},
				{
					"title": "Artemis I Fundraiser Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-artemis.svg",
					"iconAlt": "'Artemis I' cartoon logo: solar eclipse.",
					"description": "A fundraising video for a high-altitude balloon launch by South Side Hackerspace: Chicago to document the 2017 solar eclipse.",
					"projectPagePath": "/projects/artemis",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/artemis",
							"componentPage": "ArtemisProject",
							"title": "'Artemis I' Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "'Artemis I' Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/223448852"
						},
						{
							"location": "external",
							"title": "'Artemis I' Fundraising Campaign",
							"icon": "",
							"url": "https://www.generosity.com/education-fundraising/experience-the-2017-eclipse-with-us-artemis-i"
						}
					]
				},
				{
					"title": "WhyUEdu Info Series",
					"icon": "./assets/images/homepageIcons/homepage-icon-whyu.svg",
					"iconAlt": "WhyUEdu Series cartoon logo: a question mark in a light green circle.",
					"description": "2 sets of informational videos & worksheets on aspects of the US college application process.",
					"projectPagePath": "/projects/whyu",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/whyu",
							"componentPage": "WhyuProject",
							"title": "WhyUEdu Series Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "WhyUEdu Series Excerpt 1 on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/128663374/341f06632a"
						},
						{
							"location": "external",
							"title": "WhyUEdu Series Excerpt 2 on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/128663372/553014bdd5"
						},
						{
							"location": "external",
							"title": "WhyUEdu Series Worksheet PDF",
							"icon": "document",
							"url": "./assets/documents/Why+Essay+Planning+Worksheet.pdf"
						}
					]
				},
				{
					"title": "'Teeny' Kickstarter Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-teeny.svg",
					"iconAlt": "Teeny logo",
					"description": "A fundraising video for a Kickstarter campaign promoting a Taiwanese artisan's work.",
					"projectPagePath": "/projects/teeny",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/teeny",
							"componentPage": "TeenyProject",
							"title": "'Teeny' Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"title": "'Teeny' Fundraising Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/172990828"
						},
						{
							"location": "external",
							"title": "Teeny' Fundraising Campaign",
							"icon": "",
							"url": "https://www.kickstarter.com/projects/849732009/teeny-artisan-coin-holders-for-your-change-and-ess"
						}
					]
				}
			]
		},
		{
			"title": "PUBLIC ART",
			"id": "art",
			"projects": [
				{
					"title": "Connect the Dots!",
					"icon": "./assets/images/homepageIcons/homepage-icon-dots.svg",
					"iconAlt": "'Connect the Dots!' cartoon logo: a circle of dots.",
					"description": "An interactive art installation taking place in a public bathroom.",
					"projectPagePath": "/projects/dots",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/dots",
							"componentPage": "DotsProject",
							"title": "'Dots' Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"title": "Walks Through Cambridge",
					"icon": "./assets/images/homepageIcons/homepage-icon-walks.svg",
					"iconAlt": "'Walks' cartoon logo: an overlapping pair of rectangles.",
					"description": "A site-specific public art installation in Harvard Yard, produced for Harvard ARTS FIRST 2011.",
					"projectPagePath": "/projects/walks",
					"links": [
						{
							"location": "internal",
							"exactPath": "/projects/walks",
							"componentPage": "WalksProject",
							"title": "'Walks' Overview Page",
							"icon": "page"
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
      <div className="margin-auto width-85pc">
        <div className="text-center">
			<h1>SAMUEL R. MENDEZ</h1>
		</div>
		{ this.state.projectSections.map(projectSection =>
			<HomepageProjectsSection
				title = { projectSection.title}
				projects = { projectSection.projects }
			/>
		)}
      </div>
    );
  };
}

export default HomePage;

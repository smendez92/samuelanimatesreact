import React, { Component } from 'react';
import './HomePage.css';
import GenericFloatingSection from '../../components/GenericFloatingSection';
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import HomepageProjectsSection from '../../components/HomepageProjectsSection';
import ResponsiveCtoLFloat from '../../components/ResponsiveCtoLFloat';
import MenuBar from '../../components/MenuBar';
import SheerWhiteContainer from '../../components/SheerWhiteContainer';
import UnorderedBulletlessList from '../../components/UnorderedBulletlessList';

class HomePage extends Component {
  state = { 
	aboutMeSection:{
		quote: "I could trace back about 80% of my humor to specific SpongeBob episodes.",
		blurb: "I make animations. I am a community-based researcher. And I do front end web development, with an eye on web accessibility. I see the privilege of having chances to gain these skills; I want use these chances to make the spaces I occupy more accessible to a wider range of people.",
		detailsLead: "Interests",
		detailsBody: "community-based research, social determinants of health, accessibility, digital documentary.",
		links: [
			{
				"location": "external",
				"id": "",
				"title": "My CV as a Published Google Doc",
				"icon": "document",
				"url": "https://docs.google.com/document/d/e/2PACX-1vSMS4XleOQlHUDp5mbn00Z29u8Pbg3EhHyVDzDJag1cWMi6uTh6vCOnqk6BYG7L16BAlchdHuvuq5zb/pub"
			},
			{
				"location": "external",
				"id": "",
				"title": "My Vimeo Profile",
				"icon": "video",
				"url": "https://www.vimeo.com/user15152945"
			},
			{
				"location": "external",
				"id": "",
				"title": "My GitHub Profile",
				"icon": "code",
				"url": "https://github.com/smendez92"
			},
			{
				"location": "external",
				"id": "",
				"title": "My LinkedIn Profile",
				"icon": "",
				"url": "https://www.linkedin.com/in/samuel-r-mendez/"
			},
		]
	},
	highlightsSection: [
		{
			"id": "highlights",
			"title": "10 Days in Saigon",
			"description": "A 10-week web series documenting wheelchair travel in Ho Chi Minh City, Vietnam.",
			"icon": "./assets/images/homepageIcons/homepage-icon-saigon.svg",
			"iconAlt": "'10 Days' logo: three overlayed Accessible Icons, suggesting fast forward movement.",
			"projectPagePath": "/projects/saigon",
			"links": [
				{
					"location": "internal",
					"exactPath": "/projects/saigon",
					"componentPage": "SaigonProject",
					"id": "highlights0101",
					"title": "'10 Days' Overview Page",
					"icon": "page",
				},
				{
					"location": "external",
					"id": "highlights0102",
					"title": "'10 Days' Trailer on Facebook",
					"icon": "video",
					"url": "https://www.facebook.com/wearemuui/videos/1834490626823232/"
				},
				{
					"location": "external",
					"id": "highlights0103",
					"title": "'10 Days' Google Map",
					"icon": "map",
					"url": "https://www.google.com/maps/d/viewer?mid=1msCQD_ab_Lz6mLz80wyu1qHXCBk&hl=en_US&ll=10.798291852220926%2C106.67387433398437&z=13"
				},
				{
					"location": "external",
					"id": "highlights0104",
					"title": "'10 Days' Article",
					"icon": "website",
					"url": "https://www.giantrobot.media/stories/2017/5/30/muui"
				}
			]
		},
		{
			"id": "highlights02",
			"title": "Wheelchair Travel A11Y Wiki",
			"description": "In-progress demo of a wheelchair travel accessibility (A11Y) wiki.",
			"icon": "./assets/images/homepageIcons/homepage-icon-wiki.svg",
			"iconAlt": "'A11Y Wiki' logo: a spinning gear/flower made up of geometric shapes.",
			"projectPagePath": "/projects/wiki",
			"links": [
				{
					"location": "internal",
					"exactPath": "/projects/wiki",
					"componentPage": "WikiProject",
					"id": "highlights0201",
					"title": "'A11Y Wiki' Overview Page",
					"icon": "page",
					
				},
				{
					"location": "external",
					"id": "highlights0202",
					"title": "'A11Y Wiki' GitHub Repo",
					"url": "https://github.com/smendez92/wheelchairWiki",
					"icon": "code"
				},
				{
					"location": "external",
					"id": "highlights0203",
					"title": "'A11Y Wiki' Google Slides Presentation",
					"url": "https://docs.google.com/presentation/d/e/2PACX-1vSHgkq7e-YyAYJNcxFAidPSJn6Cho9bl-xoMKEzgYgUIz3cC0RQ8colsHKmRzDYNjA2iLB6hDlDOKXO/pub?start=false&loop=false&delayms=3000",
					"icon": "slides"
				},
				{
					"location": "external",
					"id": "highlights0204",
					"title": "'A11Y Wiki' Demo on Heroku",
					"url": "https://wheelchairtravelwiki.herokuapp.com",
					"icon": "website"
				}
			]
		},
		{
			"id": "highlights03",
			"title": "A Bodega",
			"description": "An experimental documentary; an asset-based look at health equity, made with ingredients from a bodega in Lawrence, MA.",
			"icon": "./assets/images/homepageIcons/homepage-icon-bodega.svg",
			"iconAlt": "'A Bodega' cartoon logo: a frying pan.",
			"projectPagePath": "/projects/bodega",
			"links": [
				{
					"location": "internal",
					"exactPath": "/projects/bodega",
					"componentPage": "BodegaProject",
					"id": "highlights0301",
					"title": "'A Bodega' Overview Page",
					"icon": "page"
				},
				{
					"location": "external",
					"id": "highlights0302",
					"title": "'A Bodega' Film on Vimeo",
					"url": "https://vimeo.com/91566613",
					"icon": "film"
				}
			]
		}
	],
	newsItems: [
		{
			"id": "news20171202",
			"lead": "2017 Dec",
			"body": "'By Foot: Busan and the Sea' screened at Chinh India Kids Film Festival in New Delhi, India."
		},
		{
			"id": "news20171201",
			"lead": "2017 Dec",
			"body": "'A Bodega' selected for inclusion in the National Academy of Medicine's Visualizing Health Equity project. The film was included in a pop-up gallery, and I was personally invited to speak at a panel event in Washington DC."
		},
		{
			"id": "news20171002",
			"lead": "2017 Oct",
			"body": "'By Foot: Busan and the Sea' won the Exceptional Artistry award for animation at the Official Latino Short Film Festival in New York City."
		},
		{
			"id": "news20171001",
			"lead": "2017 Oct",
			"body": "'10 Days in Saigon' was nominated for Best Travel Web Series and screened in Limassol, Cyprus, as part of the TRAVEL FilmFest."
		},
		{
			"id": "news20170901",
			"lead": "2017 Sep",
			"body": "'A Bodega' screened in three Chicago parks as part of the Chicago Onscreen program by the Chicago Park District."
		}
	],
	projectSections: [
		{
			"title": "ANIMATED FILMS",
			"id": "animation",
			"projects": [
				{
					"id": "animation01",
					"title": "No One Can Hear You",
					"description": "A mixed-media animation: the memories of Officer Hernández, an astronaut losing contact with her crewmates and drifting off into space.",
					"icon": "./assets/images/homepageIcons/homepage-icon-hernandez.svg",
					"iconAlt": "",
					"projectPagePath": "/projects/hernandez",
					"links": [
						{
							"location": "internal",
							"id": "animation0101",
							"exactPath": "/projects/hernandez",
							"componentPage": "HernandezProject",
							"title": "'No One Can Hear You' Overview Page",
							"icon": "page",
						},
						{
							"location": "external",
							"id": "animation0102",
							"title": "'No One Can Hear You' excerpt on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/233932687"
						}
					]
				},
				{
					"id": "animation02",
					"title": "By Foot: Busan and the Sea",
					"description": "An experimental documentary: a solo trip through Busan, South Korea.",
					"icon": "./assets/images/homepageIcons/homepage-icon-busan.svg",
					"iconAlt": "",
					"projectPagePath": "/projects/busan",
					"links": [
						{
							"location": "internal",
							"id": "animation0201",
							"exactPath": "/projects/busan",
							"componentPage": "BusanProject",
							"title": "'Busan' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "animation0202",
							"title": "'Busan' Trailer on Vimeo",
							"url": "https://vimeo.com/203944431",
							"icon": "video"
						}
					]
				},
				{
					"id": "animation03",
					"title": "Persefone's Breakfast",
					"description": "An experimental animation: Persephone's voice messages to Hades as she leaves the Underworld once and for all.",
					"icon": "./assets/images/homepageIcons/homepage-icon-breakfast.svg",
					"iconAlt": "",
					"projectPagePath": "/projects/breakfast",
					"links": [
						{
							"location": "internal",
							"id": "animation0301",
							"exactPath": "/projects/breakfast",
							"componentPage": "BreakfastProject",
							"title": "'Persefone's Breakfast' Overview Page",
							"icon": "page",
							
						},
						{
							"location": "external",
							"id": "animation0302",
							"title": "'Persefone's Breakfast' Film on Vimeo",
							"url": "http://www.vimeo.com/134973465",
							"icon": "film",
							
						}
					]
				},
				{
					"id": "animation04",
					"title": "How to Make Yuca Frita",
					"description": "An instructional animation: peel, chop, remove the stringy core, boil, fry, and eat.",
					"icon": "./assets/images/homepageIcons/homepage-icon-yuca.svg",
					"iconAlt": "",
					"projectPagePath": "/projects/yuca",
					"links": [
						{
							"location": "internal",
							"id": "animation0401",
							"exactPath": "/projects/yuca",
							"componentPage": "YucaProject",
							"title": "'Yuca' Overview Page",
							"icon": "page",
						},
						{
							"location": "external",
							"id": "animation0402",
							"title": "'Yuca' Film on Vimeo",
							"url": "http://www.vimeo.com/95826024",
							"icon": "film"
						}
					]
				},
				{
					"id": "animation05",
					"title":"After, After That",
					"icon":"./assets/images/homepageIcons/homepage-icon-after.svg",
					"iconAlt": "",
					"description":"An experimental documentary. A cross between two marks.",
					"projectPagePath": "/projects/after",
					"links":[
						{
							"location": "internal",
							"id": "animation0501",
							"exactPath": "/projects/after",
							"componentPage": "AfterProject",
							"title": "'After, After That' Overview Page",
							"icon": "page",
						},
						{
							"location": "external",
							"id": "animation0502",
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
					"id": "health01",
					"title": "Health for All",
					"icon": "./assets/images/homepageIcons/homepage-icon-nlm.svg",
					"iconAlt": "",
					"description": "Ongoing prototype development for a clinical trial informational tool under development in partnership with Chicago Public Libraries.",
					"projectPagePath": "/projects/health",
					"links": [
						{
							"location": "internal",
							"id": "health0101",
							"exactPath": "/projects/healthforall",
							"componentPage": "HealthforallProject",
							"title": "'Health for All' Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"id": "health02",
					"title": "Perceptions of Planned Parenthood",
					"icon": "./assets/images/homepageIcons/homepage-icon-pp.svg",
					"iconAlt": "",
					"description": "Qualitative study on medical providers' perceptions of Planned Parenthood in family planning referrals.",
					"projectPagePath": "/projects/plannedparenthood",
					"links": [
						{
							"location": "internal",
							"id": "health0201",
							"exactPath": "/projects/plannedparenthood",
							"componentPage": "PlannedParenthoodProject",
							"title": "Planned Parenthood Study Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"id": "health03",
					"title": "Social Media Use by Community-Based Organizations",
					"icon": "./assets/images/homepageIcons/homepage-icon-media.svg",
					"iconAlt": "",
					"description": "A content analysis of social media content by community-based organizations conducting health outreach.",
					"projectPagePath": "/projects/media",
					"links": [
						{
							"location": "internal",
							"id": "health0301",
							"exactPath": "/projects/media",
							"componentPage": "Project",
							"title": "Social Media Study Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "health0302",
							"title": "Research Article on BMC Public Healt",
							"icon": "website",
							"url": "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129"
						}
					]
				},
				{
					"id": "health04",
					"title": "Bodegas Saludables",
					"icon": "./assets/images/homepageIcons/homepage-icon-lmhtf.svg",
					"iconAlt": "",
					"description": "Video explaining a community research partner's public health program.",
					"projectPagePath": "/projects/lmhtf",
					"links": [
						{
							"location": "internal",
							"id": "health0401",
							"exactPath": "/projects/lmhtf",
							"componentPage": "LmhtfProject",
							"title": "'Bodegas Saludables' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "health0402",
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
					"id": "web01",
					"title": "AR-Tarot",
					"icon": "./assets/images/homepageIcons/homepage-icon-tarot.svg",
					"iconAlt": "",
					"description": "An online tarot reading utilizing A-frame to embed an augmented reality display.",
					"projectPagePath": "/projects/tarot",
					"links": [
						{
							"location": "internal",
							"id": "web0101",
							"exactPath": "/projects/tarot",
							"componentPage": "TarotProject",
							"title": "'AR-Tarot' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "web0102",
							"title": "'AR-Tarot' GitHub Repo",
							"icon": "code",
							"url": "https://github.com/smendez92/AR-tarot"
						},
						{
							"location": "external",
							"id": "web0103",
							"title": "'AR-Tarot' Demo on GitHub Pages",
							"icon": "website",
							"url": "https://smendez92.github.io/AR-tarot/index"
						}
					]
				},
				{
					"id": "web02",
					"title": "Everything But Apples",
					"icon": "./assets/images/homepageIcons/homepage-icon-apples.svg",
					"iconAlt": "",
					"description": "A multiplayer web-enabled party game; a social-digital version of Apples to Apples.",
					"projectPagePath": "/projects/apples",
					"links": [
						{
							"location": "internal",
							"id": "web0201",
							"exactPath": "/projects/apples",
							"componentPage": "ApplesProject",
							"title": "'Apples' Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "web0202",
							"title": "''Apples' GitHub Repo",
							"icon": "code",
							"url": "https://github.com/amgault/everythingButApples"
						},
						{
							"location": "external",
							"id": "web0203",
							"title": "'Apples' Demo on Heroku",
							"icon": "website",
							"url": "https://everythingbutapples.herokuapp.com"
						}
					]
				},
				{
					"id": "web03",
					"title": "GiftPitch Demo",
					"icon": "./assets/images/homepageIcons/homepage-icon-giftpitch.svg",
					"iconAlt": "",
					"description": "Front-end logic for a web app letting users take a personality quiz to help find the perfect gift for someone from Amazon, Etsy, or Ebay.",
					"projectPagePath": "/projects/giftpitch",
					"links": [
						{
							"location": "internal",
							"id": "web0301",
							"exactPath": "/projects/giftpitch",
							"componentPage": "GiftpitchProject",
							"title": "GiftPitch Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "web0302",
							"title": "GiftPitch Walkthrough Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/235300604"
						},
						{
							"location": "external",
							"id": "web0303",
							"title": "GiftPitch GitHub Repo",
							"icon": "code",
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
					"id": "video01",
					"title": "Spanish Community Center (SCC) Promo Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-joliet.svg",
					"iconAlt": "",
					"description": "A promotional video for the Spanish Community Center in Joliet.",
					"projectPagePath": "/projects/joliet",
					"links": [
						{
							"location": "internal",
							"id": "video0101",
							"exactPath": "/projects/joliet",
							"componentPage": "JolietProject",
							"title": "SCC Promo Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "video0102",
							"title": "SCC Promo Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/221224584"
						}
					]
				},
				{
					"id": "video02",
					"title": "Artemis I Fundraiser Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-artemis.svg",
					"iconAlt": "",
					"description": "A fundraising video for a high-altitude balloon launch by South Side Hackerspace: Chicago to document the 2017 solar eclipse.",
					"projectPagePath": "/projects/artemis",
					"links": [
						{
							"location": "internal",
							"id": "video0201",
							"exactPath": "/projects/artemis",
							"componentPage": "ArtemisProject",
							"title": "'Artemis I' Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "video0202",
							"title": "'Artemis I' Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/223448852"
						},
						{
							"location": "external",
							"id": "video0203",
							"title": "'Artemis I' Fundraising Campaign",
							"icon": "website",
							"url": "https://www.generosity.com/education-fundraising/experience-the-2017-eclipse-with-us-artemis-i"
						}
					]
				},
				{
					"id": "video03",
					"title": "WhyUEdu Info Series",
					"icon": "./assets/images/homepageIcons/homepage-icon-whyu.svg",
					"iconAlt": "",
					"description": "2 sets of informational videos & worksheets on aspects of the US college application process.",
					"projectPagePath": "/projects/whyu",
					"links": [
						{
							"location": "internal",
							"id": "video0301",
							"exactPath": "/projects/whyu",
							"componentPage": "WhyuProject",
							"title": "WhyUEdu Series Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "video0302",
							"title": "WhyUEdu Series Excerpt 1 on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/128663374/341f06632a"
						},
						{
							"location": "external",
							"id": "video0303",
							"title": "WhyUEdu Series Excerpt 2 on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/128663372/553014bdd5"
						},
						{
							"location": "external",
							"id": "video0304",
							"title": "WhyUEdu Series Worksheet PDF",
							"icon": "document",
							"url": "./assets/documents/Why+Essay+Planning+Worksheet.pdf"
						}
					]
				},
				{
					"id": "video04",
					"title": "'Teeny' Kickstarter Video",
					"icon": "./assets/images/homepageIcons/homepage-icon-teeny.svg",
					"iconAlt": "",
					"description": "A fundraising video for a Kickstarter campaign promoting a Taiwanese artisan's work.",
					"projectPagePath": "/projects/teeny",
					"links": [
						{
							"location": "internal",
							"id": "video0401",
							"exactPath": "/projects/teeny",
							"componentPage": "TeenyProject",
							"title": "'Teeny' Video Overview Page",
							"icon": "page"
						},
						{
							"location": "external",
							"id": "video0402",
							"title": "'Teeny' Fundraising Video on Vimeo",
							"icon": "video",
							"url": "http://www.vimeo.com/172990828"
						},
						{
							"location": "external",
							"id": "video0403",
							"title": "Teeny' Fundraising Campaign",
							"icon": "website",
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
					"id": "art01",
					"title": "Connect the Dots!",
					"icon": "./assets/images/homepageIcons/homepage-icon-dots.svg",
					"iconAlt": "",
					"description": "An interactive art installation taking place in a public bathroom.",
					"projectPagePath": "/projects/dots",
					"links": [
						{
							"location": "internal",
							"id": "art0101",
							"exactPath": "/projects/dots",
							"componentPage": "DotsProject",
							"title": "'Dots' Overview Page",
							"icon": "page"
						}
					]
				},
				{
					"id": "art02",
					"title": "Walks Through Cambridge",
					"icon": "./assets/images/homepageIcons/homepage-icon-walks.svg",
					"iconAlt": " ",
					"description": "A site-specific public art installation in Harvard Yard, produced for Harvard ARTS FIRST 2011.",
					"projectPagePath": "/projects/walks",
					"links": [
						{
							"location": "internal",
							"id": "art0201",
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
	blurbWidth: "90%",
	fontSizeLevel: 1,
	isHighContrast: false,
	isMobileView: true,
	mainPaddingLeftClassName: "padding-left-0em",
	navbarClassName: "float-left padding-left-0",
	portraitWidth: "50%",
	responsiveFloat: "none"
  };

  	componentWillMount(){
		this.updateIsMobileVariable();
	};
	componentDidMount() {
		window.addEventListener("resize", this.updateIsMobileVariable.bind(this));
	};
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateIsMobileVariable.bind(this));
	};

  updateIsMobileVariable(){
	if(window.innerWidth < 750) {
		this.setState({isMobileView: true, portraitWidth: "75%", blurbWidth: "90%", mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none"});
	}
	else {
		this.setState({isMobileView: false, portraitWidth: "40%", blurbWidth: "60%", mainPaddingLeftClassName: "padding-left-5em", responsiveFloat:"left"});
	}
  };

  render() {
    return (
		<div className="homepage-background-gradient">
			<header className={ "margin-auto padding-top-1em text-center width-85pc " + this.state.mainPaddingLeftClassName }>
					<img alt="Samuel Animates" src="./assets/images/branding/logo.svg" className="display-inline height-2em padding-left-p25em padding-right-p25em"/>
					<h1 className="display-inline padding-left-p25em padding-right-p25em">SAMUEL R. MENDEZ</h1>
			</header>
			<MenuBar
				navbarClassName = { this.state.navbarClassName }
			/>
			<main className={ "margin-auto max-width-45em width-85pc "  + this.state.mainPaddingLeftClassName }>
				<GenericFloatingSection>
					<div className="bg-rgb-251-251-251 color-black">
						<SheerWhiteContainer>
							<h2 className="text-center">ABOUT ME</h2>
						</SheerWhiteContainer>
						<ResponsiveCtoLFloat 
							width = { this.state.portraitWidth }
							float = { this.state.responsiveFloat }
						>
							<div className="font-Assistant padding-bottom-1em padding-left-20px padding-right-20px padding-top-1em">
								<div className="max-height-12em margin-auto text-center width-75pc">
									<img alt="" className="height-auto margin-auto max-height-12em max-width-100pc" src="./assets/images/branding/portrait.svg"></img>
								</div>
								<div className="font-Overpass font-size-p75em padding-T-1p5em">
									"{ this.state.aboutMeSection.quote }"
								</div>
							</div>
						</ResponsiveCtoLFloat>
						<ResponsiveCtoLFloat
							width= { this.state.blurbWidth }
							float = { this.state.responsiveFloat }
						>
								<div className="font-Assistant padding-bottom-1em padding-left-20px padding-right-20px padding-top-1em">
									<p className="padding-top-p5em padding-bottom-p5em">{ this.state.aboutMeSection.blurb }</p>
									<p className="padding-top-p5em padding-bottom-p5em"><span className="font-weight-600">{ this.state.aboutMeSection.detailsLead }:</span> { this.state.aboutMeSection.detailsBody }</p>
								</div>
						</ResponsiveCtoLFloat>
					<div className="border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 clear-both color-black font-Assistant height-100pc padding-top-1em">
						<div className="padding-bottom-p25em">
							<h3 className="text-center">PERSONAL LINKS</h3>
							<HomepageProjectLinksContainer
								links = { this.state.aboutMeSection.links }
							/>
						</div>	
					</div>
				</div>
				</GenericFloatingSection>
				<HomepageProjectsSection
					float = { this.state.responsiveFloat }	
					title = "HIGHLIGHTED PROJECTS"
					projects = { this.state.highlightsSection }
				/>
				<GenericFloatingSection>
					<SheerWhiteContainer>
						<h2 className="text-center">RECENT NEWS</h2>
					</SheerWhiteContainer>
					<div className="bg-rgb-251-251-251 border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 color-black font-Assistant height-100pc margin-auto padding-left-3em padding-right-3em padding-top-2em">
						<UnorderedBulletlessList
							listItems = { this.state.newsItems }
						/>
					</div>
				</GenericFloatingSection>
				{ this.state.projectSections.map(projectSection =>
					<HomepageProjectsSection
						float = { this.state.responsiveFloat }	
						title = { projectSection.title}
						projects = { projectSection.projects }
					/>
				)}
			</main>
		</div>
    );
  };
}

export default HomePage;

import React, { Component } from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import HomepageAboutMeSection from '../../components/HomepageAboutMeSection';
import HomepageProjectsSection from '../../components/HomepageProjectsSection';
import HomepageMediaSection from '../../components/HomepageMediaSection';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from '../../components/SheerWhiteContainer';

class HomePage extends Component {

	state = { 
		navbarClassName: "margin-auto margin-bottom-2em",
		navbarLinksClassName: "float-left font-size-p85em padding-left-0 text-center",
		navbarLinks: [{title:"About", id:"navBarLinkAbout"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Media", id:"navBarLinkMedia"},{title:"Animation", id:"navBarLinkAnimation"},{title:"Edu", id:"navBarLinkEdu"},{title:"Web", id:"navBarLinkWeb"},{title:"Video", id:"navBarLinkVideo"},{title:"Art", id:"navBarLinkArt"}]
	};

	projectData = { 
		aboutMeSection:{
			quote: "I could trace back about 80% of my humor to specific SpongeBob episodes.",
			paragraphs: [
				{
					id: "aboutMeParagraph01",
					lead: "In short",
					includesLink: false,
					body: "I make animations. I'm a community-based researcher. I do front end web development, with an eye on web accessibility. I see the privilege of having chances to gain these skills; I want to use these chances to open up more seats at the table."
				},
				{	
					id: "aboutMeParagraph02",
					lead: "Interests",
					includesLink: false,
					body: "community-based research, public health, digital documentary, visual art, nail polish."
				},
				{	
					id: "aboutMeParagraph03",
					lead: "Favorite song",
					includesLink: true,
					body: [
						{
							preLinkText: "Right now, it's ",
							linkIsInternalLink: false,
							linkText: `"XS"`,
							linkUrl: "https://www.youtube.com/watch?v=TO2c06p6m5w",
							postLinkText: " by Rina Sawayama.",
						}
					]
				}
			],
			links: [
				{
					"isInternalLink": false,
					"id": "aboutLink01",
					"text": "My CV as a Published Google Doc",
					"icon": "document",
					"path": "https://docs.google.com/document/d/e/2PACX-1vSMS4XleOQlHUDp5mbn00Z29u8Pbg3EhHyVDzDJag1cWMi6uTh6vCOnqk6BYG7L16BAlchdHuvuq5zb/pub"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink02",
					"text": "My Vimeo Profile",
					"icon": "video",
					"path": "https://www.vimeo.com/user15152945"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink03",
					"text": "My GitHub Profile",
					"icon": "code",
					"path": "https://github.com/smendez92"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink04",
					"text": "My LinkedIn Profile",
					"icon": "accountCircle",
					"path": "https://www.linkedin.com/in/samuel-r-mendez/"
				},
			]
		},
		highlightsSection: {
			id: "HIGHLIGHTS",
			projects:	[
				{
					"id": "highlights01",
					"title": "Abstract",
					"description": "A livestream performance of my master's thesis, on public health communication. (Emoji designed by OpenMoji. License: CC BY-SA 4.0)",
					"icon": "./assets/images/homepageIcons/homepage-icon-abstract.svg",
					"iconAlt": "'Abstract' logo: sparkle emoji.",
					"projectPagePath": "/projects/abstract",
					"links": [
						{
							"isInternalLink": false,
							"id": "highlights0101",
							"text": "'Abstract' Video on Vimeo",
							"path": "https://vimeo.com/410859161",
							"icon": "video"
						},
						{
							"isInternalLink": false,
							"id": "highlights0102",
							"text": "'Abstact' interactive script (note: a11y issues)",
							"path": "https://abstract-prod.herokuapp.com/",
							"icon": "website"
						},
						{
							"isInternalLink": false,
							"id": "highlights0103",
							"text": "'Abstract' script as a published Google Doc",
							"path": "https://docs.google.com/document/d/e/2PACX-1vR1ranb_nwblA8zJu8qqIkMSsS3PeQpSzXukuC5iEf6QTEI_ValdQZvYyTiMu_3nPS5ezJmMiT1mW9n/pub",
							"icon": "document"
						}
					]
				},
				{
					"id": "highlights02",
					"title": "HER Communication",
					"description": "A do-it-together publication of health equity.",
					"icon": "./assets/images/homepageIcons/homepage-icon-her.svg",
					"iconAlt": "'HER Communication' logo: triangles coming together to form a crystal.",
					"projectPagePath": "/projects/her",
					"links": [
						{
							"isInternalLink": false,
							"id": "highlights0202",
							"text": "'HER Communication' zine-journal",
							"path": "https://hercommunication.pubpub.org",
							"icon": "website"
						}
					]
				},
				{
					"id": "highlights03",
					"title": "UNFUNDABLE",
					"description": "A table-top card game that puts players in the role of academic health researchers.",
					"icon": "./assets/images/homepageIcons/homepage-icon-unfundable.svg",
					"iconAlt": "'UNFUNDABLE' logo: an overlapping function symbol and intersection symbol.",
					"projectPagePath": "/projects/unfundable",
					"links": [
						{
							"isInternalLink": false,
							"id": "highlights0302",
							"text": "'UNFUNDABLE' website",
							"path": "https://unfundable.fun",
							"icon": "website"
						}
					]
				}
				
			]
		},
		mediaSection:{
			paragraphs: [
				{	
					id: "mediaParagraph01",
					lead: "Podcast Interview",
					includesLink: true,
					body: [
						{
							preLinkText: "2020. Board Gaming with Education",
							linkIsInternalLink: false,
							linkText: `"Designing a Game for Academic Application and Appealing to Game Hobbyists"`,
							linkUrl: "https://player.fm/series/board-gaming-with-education/episode-97-designing-a-game-for-academic-application-and-appealing-to-a-game-hobbyists-feat-sam-mendez",
							postLinkText: ".",
						}
					]
				},
				{	
					id: "mediaParagraph02",
					lead: "Sundance VR",
					includesLink: true,
					body: [
						{
							preLinkText: "2020. IndieWire.",
							linkIsInternalLink: false,
							linkText: `"Sundance VR Tackled Climate Change With Groundbreaking New Projects"`,
							linkUrl: "https://www.indiewire.com/2020/02/sundance-2020-vr-climate-change-1202208386/",
							postLinkText: ".",
						}
					]
				},
				{	
					id: "mediaParagraph03",
					lead: "Social Media",
					includesLink: true,
					body: [
						{
							preLinkText: "2013. BMC Public Health.",
							linkIsInternalLink: false,
							linkText: `"Social media use by community-based organizations conducting health promotion: a content analysis"`,
							linkUrl: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129",
							postLinkText: ".",
						}
					]
				}
			],
		},
		projectSections: [
			{
				"title": "Animated Films",
				"id": "animationSection",
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
								"isInternalLink": false,
								"id": "animation0102",
								"text": "'No One Can Hear You' excerpt on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/233932687"
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
								"isInternalLink": false,
								"id": "animation0202",
								"text": "'Busan' Trailer on Vimeo",
								"path": "https://vimeo.com/203944431",
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
								"isInternalLink": false,
								"id": "animation0302",
								"text": "'Persefone's Breakfast' Film on Vimeo",
								"path": "http://www.vimeo.com/134973465",
								"icon": "film",
								
							}
						]
					},
					{
						"id": "animation04",
						"title": "A Bodega",
						"description": "An experimental documentary; an asset-based look at health equity, made with ingredients from a bodega in Lawrence, MA.",
						"icon": "./assets/images/homepageIcons/homepage-icon-bodega.svg",
						"iconAlt": "'A Bodega' cartoon logo: a frying pan.",
						"projectPagePath": "/projects/bodega",
						"links": [
							{
								"isInternalLink": false,
								"id": "animation0402",
								"text": "'A Bodega' Film on Vimeo",
								"path": "https://vimeo.com/91566613",
								"icon": "film"
							}
						]
					}
				]
			},
			{
				"title": "Education",
				"id": "eduSection",
				"projects": [
					{
						"id": "edu01",
						"title": "Health for All",
						"icon": "./assets/images/homepageIcons/homepage-icon-nlm.svg",
						"iconAlt": "",
						"description": "Clinical trial informational tool I did lo-fi prototying and user testing for.",
						"projectPagePath": "/projects/healthforall",
						"links": [
							{
								"isInternalLink": false,
								"id": "health0101",
								"text": "Health for All website",
								"icon": "website",
								"path": "https://healthforallproject.org/"
							}
						]
					},
				]
			},
			{
				"title": "Web Development",
				"id": "webSection",
				"projects": [
					{
						"id": "web01",
						"title": "Wheelchair Travel A11Y Wiki",
						"description": "Proof-of-Concept demo of a wheelchair travel accessibility (A11Y) wiki.",
						"icon": "./assets/images/homepageIcons/homepage-icon-wiki.svg",
						"iconAlt": "'A11Y Wiki' logo: a spinning gear/flower made up of geometric shapes.",
						"projectPagePath": "/projects/wiki",
						"links": [
							{
								"isInternalLink": false,
								"id": "web0102",
								"text": "'A11Y Wiki' GitHub Repo",
								"path": "https://github.com/smendez92/wheelchairWiki",
								"icon": "code"
							},
							{
								"isInternalLink": false,
								"id": "web0104",
								"text": "'A11Y Wiki' Demo on Heroku",
								"path": "https://wheelchairtravelwiki.herokuapp.com",
								"icon": "website"
							}
						]
					},
					{
						"id": "web02",
						"title": "AR-Tarot",
						"icon": "./assets/images/homepageIcons/homepage-icon-tarot.svg",
						"iconAlt": "",
						"description": "An online tarot reading utilizing A-frame to embed an augmented reality display.",
						"projectPagePath": "/projects/tarot",
						"links": [
							{
								"isInternalLink": false,
								"id": "web0202",
								"text": "'AR-Tarot' GitHub Repo",
								"icon": "code",
								"path": "https://github.com/smendez92/AR-tarot"
							},
							{
								"isInternalLink": false,
								"id": "web0203",
								"text": "'AR-Tarot' Demo on GitHub Pages",
								"icon": "website",
								"path": "https://smendez92.github.io/AR-tarot/index"
							}
						]
					}
				]
			},
			{
				"title": "Video",
				"id": "videoSection",
				"projects": [
					{
						"id": "video01",
						"title": "10 Days in Saigon",
						"description": "A 10-week web series documenting wheelchair travel in Ho Chi Minh City, Vietnam.",
						"icon": "./assets/images/homepageIcons/homepage-icon-saigon.svg",
						"iconAlt": "'10 Days' logo: three overlayed Accessible Icons, suggesting fast forward movement.",
						"projectPagePath": "/projects/saigon",
						"links": [
							{
								"isInternalLink": false,
								"id": "highlights0102",
								"text": "'10 Days' Trailer on Facebook",
								"icon": "video",
								"path": "https://www.facebook.com/wearemuui/videos/1834490626823232/"
							},
							{
								"isInternalLink": false,
								"id": "highlights0103",
								"text": "'10 Days' Google Map",
								"icon": "map",
								"path": "https://www.google.com/maps/d/viewer?mid=1msCQD_ab_Lz6mLz80wyu1qHXCBk&hl=en_US&ll=10.798291852220926%2C106.67387433398437&z=13"
							},
							{
								"isInternalLink": false,
								"id": "highlights0104",
								"text": "'10 Days' Article",
								"icon": "website",
								"path": "https://www.giantrobot.media/stories/2017/5/30/muui"
							}
						]
					},
					{
						"id": "video02",
						"title": "Spanish Community Center (SCC) Promo Video",
						"icon": "./assets/images/homepageIcons/homepage-icon-joliet.svg",
						"iconAlt": "",
						"description": "A promotional video for the Spanish Community Center in Joliet.",
						"projectPagePath": "/projects/joliet",
						"links": [
							{
								"isInternalLink": false,
								"id": "video0102",
								"text": "SCC Promo Video on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/221224584"
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
								"isInternalLink": false,
								"id": "video0302",
								"text": "WhyUEdu Series Excerpt 1 on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/128663374/341f06632a"
							},
							{
								"isInternalLink": false,
								"id": "video0303",
								"text": "WhyUEdu Series Excerpt 2 on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/128663372/553014bdd5"
							},
							{
								"isInternalLink": false,
								"id": "video0304",
								"text": "WhyUEdu Series Worksheet PDF",
								"icon": "document",
								"path": "./assets/documents/Why+Essay+Planning+Worksheet.pdf"
							}
						]
					},
					{
						"id": "video04",
						"title": "Bodegas Saludables",
						"icon": "./assets/images/homepageIcons/homepage-icon-lmhtf.svg",
						"iconAlt": "",
						"description": "Video explaining a community research partner's public health program.",
						"projectPagePath": "/projects/lmhtf",
						"links": [
							{
								"isInternalLink": false,
								"id": "health0402",
								"text": "'Bodegas Saludables'excerpt on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/231980215"
							}
						]
					}
				]
			},
			{
				"title": "Art In Person",
				"id": "artSection",
				"projects": [
					{
						"id": "art01",
						"title": "Weird Little Plays",
						"icon": "./assets/images/homepageIcons/homepage-icon-plays.svg",
						"iconAlt": "",
						"description": "Short plays in which I play myself.",
						"projectPagePath": "/projects/plays",
						"links": []
					},
					{
						"id": "art02",
						"title": "Connect the Dots!",
						"icon": "./assets/images/homepageIcons/homepage-icon-dots.svg",
						"iconAlt": "",
						"description": "An interactive art installation taking place in a public bathroom.",
						"projectPagePath": "/projects/dots",
						"links": []
					},
					{
						"id": "art03",
						"title": "Walks Through Cambridge",
						"icon": "./assets/images/homepageIcons/homepage-icon-walks.svg",
						"iconAlt": " ",
						"description": "A site-specific public art installation in Harvard Yard, produced for Harvard ARTS FIRST 2011.",
						"projectPagePath": "/projects/walks",
						"links": []
					}
				]
			}
		]
	};
	
	aboutSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	mediaSectionRef = React.createRef();
	navbarRef = React.createRef();
	animationSectionRef = React.createRef();
	eduSectionRef = React.createRef();
	webSectionRef = React.createRef();
	videoSectionRef = React.createRef();
	artSectionRef = React.createRef();
	projectSectionRefs = [this.animationSectionRef, this.eduSectionRef, this.webSectionRef, this.videoSectionRef, this.artSectionRef]

	componentDidMount() {
		document.title = "Samuel Animates";

	};

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAbout"){
			this.aboutSectionRef.current.scrollIntoView();
			this.aboutSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkMedia"){
			this.mediaSectionRef.current.scrollIntoView();
			this.mediaSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAnimation"){
			this.animationSectionRef.current.scrollIntoView();
			this.animationSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkEdu"){
			this.eduSectionRef.current.scrollIntoView();
			this.eduSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkWeb"){
			this.webSectionRef.current.scrollIntoView();
			this.webSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkVideo"){
			this.videoSectionRef.current.scrollIntoView();
			this.videoSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkArt"){
			this.artSectionRef.current.scrollIntoView();
			this.artSectionRef.current.focus();
		};
	}

  render() {
    return (
		<div className={ "homepage-color-scheme-" + this.props.colorSchemeSuffix }>
			{ this.props.isMobileView === false &&
				<MenuBar
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					isMobileView={ this.props.isMobileView }
				>
					<SamePageNavBar
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						handleNavLinkClick={ this.handleNavLinkClick }
						handleKeyPress={ this.handleKeyPress }
						navbarLinks={ this.state.navbarLinks }
					/>
				</MenuBar>
			}
			<div className={ "margin-auto max-width-50em width-85pc "  + this.props.mainPaddingLeftClassName }>
				<main>
					{ this.props.isMobileView === true &&
						<MenuBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							isMobileView={ this.props.isMobileView }
						>
							<SamePageNavBarMobile
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								navbarLinks={ this.state.navbarLinks }
								handleButtonClick={ this.handleButtonClick }
								handleNavLinkClick={ this.handleNavLinkClick }
								navbarRef={ this.navbarRef }
							>
								<SheerWhiteContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
									<p tabindex="0" className="font-weight-600 text-center" ref={ this.navbarRef }>Jump Down</p>
								</SheerWhiteContainer>
							</SamePageNavBarMobile>
						</MenuBarMobile>
					}
					<HomepageAboutMeSection
						blurbWidth={ this.props.blurbWidth }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						float={ this.props.responsiveFloat }
						isMobile={ this.props.isMobileView }
						quote={ this.projectData.aboutMeSection.quote }
						links={ this.projectData.aboutMeSection.links }
						materialIconFill={ this.props.materialIconFill }
						portraitWidth={ this.props.portraitWidth }
						paragraphs={ this.projectData.aboutMeSection.paragraphs }
						responsiveFloat={ this.props.responsiveFloat }
						ref={ this.aboutSectionRef }
					/>
					<HomepageProjectsSection
						id={ this.projectData.highlightsSection.id }
						float={ this.props.responsiveFloat }	
						title="Highlights"
						isMobile={ this.props.isMobileView }
						projects={ this.projectData.highlightsSection.projects }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						materialIconFill={ this.props.materialIconFill }
						ref={ this.highlightsSectionRef }
					/>
					<HomepageMediaSection
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						materialIconFill={ this.props.materialIconFill }
						paragraphs={ this.projectData.mediaSection.paragraphs }
						ref={ this.mediaSectionRef }
					/>
					{ this.projectData.projectSections.map((projectSection, index) =>
						<HomepageProjectsSection
							id={ projectSection.id }
							key={ projectSection.id }
							float={ this.props.responsiveFloat }	
							title={ projectSection.title }
							isMobile={ this.props.isMobileView }
							projects={ projectSection.projects }
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							materialIconFill={ this.props.materialIconFill }
							ref={ this.projectSectionRefs[index] }
						/>
					)}
				</main>
				<Footer
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					materialIconFill={ this.props.materialIconFill }
				/>
			</div>
		</div>
    );
  };
}

export default HomePage;

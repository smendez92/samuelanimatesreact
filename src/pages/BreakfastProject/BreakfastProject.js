import React, { Component } from 'react';
import "./BreakfastProject.css";
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class BreakfastProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	projectInfo = {
		title: "Persefone's Breakfast",
		synopsis:{
			mediaType: "video",
			blurb: "\"We're talking and you're listening.\" Voice messages from Persephone to Hades. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/134973465",
				title: "\"Persefone's' Breakfast\" full film on Vimeo."
			},
			year: "2012",
			specs: [
				{
					id: "persefoneSpecs01",
					lead: "Techniques",
					body: "live action video, 2D/3D digital animation, archival footage, & object animation."
				},
				{
					id: "persefoneSpecs02",
					lead: "Length",
					body: "06 min. 44 sec."
				}
			]
		},
		highlights: [
			{
				id: "persefoneHighlights01",
				lead: "Lessons learned",
				body: "I can make DIY animations out of my one-room apartment if I have to. And I shouldn't under-sell the power of a good color scheme."
			},
			{
				id: "persefoneHighlights01",
				lead: "Recognition",
				body: "Exceptional Artistry nomination, Official Latino Short Film Festival, New York, 2016. Finalist, Chicagoland Shorts Vol. 3."
			}
		],
		overview: [
			{
				id: "persefoneOverview01",
				lead: "Background",
				body: "I used this film to explore my own anger around the issue of food deserts. Food deserts block people from having fresh food. Food deserts block long-term health. Food deserts block connection points to people's food culture and traditions. When a person can't buy ingredients to cook their own people's food, they miss out on a chapter of their own story. I used other projects to highlight resources that minortizied communities built up for themselves. I used 'Persefone's Breakfast' to imagine what it would be like to opt out of oppressive systems entirely."
			},
			{
				id: "persefoneOverview02",
				lead: "Process",
				body: "I started by making models of the Underworld. First on paper. Then 3D digital models. I thought about the Underworld as a big city in the near future. Sinking under water. Centralized resources and decision-making. People cut off from each other. From there, I made short test animations. I imagined the media that might force a story onto Perséfone. I imagined the forces that might change her name to Persephone. I imagined the tools the Underworld would use to convince her she could never leave. Maps, newsreels, food, statistics, graphs. I cycled through phases of writing, animating, recording, editing, and getting feedback. Eventually, I figured out the film's final shape. I chose voice messages as the main format to drive the story. I wanted to make space for Persefone to control her story again. She completely dictates the pace of the film. She's free to leave the audience on hold while she cooks. She rejects the narrative the Underworld has forced on her. She uses food to leave it behind once and for all."
			},
			{
				id: "persefoneOverview03",
				lead: "Support",
				body: "I made my final city models with help from Ed Whetstone's Kludge City script. Thank you to Clare and Allison for your feedback on my writing. Thank you Dennis, Mateo, Brooke, Jasmine, Andrew, Rebecca, Lauren, and Ruth Lingford for your feedback on early film drafts. Applause for Cecilia Garcia's fantastic vocal performance! Thank you CTRL Sound Studios for your work. Thank you Andrés Ballesteros for the glitchy music."
			},
		]
		
	}
	synopsisSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	navbarRef = React.createRef();
	overviewSectionRef = React.createRef();

	componentWillMount(){
		this.updateIsMobileVariable();
	};
	componentDidMount() {
		window.addEventListener("resize", this.updateIsMobileVariable.bind(this));
	};
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateIsMobileVariable.bind(this));
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "fontSizeToggle"){
			this.handleFontSizeToggleButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "contrastToggle"){
			this.handleContrastToggleButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "scrollToTop"){
			this.handleScrollToTopButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleContrastToggleButtonClick = () =>{
		if (this.state.isHighContrast === true){
			this.setState({isHighContrast: false,colorSchemeSuffix: "default", materialIconFill: "rgb(3,3,3)"});
		}
		else{
			this.setState({isHighContrast: true,colorSchemeSuffix: "highContrast", materialIconFill: "rgb(251,251,251)"});
		}
	};

	handleFontSizeToggleButtonClick = () =>{	
		if (this.state.fontSizeLevel === 1){
			this.setState({fontSizeLevel: 1.5}, this.updateIsMobileVariable);
			document.body.style.fontSize ="1.5em";
			
		}
		else if (this.state.fontSizeLevel === 1.5){
			this.setState({fontSizeLevel: 1.75}, this.updateIsMobileVariable);
			document.body.style.fontSize = "1.75em";
		}
		else if (this.state.fontSizeLevel === 1.75){
			this.setState({fontSizeLevel: 2}, this.updateIsMobileVariable);
			document.body.style.fontSize = "2em";
		}
		else {
			this.setState({fontSizeLevel: 1}, this.updateIsMobileVariable);
			document.body.style.fontSize = "1em";
		}
	};

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkSynopsis"){
			this.synopsisSectionRef.current.scrollIntoView();
			this.synopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkOverview"){
			this.overviewSectionRef.current.scrollIntoView();
			this.overviewSectionRef.current.focus();
		};
	}

	handleScrollToTopButtonClick = () =>{
		this.navbarRef.current.scrollIntoView();
		this.navbarRef.current.focus();
	};


	updateIsMobileVariable = () =>{
		if(window.innerWidth < 750) {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else if(this.state.fontSizeLevel > 1.0) {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else {
			this.setState({isMobileView: false, mainPaddingLeftClassName: "padding-left-6p5em", responsiveFloat:"left", responsiveWidth: "50%"});
		}
	};

	render() {
		return (
			<div className={ "clearfix font-Assistant filmProjectPage-color-scheme-" + this.state.colorSchemeSuffix }>
				<Header
					mainPaddingLeftClassName = { this.state.mainPaddingLeftClassName }
					title = { this.projectInfo.title }
					handleButtonClick = { this.handleButtonClick }
					colorSchemeSuffix = { this.state.colorSchemeSuffix }
				/>
				{ this.state.isMobileView === false &&
					<MenuBar
						navbarLinks={ this.state.navbarLinks }
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						isMobileView={ this.state.isMobileView }
					>
						<SamePageNavBar
							colorSchemeSuffix={ this.state.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.state.navbarLinks }
						/>
						<NewPageNavBar
							colorSchemeSuffix={ this.state.colorSchemeSuffix }
						/>
					</MenuBar>
				}
				{ this.state.isMobileView === true &&
					<div className="margin-auto max-width-60em width-90pc">
						<MenuBarMobile>
							<SamePageNavBarMobile
								colorSchemeSuffix={ this.state.colorSchemeSuffix }
								navbarLinks={ this.state.navbarLinks }
								handleButtonClick={ this.handleButtonClick }
								handleNavLinkClick={ this.handleNavLinkClick }
								navbarRef={ this.navbarRef }
							>
								<SheerWhiteContainer colorSchemeSuffix={ this.state.colorSchemeSuffix }>
									<p tabindex="0" className="font-weight-600 text-center" ref={ this.navbarRef }>Jump Down</p>
								</SheerWhiteContainer>	
							</SamePageNavBarMobile>
							<NewPageNavBarMobile
								colorSchemeSuffix={ this.state.colorSchemeSuffix }
							/>
						</MenuBarMobile>
					</div>
				}
				<main className={ "margin-auto max-width-60em width-90pc "  + this.state.mainPaddingLeftClassName }>
					<ProjectPageMainSections
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						float={ this.state.responsiveFloat }
						isMobile={ this.state.isMobileView }
						projectInfo={ this.projectInfo }
						width={ this.state.responsiveWidth }
						synopsisSectionRef={ this.synopsisSectionRef }
						highlightsSectionRef={ this.highlightsSectionRef }
						overviewSectionRef={ this.overviewSectionRef }
					/>
				</main>
			</div>
		);
  	}
}

export default BreakfastProject;
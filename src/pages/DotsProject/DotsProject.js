import React, { Component } from 'react';
import "./DotsProject.css";
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class DotsProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1.15,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	projectInfo = {
		title: "Connect the Dots!",
		synopsis:{
			mediaType: "photo",
			blurb: "Site-specific art installation. Location: 2 public bathrooms in Harvard College housing.",
			embed: {
				src: "../assets/images/projectPhotos/dots.jpg",
				alt: "A penguin themed connect-the-dot poster hung on the wall of a public bathroom."
			},
			year: "2013",
			specs: [
				{
					id: "dotsSpecs01",
					lead: "Role",
					body: "Director, editor, and project manager."
				},
				{
					id: "dotsSpecs02",
					lead: "Materials",
					body: "Paper, pens, tape, and ribbon."
				}
			]
		},
		highlights: [
			{
				id: "dotsHighlights01",
				lead: "Lessons Learned",
				body: "Interaction can create fun surprises, even in a familiar space."
			},
			{
				id: "dotsHighlights02",
				lead: "Support",
				body: "This project received funding from the General Education program at Harvard University and logistic support from the Quincy House dorm."
			}
		],
		overview: [
			{
				id: "dotsOverview01",
				lead: "Process",
				body: "I designed a connect-the-dots banner to match the penguin mascot theme of Harvard's Quincy House. I printed the posters and hung them in two Quincy House public bathrooms. I attached pens to the paper towel dispenser. Anonymous classmates filled in the posters over the next 2 weeks. "
			}
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
		if (this.state.fontSizeLevel === 1.15){
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
			this.setState({fontSizeLevel: 1.15}, this.updateIsMobileVariable);
			document.body.style.fontSize = "1.15em";
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
			<div className={ "clearfix font-Assistant artProjectPage-color-scheme-" + this.state.colorSchemeSuffix }>
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
									<p tabIndex="0" className="font-weight-600 text-center" ref={ this.navbarRef }>Jump Down</p>
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

export default DotsProject;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ProjectsPageSkeleton.css";
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

import DotsProject from "../DotsProject";
import BreakfastProject from "../BreakfastProject";
import HernandezProject from "../HernandezProject";

class ProjectsPageSkeleton extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
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
				<Router>
					<div>
					<ul>
						<li>
						<Link to="/projectsTest/breakfast">Breakfast</Link>
						</li>
						<li>
						<Link to="/projectsTest/hernandez">Hernandez</Link>
						</li>
						<li>
						<Link to="/projectsTest/dots">Dots</Link>
						</li>
					</ul>
					<hr />
					<Route exact path="/projectsTest/breakfast" component={BreakfastProject} />
					<Route path="/projectsTest/hernandez" component={HernandezProject} />
					<Route path="/projectsTest/dots" component={DotsProject} />
					</div>
				</Router>
			</div>
		);
  	}
}

export default ProjectsPageSkeleton;
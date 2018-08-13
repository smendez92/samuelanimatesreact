import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ProjectsPageSkeleton.css";
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import GenericFloatingSection from '../../components/GenericFloatingSection';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import AfterProject from "../../pages/AfterProject";
import ApplesProject from "../../pages/ApplesProject";
import ArtemisProject from "../../pages/ArtemisProject";
import BodegaProject from "../../pages/BodegaProject";
import BreakfastProject from "../../pages/BreakfastProject";
import BusanProject from "../../pages/BusanProject";
import DotsProject from "../../pages/DotsProject";
import GiftpitchProject from "../../pages/GiftpitchProject";
import HealthforallProject from "../../pages/HealthforallProject";
import HernandezProject from "../../pages/HernandezProject";
import JolietProject from "../../pages/JolietProject";
import LmhtfProject from "../../pages/LmhtfProject";
import MediaProject from "../../pages/MediaProject";
import PlannedparenthoodProject from "../../pages/PlannedparenthoodProject";
import SaigonProject from "../../pages/SaigonProject";
import TarotProject from "../../pages/TarotProject";
import TeenyProject from "../../pages/TeenyProject";
import WalksProject from "../../pages/WalksProject";
import WhyuProject from "../../pages/WhyuProject";
import WikiProject from "../../pages/WikiProject";
import YucaProject from "../../pages/YucaProject";

class ProjectsPageSkeleton extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: "14pt",
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	synopsisSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	headerRef = React.createRef();
	overviewSectionRef = React.createRef();

	componentWillMount() {
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
		if (this.state.fontSizeLevel === "14pt"){
			this.setState({fontSizeLevel: "16pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize ="16pt";
			
		}
		else if (this.state.fontSizeLevel === "16pt"){
			this.setState({fontSizeLevel: "20pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "20pt";
		}
		else if (this.state.fontSizeLevel === "20pt"){
			this.setState({fontSizeLevel: "24pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "24pt";
		}
		else {
			this.setState({fontSizeLevel: "14pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "14pt";
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
		this.headerRef.current.scrollIntoView();
		this.headerRef.current.focus();
	};


	updateIsMobileVariable = () =>{
		console.log("we out here");
		if(window.innerWidth < 800) {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else if(this.state.fontSizeLevel != "14pt") {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else {
			this.setState({isMobileView: false, mainPaddingLeftClassName: "padding-left-6p5em", responsiveFloat:"left", responsiveWidth: "50%"});
		}
	};

	render() {
		return (
			<div className={ "clearfix font-Assistant projectPage-color-scheme-" + this.state.colorSchemeSuffix }>
				<Header
					mainPaddingLeftClassName={ this.state.mainPaddingLeftClassName }
					handleButtonClick={ this.handleButtonClick }
					colorSchemeSuffix={ this.state.colorSchemeSuffix }
					headerRef={this.headerRef}
				/>
				{ this.state.isMobileView === false &&
					<MenuBar
						navbarLinks={ this.state.navbarLinks }
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						isMobileView={ this.state.isMobileView }
					>
						<NewPageNavBar
							colorSchemeSuffix={ this.state.colorSchemeSuffix }
						/>
					</MenuBar>
				}
				{ this.state.isMobileView === true &&
					<div className="margin-auto max-width-60em width-90pc">
						<MenuBarMobile>
							<NewPageNavBarMobile
								colorSchemeSuffix={ this.state.colorSchemeSuffix }
							/>
						</MenuBarMobile>
					</div>
				}
				<main className={"margin-auto max-width-60em width-90pc " + this.state.mainPaddingLeftClassName}>
					<Router>
						<GenericFloatingSection
							colorSchemeSuffix={this.state.colorSchemeSuffix}
						>
							<Route exact path='/projects/after' component={AfterProject}/>
							<Route exact path='/projects/apples' component={ApplesProject}/>
							<Route exact path='/projects/artemis' component={ArtemisProject}/>
							<Route exact path='/projects/bodega' component={BodegaProject}/>
							<Route exact path='/projects/breakfast' component={BreakfastProject}/>
							<Route exact path='/projects/busan' component={BusanProject}/>
							<Route exact path='/projects/dots' component={DotsProject}/>
							<Route exact path='/projects/giftpitch' component={GiftpitchProject}/>
							<Route exact path='/projects/healthforall' component={HealthforallProject}/>
							<Route exact path='/projects/hernandez' component={HernandezProject}/>
							<Route exact path='/projects/joliet' component={JolietProject}/>
							<Route exact path='/projects/lmhtf' component={LmhtfProject}/>
							<Route exact path='/projects/media' component={MediaProject}/>
							<Route exact path='/projects/plannedparenthood' component={PlannedparenthoodProject}/>
							<Route exact path='/projects' component={ProjectsPageSkeleton}/>
							<Route exact path='/projects/saigon' component={SaigonProject}/>
							<Route exact path='/projects/tarot' render={props => (
								<TarotProject
									colorSchemeNameRoot="webProjectPage-color-scheme-"
									colorSchemeSuffix={this.state.colorSchemeSuffix}
									fontSizeLevel={this.state.fontSizeLevel}
									isMobileView={this.state.isMobileView}
									responsiveFloat={this.state.responsiveFloat}
									responsiveWidth={this.state.responsiveWidth}
								/>
							)}/>
							<Route exact path='/projects/tarots' component={TarotProject}/>
							<Route exact path='/projects/teeny' component={TeenyProject}/>
							<Route exact path='/projects/walks' component={WalksProject}/>
							<Route exact path='/projects/whyu' component={WhyuProject}/>
							<Route exact path='/projects/wiki' component={WikiProject}/>
							<Route exact path='/projects/yuca' component={YucaProject}/>
						</GenericFloatingSection>
					</Router>
				</main>
				{ this.state.isMobileView === true &&
					<div className="bottom-0 position-fixed right-0 width-3em">
						<ButtonContainer colorSchemeSuffix = { this.state.colorSchemeSuffix }>
							<Button
								buttonType="scrollToTop"
								colorSchemeSuffix={ this.state.colorSchemeSuffix }
								onClickFunction={ this.handleButtonClick }
								text="Top"
								tabIndex="0"
							/> 
						</ButtonContainer>
					</div>
				}
			</div>
		);
  	}
}

export default ProjectsPageSkeleton;
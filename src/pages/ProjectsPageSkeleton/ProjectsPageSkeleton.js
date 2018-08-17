import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./ProjectsPageSkeleton.css";
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import GenericFloatingSection from '../../components/GenericFloatingSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
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
		doNotTrack: true,
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
		
		//The following "Do Not Track" request check logic is adapted from Corbin Davenport's example at https://dev.to/corbindavenport/how-to-correctly-check-for-do-not-track-with-javascript-135d
		if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
			if (window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.doNotTrack === "1" || navigator.msDoNotTrack === "1") {
				this.setState({doNotTrack:true});
			} else {
				this.setState({doNotTrack:false});
			}
		} else {
			this.setState({doNotTrack:false});
		}
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
		if(window.innerWidth < 800) {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else if(this.state.fontSizeLevel !== "14pt") {
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
				<div className={"margin-auto max-width-60em width-90pc " + this.state.mainPaddingLeftClassName}>
					<main>
						<Router>
							<GenericFloatingSection
								colorSchemeSuffix={ this.state.colorSchemeSuffix }
							>
								<Route exact path='/projects/after' render={props => (
									<AfterProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								
								<Route exact path='/projects/apples' render={props => (
									<ApplesProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/artemis' render={props => (
									<ArtemisProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/bodega' render={props => (
									<BodegaProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/breakfast' render={props => (
									<BreakfastProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/busan' render={props => (
									<BusanProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/dots' render={props => (
									<DotsProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/giftpitch' render={props => (
									<GiftpitchProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/healthforall' render={props => (
									<HealthforallProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/hernandez' render={props => (
									<HernandezProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/joliet' render={props => (
									<JolietProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/lmhtf' render={props => (
									<LmhtfProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/media' render={props => (
									<MediaProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/plannedparenthood' render={props => (
									<PlannedparenthoodProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/saigon' render={props => (
									<SaigonProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/tarot' render={props => (
									<TarotProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/teeny' render={props => (
									<TeenyProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/walks' render={props => (
									<WalksProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/whyu' render={props => (
									<WhyuProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
								<Route exact path='/projects/wiki' component={WikiProject}/>
								<Route exact path='/projects/yuca' render={props => (
									<YucaProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.state.colorSchemeSuffix }
										doNotTrack={ this.state.doNotTrack }
										fontSizeLevel={ this.state.fontSizeLevel }
										isMobileView={ this.state.isMobileView }
										responsiveFloat={ this.state.responsiveFloat }
										responsiveWidth={this.state.responsiveWidth}
									/>
								)}/>
							</GenericFloatingSection>
						</Router>
					</main>
					<Footer
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
					/>
				</div>
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
import React, { Component } from 'react';
import "./HernandezProject.css";
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from "../../components/SheerWhiteContainer";
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class HernandezProject extends Component {
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
		title: "No One Can Hear You",
		synopsis:{
			mediaType: "video",
			blurb: "Officer Hernández's life flashes before her eyes as she drifts off into space. Sneak peek snippet below.",
			embed: {
				url: "https://player.vimeo.com/video/55657740",
				title: "'No One Can Hear You' snippet on Vimeo."
			},
			year: "In-progress",
			specs: [
				{
					id: "hernandezSpecs01",
					lead: "Techniques",
					body: "live action video, hand drawn animation, found footage, 2D digital animation."
				},
				{
					id: "hernandezSpecs02",
					lead: "Length",
					body: "Around 6 minutes, probably."
				}
			]
		},
		highlights: [
			{
				id: "hernandezHighlights01",
				lead: "Lessons learned",
				body: "Video editing takes on some qualities of animation. If I think about video editing like animation, I can work with it frame by frame. I can use this to focus in on motion and color in nonfiction work."
			}
		],
		overview: [
			{
				id: "hernandezOverview02",
				lead: "Progress",
				body: "I started off by reaching out through personal contacts and listservs to find people with tattoos/scars that had a story behind them. I ended up interviewing 3 people on camera and making several trips to a tattoo parlor to film the tattoo process, as well as an interview with a tattoo artist. After transcribing the interviews and putting together multiple combinations of the footage, I discovered the final format of this film. I was interested in the similarities of two subjects' verbal storytelling, as well as some of the common themes in their vastly different stories. I started with sound editing on these two interviews. Then, I eited the video to underscore the features of the marks that the interviewees focused on. This was important in documenting these stories, in which the physical marks played a narrative role where theinterviewees couldn't rely on spoken words alone."
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

export default HernandezProject;
import React, { Component } from 'react';
import "./AfterProject.css";
import Header from '../../components/Header';
import ProjectPageSynopsis from '../../components/ProjectPageSynopsis';
import ProjectPageHighlights from '../../components/ProjectPageHighlights';
import ProjectPageOverview from '../../components/ProjectPageOverview';

class AfterProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%"
	}

	projectInfo = {
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/55657740",
				title: "'After, After That' full film on Vimeo."
			},
			year: "2012",
			specs: [
				{
					id: "afterAfterSpecs01",
					lead: "Techniques",
					body: "live action video, experimental animation"
				},
				{
					id: "afterAfterSpecs02",
					lead: "Length",
					body: "04 min. 16 sec."
				}
			]
		},
		highlights: [
			{
				id: "afterAfterHighlights01",
				lead: "Lessons learned",
				body: "Video editing takes on some qualities of animation. If I think about video editing like animation, I can work with it frame by frame. I can use this to focus in on motion and color in nonfiction work."
			}
		],
		overview: [
			{
				id: "afterAfterOVerview01",
				lead: "Background",
				body: "This film was inspired by animated documentaries like Chris Landreth's 'Ryan' and Jonathon Hodgson's 'Feeling My Way'."
			},
			{
				id: "afterAfterOVerview02",
				lead: "Process",
				body: "I started off by reaching out through personal contacts and listservs to find people with tattoos/scars that had a story behind them. I ended up interviewing 3 people on camera and making several trips to a tattoo parlor to film the tattoo process, as well as an interview with a tattoo artist. After transcribing the interviews and putting together multiple combinations of the footage, I discovered the final format of this film. I was interested in the similarities of two subjects' verbal storytelling, as well as some of the common themes in their vastly different stories. I started with sound editing on these two interviews. Then, I eited the video to underscore the features of the marks that the interviewees focused on. This was important in documenting these stories, in which the physical marks played a narrative role where theinterviewees couldn't rely on spoken words alone."
			}
		]
		
	}

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
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAbout"){
			this.aboutSectionRef.current.scrollIntoView();
			this.aboutSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkNews"){
			this.newsSectionRef.current.scrollIntoView();
			this.newsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAnimation"){
			this.animationSectionRef.current.scrollIntoView();
			this.animationSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHealth"){
			this.healthSectionRef.current.scrollIntoView();
			this.healthSectionRef.current.focus();
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
			<div className={ "clearfix font-Assistant videoProjectPage-color-scheme-" + this.state.colorSchemeSuffix }>
				<Header
					mainPaddingLeftClassName = { this.state.mainPaddingLeftClassName }
					title = "After, After That"
					handleButtonClick = { this.handleButtonClick }
					colorSchemeSuffix = { this.state.colorSchemeSuffix }
				/>
				<main className={ "margin-auto max-width-60em width-90pc "  + this.state.mainPaddingLeftClassName }>
					<ProjectPageSynopsis
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						float={ this.state.responsiveFloat }
						isMobile={ this.state.isMobileView }
						synopsis={ this.projectInfo.synopsis }
						width={ this.state.responsiveWidth }
					/>
					<ProjectPageHighlights
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						float={ this.state.responsiveFloat }
						highlights={ this.projectInfo.highlights }
						isMobile={ this.state.isMobileView }
						synopsis={ this.projectInfo.synopsis }
						width={ this.state.responsiveWidth }
					/>
					<ProjectPageOverview
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						overview={ this.projectInfo.overview }
					/>
				</main>
			</div>
		);
  	}
}

export default AfterProject;
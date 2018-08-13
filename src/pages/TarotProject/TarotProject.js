import React, { Component } from 'react';
import "./TarotProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class TarotProject extends Component {
	projectInfo = {
		title: "AR-Tarot",
		synopsis:{
			mediaType: "photo",
			blurb: "A web app ",
			embed: {
				src: "../assets/images/projectPhotos/tarot.gif",
				alt: "An animated gif showcasing a tarot reading hovering above a placemarker in augmented reality."
			},
			year: "2018",
			specs: [
				{
					id: "artarotSpecs01",
					lead: "",
					body: "A-frame, "
				},
				{
					id: "artarotSpecs02",
					lead: "Composition",
					body: "4 videos and 5 worksheets in simplified Chinese."
				}
			]
		},
		highlights: [
			{
				id: "artarotHighlights01",
				lead: "Goal",
				body: "Create resources to help Chinese high school students in the US college application process. Create material that could double as promotion for Dipont Education Management's online pilot program, 'WhyUEdu'."
			},
			{
				id: "artarotHighlights02",
				lead: "Outcome",
				body: "2 distinct sets of video and text resources about US college application essays and interviews.The videos received over 36,000 views on the QQ Video mobile platform."
			}
		],
		overview: [
			{
				id: "artarotOverview02",
				lead: "Process",
				body: "First, I interviewed the company's college counselors. I wanted to see what common pitfalls were in the US college application process. Then, I narrowed the scope of the project down to 2 topics that could be covered in short videos and worksheets. I decided to create 2 videos about interviews. One was about self-introductions in video interviews. The other was about common interview mistakes to avoid. I also decided to make 2 videos about admissions essays. One was a counselor critiquing an example essay filled with common mistakes. The other showed viewers how to use info from a college website write about the school's 'fit' for them. All 4 of these videos came with links to related worksheets to help draw people to the WhyUEdu website. I led a team of 6 to complete this project. Together, we did background research, wrote scripts, made subtitles, and made worksheets. I personally filmed and edited the videos."
			}
		]
		
	}

	artarotNavbarLinks = [{title:"Synopsis", id:"artarotNavBarLinkSynopsis"},{title:"Highlights", id:"artarotNavBarLinkHighlights"},{title:"Overview", id:"artarotNavBarLinkOverview"}];
	artarotSynopsisSectionRef = React.createRef();
	artarotHighlightsSectionRef = React.createRef();
	artarotNavbarRef = React.createRef();
	artarotOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "AR-Tarot Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkSynopsis"){
			this.artarotSynopsisSectionRef.current.scrollIntoView();
			this.artarotSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkHighlights"){
			this.artarotHighlightsSectionRef.current.scrollIntoView();
			this.artarotHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkOverview"){
			this.artarotOverviewSectionRef.current.scrollIntoView();
			this.artarotOverviewSectionRef.current.focus();
		};
	}



	render() {
		return (
			<div className={ "clearfix " + this.props.colorSchemeNameRoot + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<div className="font-Overpass position-fixed left-0">
						<SamePageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.artarotNavbarLinks }
						/>	
					</div>
				}
				<h1 className="padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center">AR-Tarot</h1>
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.artarotNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.artarotHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.artarotOverviewSectionRef }
					synopsisSectionRef={ this.artarotSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default TarotProject;
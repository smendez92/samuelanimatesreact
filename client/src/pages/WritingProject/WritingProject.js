import React, { Component } from 'react';
import "./WritingProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class WritingProject extends Component {
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
		title: "WhyUEdu Info Series",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/128663374",
				title: "WhyUEdu informational series excerpt on Vimeo."
			},
			year: "2014",
			specs: [
				{
					id: "writingSpecs01",
					lead: "Role",
					body: "Director, editor, and project manager."
				},
				{
					id: "writingSpecs02",
					lead: "Specs",
					body: "4 videos and 5 worksheets in simplified Chinese."
				}
			]
		},
		highlights: [
			{
				id: "writingHighlights01",
				lead: "Goal",
				body: "Create resources to help Chinese high school students in the US college application process. Create material that could double as promotion for Dipont Education Management's online pilot program, 'WhyUEdu'."
			},
			{
				id: "writingHighlights02",
				lead: "Outcome",
				body: "2 distinct sets of video and text resources about US college application essays and interviews.The videos received over 36,000 views on the QQ Video mobile platform."
			}
		],
		overview: [
			{
				id: "writingOverview02",
				lead: "Process",
				body: "First, I interviewed the company's college counselors. I wanted to see what common pitfalls were in the US college application process. Then, I narrowed the scope of the project down to 2 topics that could be covered in short videos and worksheets. I decided to create 2 videos about interviews. One was about self-introductions in video interviews. The other was about common interview mistakes to avoid. I also decided to make 2 videos about admissions essays. One was a counselor critiquing an example essay filled with common mistakes. The other showed viewers how to use info from a college website write about the school's 'fit' for them. All 4 of these videos came with links to related worksheets to help draw people to the WhyUEdu website. I led a team of 6 to complete this project. Together, we did background research, wrote scripts, made subtitles, and made worksheets. I personally filmed and edited the videos."
			}
		]
		
	}
	writingNavbarLinks = [{title:"Synopsis", id:"writingNavBarLinkSynopsis"},{title:"Highlights", id:"writingNavBarLinkHighlights"},{title:"Overview", id:"writingNavBarLinkOverview"}];
	writingSynopsisSectionRef = React.createRef();
	writingHighlightsSectionRef = React.createRef();
	writingNavbarRef = React.createRef();
	writingOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Writing Projects Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkSynopsis"){
			this.writingSynopsisSectionRef.current.scrollIntoView();
			this.writingSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkHighlights"){
			this.writingHighlightsSectionRef.current.scrollIntoView();
			this.writingHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkOverview"){
			this.writingOverviewSectionRef.current.scrollIntoView();
			this.writingOverviewSectionRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ this.props.colorSchemeNameRoot + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<div className="font-Overpass position-fixed left-0">
						<SamePageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.writingNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.writingNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.writingHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.writingOverviewSectionRef }
					synopsisSectionRef={ this.writingSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default WritingProject;
import React, { Component } from 'react';
import "./WritingProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import PlaysAndWritingsContainer from '../../components/PlaysAndWritingsContainer';
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
		title: "Writings",
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
				body: "I write to share my work with different audiences. Sometimes I write to share my research with other academics. Sometimes I write for other artists."
			},
			{
				id: "writingHighlights02",
				lead: "Outcome",
				body: "So far I've published my work in academic journals and arts websites."
			}
		],
		overview: [
			{
				id: "writingOverview02",
				lead: "Process",
				body: "Honestly, writing is still a painful process for me. But it's getting better every time I try. I try to get feedback early and often. Sometimes that works better than others. I outline heavily and slowly fill it in. I constantly move paragraphs around. I switch between structural edits and changes in wording. At the and I try to simplify my language as best I can. Sometimes that works better than others."
			}
		]
		
	}
	writingNavbarLinks = [{title:"Synopsis", id:"writingNavBarLinkSynopsis"},{title:"Highlights", id:"writingNavBarLinkHighlights"},{title:"Overview", id:"writingNavBarLinkOverview"},{title:"The Writings", id:"writingNavBarLinkWritingsContainer"}];
	writingSynopsisSectionRef = React.createRef();
	writingHighlightsSectionRef = React.createRef();
	writingNavbarRef = React.createRef();
	writingOverviewSectionRef = React.createRef();
	writingWritingsContainerRef = React.createRef();

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
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkWritingsContainer"){
			this.writingWritingsContainerRef.current.scrollIntoView();
			this.writingWritingsContainerRef.current.focus();
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
				<div className="display-flex flex-direction-column">
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
					<PlaysAndWritingsContainer
						ref={ this.writingWritingsContainerRef }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						title={ "Writings" }
						lede={ "writing" }
					>
						<div className="display-flex flex-direction-column padding-bottom-p25em padding-left-p5em padding-right-p5em padding-top-p25em">
							<ul className="list-style-square padding-left-1em">
								<li>
									A
								</li>
								<li>
									B
								</li>
							</ul>
						</div>
					</PlaysAndWritingsContainer>
				</div>				
			</div>
		);
  	}
}

export default WritingProject;
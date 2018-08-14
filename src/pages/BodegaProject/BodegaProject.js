import React, { Component } from 'react';
import "./BodegaProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';

class BodegaProject extends Component {

	projectInfo = {
		title: "How to Make bodega Frita",
		synopsis:{
			mediaType: "video",
			blurb: "A how-to animation. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/95826023",
				title: "'How to Make bodega Frita' full film on Vimeo."
			},
			year: "2014",
			specs: [
				{
					id: "bodegaSpecs01",
					lead: "Techniques",
					body: "live action video, stop-motion animation"
				},
				{
					id: "bodegaSpecs02",
					lead: "Length",
					body: "01 min. 39 sec."
				}
			]
		},
		highlights: [
			{
				id: "bodegaHighlights01",
				lead: "Lessons learned",
				body: "Animation can help bridge language barriers. And music can give a familiar structure to a short film without a story."
			}
		],
		overview: [
			{
				id: "bodegaOverview02",
				lead: "Background",
				body: "I started this animation as a scene in a longer animation. I was very disappointed to have to cut it from that film. So, I decided to give it life as its own short with its own structure and message."
			},
			{
				id: "bodegaOverview02",
				lead: "Process",
				body: "I started off by shopping for bodega to cook. I made a few batches of bodega frita until I felt comfortable with the dish. I then made three versions of the dish to film. I left the first one raw. I boiled the second one. And I boiled and fried the last version. Each version was in many, many photos until I swapped it out with the next version."
			},
			{
				id: "bodegaOverview03",
				lead: "Support",
				body: "I made this film with material support from Harvard VES. Thank you to Ruth Lingford for being my mentor. And thank you to Andrés Ballesteros for the lovely music."
			},
		]
		
  }
  
	bodegaNavbarLinks = [{title:"Synopsis", id:"bodegaNavBarLinkSynopsis"},{title:"Highlights", id:"bodegaNavBarLinkHighlights"},{title:"Overview", id:"bodegaNavBarLinkOverview"}];
	bodegaSynopsisSectionRef = React.createRef();
	bodegaHighlightsSectionRef = React.createRef();
	bodegaNavbarRef = React.createRef();
	bodegaOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'A Bodega' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkSynopsis"){
			this.bodegaSynopsisSectionRef.current.scrollIntoView();
			this.bodegaSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkHighlights"){
			this.bodegaHighlightsSectionRef.current.scrollIntoView();
			this.bodegaHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkOverview"){
			this.bodegaOverviewSectionRef.current.scrollIntoView();
			this.bodegaOverviewSectionRef.current.focus();
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
							navbarLinks={ this.bodegaNavbarLinks }
						/>	
					</div>
				}
				<h1 className="padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center">A Bodega</h1>
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.bodegaNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.bodegaHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.bodegaOverviewSectionRef }
					synopsisSectionRef={ this.bodegaSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default BodegaProject;
import React, { Component } from 'react';
import "./PlaysProject.css";
import PlaysButton from '../../components/PlaysButton';
import ButtonContainer from '../../components/ButtonContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import PlaysContainer from '../../components/PlaysContainer';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class PlaysProject extends Component {
	
	state={
		plays: [
			{
				id: "plays0",
				buttonId: "plays0Button",
				expanded: "false",
				shortTitle: "From the Notes of...",
				fulltitle: "From the Notes of Samuel R. Mendez on the Discovery and Occupation of the Neo-World"
			},
			{
				id: "plays1",
				buttonId: "plays1Button",
				expanded: "false",
				shortTitle: "Necessary Details",
				fulltitle: "From the Notes of Samuel R. Mendez on the Discovery and Occupation of the Neo-World"
			},
			{
				id: "plays2",
				buttonId: "plays3Button",
				expanded: "false",
				shortTitle: "Necessary to the...",
				fullTitle: `"Necessary to the security of a free state..."`,
			},
			{
				id: "plays3",
				buttonId: "plays4Button",
				expanded: "false",
				shortTitle: "You will remember...",
				fullTitle: ""
			},
			{
				id: "plays4",
				buttonId: "plays5Button",
				expanded: "false",
				shortTitle: "Trust Issues",
				fullTitle: "Trust Issues",
			},
			{
				id: "plays5",
				buttonId: "plays6Button",
				expanded: "false",
				shortTitle: "...the Future...",
				fullTitle: "What do you do when the future looks just like the past?",
			}
		]
	}

	projectInfo = {
		title: "Weird Little Plays",
		synopsis:{
			mediaType: "photo",
			blurb: "An ongoing collection of short plays in which I play myself.",
			embed: {
				src: "../assets/images/projectPhotos/plays.jpg",
				alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
			},
			year: "2018 - ongoing",
			specs: [
				{
					id: "playsSpecs01",
					lead: "Constraints",
					body: "I don't pretend to be someone I'm not. I don't pretend to be somewhere I'm not. And I try to keep things as short as possible."
				}
			]
		},
		highlights: [
			{
				id: "playsHighlights01",
				lead: "Performances",
				body: "I've performed all the plays on this page in front of an audience. These performances include "
			},
			{
				id: "playsHighlights02",
				lead: "Inspiration",
				body: "The Neo-futurists in Chicago inspired my approach to live performance and writing. I wrote my first plays in a workshop of theirs in 2018 and I couldn't get enough of it."
			}
		],
		overview: [
			{
				id: "playsOverview01",
				lead: "Process",
				body: "I usually have a clear idea of a task or action that matches up with a feeling I have. I don't usually have a clear idea of the words to say right away. So, I'll usually come up with a few sentences or phrases, and try them out with the movement. I'll kind of go back and forth between refining the words and refining the movement. These plays usually sit in a half-finished state until I find an opportunity for a performance. With a performance in mind, I can finally finish the play with a space and audience in mind."
			},
			{
				id: "playsOverview02",
				lead: "Personal Approach",
				body: "I use these plays to think through my feelings and my responses to things that happen in my life. They are very useful conversation starters. So, I don't really play characters when I write them. I also tend not to get too abstract with what happens on stage. However, the movement I plan might not have a direct relationship to the words I say. I like to play myself and tell a real story from my past or create a weird, memorable moment with people in the room."
			}
		]		
	}

	playsNavbarLinks = [{title:"Synopsis", id:"playsNavBarLinkSynopsis"},{title:"Highlights", id:"playsNavBarLinkHighlights"},{title:"Overview", id:"playsNavBarLinkOverview"},{title:"The Plays", id:"playsNavBarLinkPlaysContainer"}];
	playsSynopsisSectionRef = React.createRef();
	playsHighlightsSectionRef = React.createRef();
	playsNavbarRef = React.createRef();
	playsOverviewSectionRef = React.createRef();
	playsPlaysContainerRef = React.createRef();

	componentDidMount() {
		document.title = "'Weird Little Plays' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkSynopsis"){
			this.playsSynopsisSectionRef.current.scrollIntoView();
			this.playsSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkHighlights"){
			this.playsHighlightsSectionRef.current.scrollIntoView();
			this.playsHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkOverview"){
			this.playsOverviewSectionRef.current.scrollIntoView();
			this.playsOverviewSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkPlaysContainer"){
			this.playsPlaysContainerRef.current.scrollIntoView();
			this.playsPlaysContainerRef.current.focus();
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
							navbarLinks={ this.playsNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.playsNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.playsHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.playsOverviewSectionRef }
					synopsisSectionRef={ this.playsSynopsisSectionRef }
				/>
				<PlaysContainer
					ref = { this.playsPlaysContainerRef }
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
				>
					{ this.state.plays.map((play, index) =>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h3>
								<ButtonContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
									<PlaysButton
										aria_expanded={ play.expanded }
										aria_controls={ "collapsible-"+ index }
										tabIndex="0"
										buttonType="playsButton"
										buttonId={ this.props.buttonId }
										//onClickFunction={ props.onClickFunction }
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										text={ play.shortTitle }
									/>
								</ButtonContainer>
							</h3>
							
						</div>
					)}
					

				</PlaysContainer>
			</div>
		);
  	}
}

export default PlaysProject;
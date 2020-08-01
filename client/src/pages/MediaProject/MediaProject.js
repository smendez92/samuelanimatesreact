import React, { Component } from 'react';
import "./MediaProject.css";
import GenericFloatingSection from '../../components/GenericFloatingSection';
import MediaItem from '../../components/MediaItem';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';
import WritingItem from '../../components/WritingItem';

class MediaProject extends Component {
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
			mediaType: "photo",
			blurb: "A mix of research articles, interviews, and reviews.",
			embed: {
				src: "../assets/images/projectPhotos/writing.svg",
				alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
			},
			year: "2013 to present",
			specs: []
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

	mediaList = [
		{
			authors: "Staats D",
			id: "mediaList01",
			lede: "Podcast interview about my UNFUNDABLE board game",
			link: "https://player.fm/series/board-gaming-with-education/episode-97-designing-a-game-for-academic-application-and-appealing-to-a-game-hobbyists-feat-sam-mendez",
			publisher: "Board Gaming with Education",
			title: "Designing a Game for Academic Application and Appealing to Game Hobbyists",
			year: "2020"
		},
		{
			authors: "Robinson R",
			id: "mediaList02",
			lede: `Magazine coverage about "10 Days in Saigon"`,
			link: "https://www.giantrobot.media/stories/2017/5/30/muui",
			publisher: "Giant Robot Media",
			title: "Wanderlust in a Wheelchair: How Muui is Changing Travel for the Disabled",
			year: "2017"
		}

	]

	writingsListArtsTech = [
		{
			authors: "Narain J,	Ananthabhotla I, Mendez SR,	Taylor C, Siu HC, Brugnaro L, Mallozzi A",
			id: "writingsList08",
			lede: "Assistve Technology Hackathon",
			link: "https://chi2020.acm.org/",
			publisher: "Poster presented at: ACM CHI Conference on Human Factors in Computing Systems",
			title: "ATHack: Co-Design and Education in Assistive Technology Development",
			year: "2020"
		},
		{
			authors: "Mendez SR",
			id: "writingsList07",
			lede: "Climate Change VR",
			link: "https://www.indiewire.com/2020/02/sundance-2020-vr-climate-change-1202208386/",
			publisher: "IndieWire",
			title: "Sundance VR Tackled Climate Change With Groundbreaking New Projects",
			year: "2020"
		},
		{
			authors: "Mendez SR",
			id: "writingsList06",
			lede: "Intersectional Hackathon",
			link: "https://immerse.news/building-irreverent-and-intersectional-futures-7b8401185683",
			publisher: "Immerse",
			title: "Building Irreverent and Intersectional Futures: Design justice and co-creation in the ‘Make the Breast Pump Not Suck’ Hackathon",
			year: "2019"
		},
		{
			authors: "Mendez SR",
			id: "writingsList04",
			lede: "Disability & VR",
			link: "https://immerse.news/four-feet-blind-date-bde31a7d06d",
			publisher: "Immerse",
			title: "Doing Inclusion, Making Strong VR Experiences",
			year: "2019"
		},
		{
			authors: "Mendez SR",
			id: "writingsList03",
			lede: "Participatory VR",
			link: "https://www.indiewire.com/2019/02/sundance-new-frontiers-2019-vr-mechanical-souls-1202042700/",
			publisher: "IndieWire",
			title: "Sundance VR: The 2019 Festival Showed That the Future Is Not Passive Viewing",
			year: "2019"
		}

	]

	writingsListHealth = [
		{
			authors: "Linton A, Mendez SR, Simon MA",
			id: "writingsList06",
			lede: "Abortion Referrals",
			link: "https://doi.org/10.1016/j.contraception.2019.10.009",
			publisher: "Contraception. 101(2): 132-136",
			title: "Abortion referral patterns among generalist OB/GYNs and primary care practitioners: A qualitative study",
			year: "2020"
		},
		{
			authors: "Mendez SR, Linton A, Tom L, & Simon M",
			id: "writingsList02",
			lede: "Planned Parenthood",
			link: "https://doi.org/10.15761/FWH.1000153",
			publisher: "Frontiers in Women's Health",
			title: `"The only place I know that I can send patients to": Chicago-area generalist providers’ perceptions of Planned Parenthood `,
			year: "2018"
		},
		{
			authors: "Ramanadhan S, Mendez SR, Rao M, & Viswanath K",
			id: "writingsList01",
			lede: "Social Media & CBOs",
			link: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129",
			publisher: "BMC Public Health",
			title: "Social media use by community-based organizations conducting health promotion: a content analysis",
			year: "2013"
		}

	]

	writingNavbarLinks = [{title:"Synopsis", id:"writingNavBarLinkSynopsis"},{title:"Highlights", id:"writingNavBarLinkHighlights"},{title:"Overview", id:"writingNavBarLinkOverview"},{title:"The Writings", id:"writingNavBarLinkWritingsContainer"}];
	writingSynopsisSectionRef = React.createRef();
	writingHighlightsSectionRef = React.createRef();
	writingNavbarRef = React.createRef();
	writingOverviewSectionRef = React.createRef();
	writingMediaContainerRef = React.createRef();

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
			this.writingMediaContainerRef.current.scrollIntoView();
			this.writingMediaContainerRef.current.focus();
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
					<div className="margin-auto width-100pc">
						<div className="padding-left-p5em padding-right-p5em">
							<GenericFloatingSection colorSchemeSuffix={ this.props.colorSchemeSuffix }>
								<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center mediaProjectPageOverview-color-scheme-" + this.props.colorSchemeSuffix }> 
									<div>
										<h2 tabIndex="0" ref={ this.MediaContainerRef }>The Media!</h2>
									</div>
									<div className="padding-bottom-p5em padding-top-p5em text-left">
										<div className="display-flex flex-direction-column padding-bottom-p25em padding-left-p5em padding-right-p5em padding-top-p25em">
										<h3 className=" padding-top-p5em text-center">Media Coverage</h3>
											<ul className="list-style-type-none list-style-position-outside padding-left-1em padding-bottom-1em">
											{ this.mediaList.map(media =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<MediaItem
														authors={ media.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ media.id }
														lede={ media.lede }
														link={ media.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ media.publisher }
														title={ media.title }
														year={ media.year }
													/>
												</li>
											)}
											</ul>
											<h3 className=" padding-top-p5em text-center">Writing: Arts & Tech</h3>
											<ul className="list-style-type-none list-style-position-outside padding-left-1em padding-bottom-1em">
											{ this.writingsListArtsTech.map(writing =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<WritingItem
														authors={ writing.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ writing.id }
														lede={ writing.lede }
														link={ writing.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ writing.publisher }
														title={ writing.title }
														year={ writing.year }
													/>
												</li>
											)}
											</ul>
											<h3 className="padding-top-p5em text-center">Writing: Health</h3>
											<ul className="list-style-type-none padding-left-1em">
											{ this.writingsListHealth.map(writing =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<WritingItem
														authors={ writing.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ writing.id }
														lede={ writing.lede }
														link={ writing.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ writing.publisher }
														title={ writing.title }
														year={ writing.year }
													/>
												</li>
											)}
											</ul>
										</div>
									</div>
								</div>
							</GenericFloatingSection>
						</div>
					</div>
						
				</div>				
			</div>
		);
  	}
}

export default MediaProject;
import React, {Component} from "react";
import "./PlaysContainerNecessaryToThe.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";
import AudioEmbedContainer from "../AudioEmbedContainer/AudioEmbedContainer";

class PlaysContainerNecessaryToThe extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	placeholder = [
				{
					id: "plays01",
					buttonId: "playsButton01",
					expanded: "false",
					shortTitle: `"Necessary Details"`,
					fullTitle: "Necessary Details",
					buttonTextLead: "Click to show "
				},
				{
					id: "plays02",
					buttonId: "playsButton02",
					expanded: "false",
					shortTitle: `"Necessary to the..."`,
					fullTitle: `"Necessary to the security of a free state..."`,
					buttonTextLead: "Click to show "
				},
				{
					id: "plays03",
					buttonId: "playsButton03",
					expanded: "false",
					shortTitle: `"You will remember..."`,
					fullTitle: "",
					buttonTextLead: "Click to show "
				},
				{
					id: "plays04",
					buttonId: "playsButton04",
					expanded: "false",
					shortTitle: `"Trust Issues"`,
					fullTitle: "Trust Issues",
					buttonTextLead: "Click to show "
				},
				{
					id: "plays05",
					buttonId: "playsButton05",
					expanded: "false",
					shortTitle: `"...the Future..."`,
					fullTitle: "What do you do when the future looks just like the past?",
					buttonTextLead: "Click to show "
				}
			]

	playInfo = {
		shortTitle: `"From the Notes of..."`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "From the Notes of Samuel R. Mendez on the Discovery and Occupation of the Neo-World",
		notes: "ayyylmao",
		audioEmbed: {
			src: "../assets/plays/notes/fromTheNotesAudio.mp3",
			alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
		},
		imageEmbed: {
			src: "../assets/images/projectPhotos/plays.jpg",
			alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
		}
	}

	handlePlaysButtonClick = event => {
		event.preventDefault();
		if(  event.target.getAttribute("aria-expanded") === "false"){
			this.setState({expanded: 'true', buttonTextLead: "Click to hide ", cssDisplay: "display-block"});
			
		}
		else if( event.target.getAttribute("aria-expanded") === "true"){
			this.setState({expanded: 'false', buttonTextLead: "Click to show ", cssDisplay: "display-none"});
		}
	}

	render() {
		return (
			<PlaysContainerIndividual
				aria_expanded={ this.state.expanded }
				aria_controls={ this.playInfo.containerId }
				buttonId={ this.playInfo.buttonId }
				cssDisplay={ this.state.cssDisplay }
				onClickFunction={ this.handlePlaysButtonClick }
				colorSchemeSuffix={ this.props.colorSchemeSuffix }
				text={ this.state.buttonTextLead + this.playInfo.shortTitle }
			>
				<div id={ this.playInfo.containerId } className={ "display-flex flex-direction-column padding-bottom-p5em padding-left-p5em padding-right padding-top-p5em plays-individual-container-" + this.props.colorSchemeSuffix}>
					<div>
						<h4>Full Title:</h4><p>{ this.playInfo.fullTitle }</p>
					</div>
					<div className={"display-flex flex-direction-" + this.props.responsiveFlexEnding }>
						<div className="margin-auto text-center" style={{"width": this.props.width }}>
							<PhotoEmbedContainer
								embed={ this.playInfo.imageEmbed }
							/>
						</div>
						<div className="margin-auto text-center" style={{"width": this.props.width }}>
							<AudioEmbedContainer
								embed={ this.playInfo.audioEmbed }
							/>
						</div>
					</div>
					<div>
						<h4>Script:</h4><p></p>
					</div>
					<div>
						<h4>Notes:</h4><p></p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerNecessaryToThe;
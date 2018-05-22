import React from "react";
import "./Header.css";
import Button from "../Button";
import ButtonContainer from "../ButtonContainer";

const Header = props => (
	<header className={ "header-color-scheme-" + props.colorSchemeSuffix + " margin-auto padding-bottom-1em padding-top-2em text-center width-85pc " + props.mainPaddingLeftClassName }>
		<div className="padding-bottom-p5em">
			<img alt="Samuel Animates: Portfolio Page" src="./assets/images/branding/logo.svg" className="display-inline height-2em padding-left-p25em padding-right-p25em"/>
			<h1 className="display-inline padding-left-p25em padding-right-p25em">{ props.title }</h1>
		</div>
		<div className="padding-bottom-1em padding-top-1em">
			<div className="display-inline-block padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em">
				<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
					<Button
						buttontype="contrastToggle"
						onClickFunction={ props.handleButtonClick }
						text="Click to toggle high contrast view"
						colorSchemeSuffix={ props.colorSchemeSuffix }
					/>
				</ButtonContainer>
			</div>
			<div className="display-inline-block padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em">
				<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>	
					<Button
						buttontype="fontSizeToggle"
						onClickFunction={ props.handleButtonClick }
						text="Click to toggle font size"
						colorSchemeSuffix={ props.colorSchemeSuffix }
					/>
				</ButtonContainer>
			</div>
		</div>
	</header>
);

export default Header;
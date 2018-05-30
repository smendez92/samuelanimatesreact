import React from "react";
import "./NavBarLink.css";
import Button from "../Button";

const NavBarLink = props => (
	<Button
		tabIndex="0"
		buttonType="navbarLink"
		buttonId={ props.buttonId }
		onClickFunction={ props.onClickFunction }
		colorSchemeSuffix={ props.colorSchemeSuffix }
		text={ props.text }
	/>
);

export default NavBarLink;
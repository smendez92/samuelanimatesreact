import React from "react";
import { Link } from "react-router-dom";
import "./NavBarLink.css";

const NavBarLink = props => (
	<span navLinkid={ props.navLinkid } onClick={ props.onClickFunction } role="link" tabindex="0" className={ "color-inherit navBarLink-color-scheme-" + props.colorSchemeSuffix }>
		{ props.text }
	</span>
);

export default NavBarLink;
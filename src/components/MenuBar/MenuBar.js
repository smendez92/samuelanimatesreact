import React from "react";
import "./MenuBar.css";

const MenuBar = props => (	
	<div className="font-Overpass" style={{maxWidth: "85%", margin: "auto"}}>
		<nav className="" style={{backgroundColor: "white", margin: "auto"}}>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>ABOUT</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>HIGHLIGHT</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>NEWS</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>ANIMATION</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>HEALTH</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>WEB</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>VIDEO</div>
			<div className={ "border-solid-2px-blue padding-bottom-p15em padding-top-p15em width-7p15em " + props.navbarClassName }>ART</div>
		</nav>
	</div>
);
export default MenuBar;
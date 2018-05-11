import React from "react";
import "./MenuBar.css";
import NavBar from '../NavBar';

const MenuBar = props => (	
	<div className="font-Overpass" style={{maxWidth: "85%", margin: "auto"}}>
		<NavBar
			navbarClassName = { props.navbarClassName }
			navbarLinks = { props.navbarLinks }
			navbarLinksClassName = { props.navbarLinksClassName }
		/>
	</div>
);
export default MenuBar;
import React from "react";
import "./MenuBar.css";
import NavBar from '../NavBar';

const MenuBar = props => (	
	<div className="font-Overpass margin-auto max-width-85pc">
		<NavBar
			colorSchemeSuffix={ props.colorSchemeSuffix }
			navbarClassName={ props.navbarClassName }
			navbarLinks={ props.navbarLinks }
			navbarLinksClassName={ props.navbarLinksClassName }
		/>
	</div>
);
export default MenuBar;
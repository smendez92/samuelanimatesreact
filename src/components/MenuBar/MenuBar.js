import React from "react";
import "./MenuBar.css";
import NavBar from '../NavBar';
import NavBarMobile from '../NavBarMobile';

const MenuBar = props => (	
	<div className="font-Overpass margin-auto max-width-85pc">
		{ props.isMobileView === false &&
			<NavBar
				colorSchemeSuffix={ props.colorSchemeSuffix }
				navbarLinks={ props.navbarLinks }
			/>
		}
		{ props.isMobileView === true &&
			<NavBarMobile
				colorSchemeSuffix={ props.colorSchemeSuffix }
				navbarLinks={ props.navbarLinks }
			/>
		}
		
	</div>
);
export default MenuBar;
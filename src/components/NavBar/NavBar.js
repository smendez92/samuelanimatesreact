import React from "react";
import "./NavBar.css";
import SheerWhiteContainer from "../SheerWhiteContainer";

const NavBar = props => (	
	<nav className={"clearfix box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px " + props.navbarClassName }>
		<SheerWhiteContainer>
			<h2 className="text-center">NAV</h2>
		</SheerWhiteContainer>
		<div>
			{props.navbarLinks.map(link => 
				<a href={ link.href } className={ "bg-white border-style-solid border-color-rgba-150-150-150-p2 border-2px display-block padding-bottom-p15em padding-top-p15em " + props.navbarLinksClassName }>{ link.title }</a>
			)}
		</div>
	</nav>
);
export default NavBar;
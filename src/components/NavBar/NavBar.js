import React from "react";
import "./NavBar.css";
import InlineA from "../InlineA";
import SheerWhiteContainer from "../SheerWhiteContainer";

const NavBar = props => (
	<nav className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px left-0 position-fixed top-0">
		<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
			<h2 className="text-center">NAV</h2>
		</SheerWhiteContainer>
		<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px clearfix color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + props.colorSchemeSuffix}>
			{props.navbarLinks.map(link =>
				<div className="padding-bottom-p25em padding-top-p25em float-none padding-left-1em width-8em">
					<InlineA
						key={ link.id }	
						colorSchemeSuffix={ props.colorSchemeSuffix }
						isInternalLink={ true }	
						text={ link.title }
						urlPath={ link.href }
					/>
				</div>
			)}
		</div>
	</nav>
);

export default NavBar;
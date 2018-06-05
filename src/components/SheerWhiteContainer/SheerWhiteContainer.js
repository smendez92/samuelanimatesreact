import React from "react";
import "./SheerWhiteContainer.css";

const SheerWhiteContainer = props => (
	<div className={ "border-style-solid border-width-2px sheerWhiteContainer-color-scheme-" + props.colorSchemeSuffix }>
		<div className="padding-bottom-p5em padding-top-1em">
			{ props.children }
		</div>
	</div>
);

export default SheerWhiteContainer;
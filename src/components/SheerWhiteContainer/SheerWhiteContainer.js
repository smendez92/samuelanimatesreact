import React from "react";
import "./SheerWhiteContainer.css";

const SheerWhiteContainer = ({ children }) => (
	<div className="bg-rgba-250-250-250-p7 border-style-solid border-color-rgba-150-150-150-p2 border-2px">
		<div className="padding-bottom-p5em padding-top-1p5em">
			{ children }
		</div>
	</div>
);

export default SheerWhiteContainer;
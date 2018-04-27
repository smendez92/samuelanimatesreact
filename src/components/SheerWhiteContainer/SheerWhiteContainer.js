import React from "react";
import "./SheerWhiteContainer.css";

const SheerWhiteContainer = ({ children }) => (
	<div className="bg-rgba-250-250-250-p7">
		<div className="padding-bottom-p5em padding-top-2em">
			{ children }
		</div>
	</div>
);

export default SheerWhiteContainer;
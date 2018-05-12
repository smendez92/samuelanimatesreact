import React from "react";
import "./ButtonContainer.css";

const ButtonContainer = ({ children }) => (
	<div className="bg-rgba-148-198-255-p5 box-shadow-3px-4px-2px-rgba-221-126-192-p3 padding-2px">
		{ children }
	</div>
);

export default ButtonContainer;
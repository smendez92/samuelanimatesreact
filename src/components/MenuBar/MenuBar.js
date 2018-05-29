import React from "react";
import "./MenuBar.css";

const MenuBar = props => (	
	<div className="font-Overpass margin-auto max-width-85pc">
		{ props.children }		
	</div>
);
export default MenuBar;
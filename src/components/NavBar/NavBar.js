import React from "react";
import "./NavBar.css";

const NavBar = props => (
	<nav className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px left-0 position-fixed top-0">
		{ props.children }
	</nav>
);

export default NavBar;
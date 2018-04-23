import React from "react";
import "./HomepageProjectIcon.css";

const HomepageProjectIcon = props => (
	<img alt={ props.iconAlt } class="display-block margin-auto text-center width-100pc" src={ props.icon }></img>
);

export default HomepageProjectIcon;
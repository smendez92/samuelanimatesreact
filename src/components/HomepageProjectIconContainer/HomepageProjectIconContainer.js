import React from "react";
import "./HomepageProjectIconContainer.css";
import HomepageProjectIcon from "../HomepageProjectIcon";

const HomepageProjectIconContainer = props => (
	<div className="max-width-200px margin-auto width-6em">
		<HomepageProjectIcon
			icon = { props.icon }
			iconAlt = { props.iconAlt }
		/> 
	</div>
);

export default HomepageProjectIconContainer;
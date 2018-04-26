import React from "react";
import { Link } from "react-router-dom";
import "./HomepageProjectContainer.css";
import HomepageProjectIconContainer from "../HomepageProjectIconContainer";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";

const HomepageProjectContainer = props => (
    <div className="homepage-project-container bg-white border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 clear-both color-black font-Assistant padding-T-1p5em">
		<div>
			<ResponsiveCtoLFloat>
				<HomepageProjectIconContainer
					icon = { props.project.icon }
					iconAlt = { props.project.iconAlt }
				/>
			</ResponsiveCtoLFloat>
			<ResponsiveCtoLFloat>
				<div>
					<h3>
						<Link to={ props.project.projectPagePath }>
						{ props.project.title }
						</Link>
					</h3>
					{ props.project.description }
				</div>
			</ResponsiveCtoLFloat>
		</div>
		<HomepageProjectLinksContainer
			links = { props.project.links }
		/>
    </div>
);

export default HomepageProjectContainer;
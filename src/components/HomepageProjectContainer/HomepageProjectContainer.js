import React from "react";
import { Link } from "react-router-dom";
import "./HomepageProjectContainer.css";
import HomepageProjectIconContainer from "../HomepageProjectIconContainer";

const HomepageProjectContainer = props => (
    <div className="homepage-project-container bg-white border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 color-black padding-T-1p5em">
		<HomepageProjectIconContainer
			icon = { props.project.icon }
			iconAlt = { props.project.iconAlt }
		/>
		<div className="font-Assistant">
			<div>
				<h3>
					<Link to={ props.project.projectPagePath }>
					{ props.project.title }
					</Link>
				</h3>
				{ props.project.description }
			</div>
			<div>
				{ props.project.links.map(result =>
					<div>
						<div>
							{result.icon}
						</div>
						<div>
							{result.location === "internal" &&
								<Link to={ result.exactPath }>{ result.title }</Link>
							}
							{result.location === "external" &&
								<a href={result.url} target="_blank">{ result.title }</a>
							}
						</div>
					</div>
				)}
			</div>
        </div>
    </div>
);

export default HomepageProjectContainer;
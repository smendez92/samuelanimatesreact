import React from "react";
import { Link } from "react-router-dom";
import "./HomepageProjectLinksContainer.css";
import MaterialIcon from "../MaterialIcon";

const HomepageProjectLinksContainer = props => (
	<div className="bg-242-242-242 border-color-rgba-150-150-150-p2 border-style-solid border-width-2-0-0-0 clear-both font-size-p75em margin-auto padding-top-p5em width-90pc">
		{ props.links.map(result =>
			<div className="display-inline-block padding-left-p25em padding-right-p25em">				
				<MaterialIcon
					iconName = { result.icon } 
				/>
				<div className="display-inline-block">
					{ result.location === "internal" &&
						<Link to={ result.exactPath }>{ result.title }</Link>
					}
					{ result.location === "external" &&
						<a href={result.url} target="_blank">{ result.title }</a>
					}
				</div>
			</div>
		)}
	</div>
);

export default HomepageProjectLinksContainer;
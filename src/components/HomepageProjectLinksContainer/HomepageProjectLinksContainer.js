import React from "react";
import "./HomepageProjectLinksContainer.css";
import MaterialIcon from "../MaterialIcon";
import InlineA from "../InlineA";

const HomepageProjectLinksContainer = props => (
	<div className="bg-242-242-242 border-color-rgba-150-150-150-p2 border-style-solid border-width-2-0-0-0 clear-both color-inherit font-size-p75em margin-auto padding-top-p5em width-90pc">
		{ props.links.map(projectLink =>
			<div key={ projectLink.id } className="display-inline-block padding-left-p3em padding-right-p3em">				
				<MaterialIcon
					iconName={ projectLink.icon } 
				/>
				<InlineA
					isInternalLink={ projectLink.isInternalLink }	
					text={ projectLink.text }
					urlPath={ projectLink.path }
					colorSchemeSuffix ={ props.colorSchemeSuffix }
				/>
			</div>
		)}
	</div>
);

export default HomepageProjectLinksContainer;
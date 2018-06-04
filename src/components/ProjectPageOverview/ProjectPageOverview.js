import React from "react";
import "./ProjectPageOverview.css";
import GenericFloatingSection from "../GenericFloatingSection";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";

const ProjectPageOverview = React.forwardRef((props, ref) => (
	
	<ResponsiveCtoLFloat
		float = { props.float }
		isMobile={ props.isMobile }
		width={ props.width }
	>
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
				<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center projectPageOverview-color-scheme-" + props.colorSchemeSuffix }> 
					<div>
						<h2 tabindex="0" ref={ ref }>Overview</h2>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em text-left">
						{ props.overview.map( overviewSection =>
							<p className="padding-bottom-p5em padding-top-p5em"><h3 class="display-inline">{ overviewSection.lead }:</h3> { overviewSection.body }</p>
						)}
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</ResponsiveCtoLFloat>

));

export default ProjectPageOverview;
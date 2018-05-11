import React from "react";
import "./HomepageProjectsSection.css";
import HomepageProjectContainer from "../HomepageProjectContainer";
import SheerWhiteContainer from "../SheerWhiteContainer";
import GenericFloatingSection from "../GenericFloatingSection";

const HomepageProjectsSection = props => (
	<GenericFloatingSection>
		<SheerWhiteContainer>
			<h2 id={ props.id } className="text-center">{ props.title }</h2>
		</SheerWhiteContainer>
		{ props.projects.map(project =>
			<HomepageProjectContainer
				float = { props.float }	
				isMobile={ props.isMobile }
				project = { project }
			/>
		)}
	</GenericFloatingSection>	
);

export default HomepageProjectsSection;
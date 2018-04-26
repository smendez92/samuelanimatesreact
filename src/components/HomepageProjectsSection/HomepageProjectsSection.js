import React from "react";
import "./HomepageProjectsSection.css";
import HomepageProjectContainer from "../HomepageProjectContainer";
import SheerWhiteContainer from "../SheerWhiteContainer";

const HomepageProjectsSection = props => (
	<section className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px color-black clear-both margin-bottom-2em margin-top-1em padding-top-1p5em width-100pc">
		<SheerWhiteContainer>
			<h2 className="text-center">{ props.title }</h2>
		</SheerWhiteContainer>
		{ props.projects.map(project =>
			<HomepageProjectContainer
				project = { project }
			/>
		)}
	</section>	
);

export default HomepageProjectsSection;
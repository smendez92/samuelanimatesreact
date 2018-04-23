import React from "react";
import "./HomepageProjectsSection.css";
import HomepageProjectContainer from "../HomepageProjectContainer";

const HomepageProjectsSection = props => (
	<section className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px color-black clear-both margin-bottom-2em margin-top-1em width-100pc">
		<div>
			<h2>{ props.title }</h2>
		</div>
		{ props.projects.map(project =>
			<HomepageProjectContainer
				project = { project }
			/>
		)}
	</section>	
);

export default HomepageProjectsSection;
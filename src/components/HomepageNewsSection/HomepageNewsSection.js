import React from "react";
import "./HomepageNewsSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import SheerWhiteContainer from '../SheerWhiteContainer';
import UnorderedBulletlessList from '../UnorderedBulletlessList';

const HomepageNewsSection = props => (
	<GenericFloatingSection>
			<SheerWhiteContainer>
				<h2 id={ props.id } className="text-center">RECENT NEWS</h2>
			</SheerWhiteContainer>
			<div className="bg-rgb-251-251-251 border-color-rgba-150-150-150-p2 border-style-solid border-width-2px color-black font-Assistant height-100pc margin-auto padding-left-3em padding-right-3em padding-top-2em">
				<UnorderedBulletlessList
					listItems = { props.newsItems }
				/>
			</div>
	</GenericFloatingSection>
);

export default HomepageNewsSection;
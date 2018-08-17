import React from "react";
import "./Footer.css";
import InlineA from "../InlineA";

const Footer = props => (
	<footer className={ "footer-border-color-scheme-" + props.colorSchemeSuffix + " box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-width-2px color-inherit clear-both font-size-p85em margin-bottom-2em margin-top-1em padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc" }>
		<div className={ "footer-body-color-scheme-" + props.colorSchemeSuffix + " box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-width-2px padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em" }>
			<h2 className="text-center">Thanks for visiting!</h2>
			<h3 className="font-size-p9em">Accessibility (A11Y)</h3>
			<p className="padding-bottom-p25em">
				I designed and coded this portfolio using React and Express. I made this site with an eye towards A11Y, but I definitely still have a lot to. I all feedback on how to increase this site's A11Y. Feel free to check out <InlineA colorSchemeSuffix={ props.colorSchemeSuffix } isInternalLink={ false } text={ "the GitHub repo for this portfolio site" } urlPath={ "https://github.com/smendez92/samuelAnimatesReact" } />.
			</p>
			<h3 className="font-size-p9em padding-top-p25em">Privacy</h3>
			<p>
				This site respects "Do Not Track" (DNT) requests with the help of code from Corbin Davenport. If this site detects a DNT request from your browser, code from external sites will not embed unless you opt in via a placeholder button. Such content includes: YouTube video embeds, Vimeo video embeds, embedded maps from Google.
			</p>
		</div>
	</footer>
);

export default Footer;
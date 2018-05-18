import React from "react";
import { Link } from "react-router-dom";
import "./InlineA.css";

const InlineA = props => (
	<span>
		{props.isInternalLink === true &&
			<Link className="border-color-rgba-255-255-255-0 border-style-solid border-width-2px" to={ props.urlPath }>{ props.text }</Link>
		}
		{props.isInternalLink === false &&
			<a className="border-color-rgba-255-255-255-0 border-style-solid border-width-2px" target="_blank" href={ props.urlPath }>{ props.text }</a>
		}
	</span>
);

export default InlineA;
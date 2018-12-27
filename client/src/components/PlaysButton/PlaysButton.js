import React from "react";
import "./PlaysButton.css";

const PlaysButton = props => (
	
	<button aria-controls={ props.aria_controls } aria-expanded={ props.aria_expanded } buttonid={ props.buttonId } buttontype={ props.buttonType } className={ "border-style-outset border-width-2px border-radius-12px font-Overpass font-size-p9em padding-p5em width-100pc z2 button-color-scheme-" + props.colorSchemeSuffix } onClick={ props.onClickFunction }>
		{ props.aria_expanded === "true" &&
			<span>Click to hide "{ props.text }"</span>
		}
		{

		}
		{ props.aria_expanded === "false" &&
			<span>Click to show "{ props.text }"</span>
		}
	</button>

);

export default PlaysButton;
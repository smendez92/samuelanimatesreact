import React from "react";

const MaterialIcon = props => (	
	<div className="display-inline-block">
		{ props.iconName === "page" &&
			<svg aria-hidden="true" fill="#000000" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
				<path d='M0 0h24v24H0z' fill='none'/><path d='M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z' class='JS-svg-composite-icon' fill='#010101'/>
			</svg>
		}
		{ props.iconName === "film" &&
			<svg aria-hidden="true" fill="#000000" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
				<path d='M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z'/><path d='M0 0h24v24H0z' fill='none'/>
			</svg>
		}
	</div>
);
export default MaterialIcon;
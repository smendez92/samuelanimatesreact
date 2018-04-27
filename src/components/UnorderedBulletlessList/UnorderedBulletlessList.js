import React from "react";
import "./UnorderedBulletlessList.css";

const UnorderedBulletlessList = props => (
	<ul class="display-block list-style-position-outside">
		{ props.listItems.map(listItem =>
			<li class="display-block text-indent-neg1p7em margin-bottom-1em margin-left-1p7em">
				<span class="font-weight-600">{ listItem.lead }:</span> { listItem.body }
			</li>
		)}
	</ul>
);

export default UnorderedBulletlessList;
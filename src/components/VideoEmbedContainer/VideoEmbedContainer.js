import React from "react";
import "./VideoEmbedContainer.css";

const VideoEmbedContainer = props => (
	<div className="display-inline-block width-75pc">
		<div className="video-embed-container">
			<iframe frameborder="0" src={ props.embed.url } title={ props.embed.title } webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true">
				It looks like your browser has trouble displaying this embedded video. <a href={ props.embed.url } target='_blank'>Go to this link if you wish to see the video.</a>
			</iframe>
		</div>
	</div>
);

export default VideoEmbedContainer;
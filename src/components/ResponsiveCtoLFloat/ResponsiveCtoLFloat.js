import React from "react";
import "./ResponsiveCtoLFloat.css";

class ResponsiveCtoLFloat extends React.Component {

	render(){
		var style = {
			width: this.props.width
		};

		return (
			<div className="display-inline-block ResponsiveCtoLFloat" style={ style }>
				{ this.props.children }
			</div>
		)
	}

};

export default ResponsiveCtoLFloat;
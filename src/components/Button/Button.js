import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
	
	constructor(props) {
		super(props);
		this.state = {buttonClassName: "bg-rgb-251-251-251 border-color-rgba-150-150-150-p3 border-style-outset border-width-2px border-radius-12px color-black font-Overpass font-size-p9em padding-p5em"};
		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleBlur() {
		this.setState({buttonClassName:"bg-rgb-251-251-251 border-color-rgba-150-150-150-p3 border-style-outset border-width-2px border-radius-12px color-black font-Overpass font-size-p9em padding-p5em"});
	}

	handleFocus() {
		this.setState({buttonClassName:"bg-rgb-0-0-87 border-color-rgb-209-0-129 border-style-outset border-width-2px border-radius-12px  color-rgb-251-251-251 cursor-pointer font-Overpass font-size-p9em padding-p5em"});
	}

	handleMouseOver() {
		this.setState({buttonClassName:"bg-rgb-0-0-87 border-color-rgb-209-0-129 border-style-outset border-width-2px border-radius-12px  color-rgb-251-251-251 cursor-pointer font-Overpass font-size-p9em padding-p5em"});
	}

	handleMouseLeave() {
		this.setState({buttonClassName:"bg-rgb-251-251-251 border-color-rgba-150-150-150-p3 border-style-outset border-width-2px border-radius-12px color-black font-Overpass font-size-p9em padding-p5em"});
	}



	render() {
		return (
			<button className={ this.state.buttonClassName } onBlur={ this.handleBlur } onFocus={ this.handleFocus } onMouseOver={ this.handleMouseOver } onMouseLeave={ this.handleMouseLeave }>
				{ this.props.children }
			</button>
		)
	};

};

export default Button;
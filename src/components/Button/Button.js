import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
	
	constructor(props) {
		super(props);
		this.state = {buttonClassName: "button-color-scheme-default"};
		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleBlur() {
		this.setState({buttonClassName:"button-color-scheme-default  font-Overpass font-size-p9em padding-p5em z2"});
	}

	handleFocus() {
		this.setState({buttonClassName:"button-hover-color-scheme-default border-style-outset border-width-2px border-radius-12px cursor-pointer font-Overpass font-size-p9em padding-p5em z2"});
	}

	handleMouseOver() {
		this.setState({buttonClassName:"button-hover-color-scheme-default border-style-outset border-width-2px border-radius-12px cursor-pointer font-Overpass font-size-p9em padding-p5em z2"});
	}

	handleMouseLeave() {
		this.setState({buttonClassName:"button-color-scheme-default border-style-outset border-width-2px border-radius-12px"});
	}



	render() {
		return (
			<button buttontype={ this.props.buttontype } className={ "border-style-outset border-width-2px border-radius-12px font-Overpass font-size-p9em padding-p5em z2 " + this.state.buttonClassName } onClick={ this.props.onClickFunction } onBlur={ this.handleBlur } onFocus={ this.handleFocus } onMouseOver={ this.handleMouseOver } onMouseLeave={ this.handleMouseLeave }>
				{ this.props.text }
			</button>
		)
	};

};

export default Button;
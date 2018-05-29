import React from "react";
import "./NavBarMobile.css";
import Button from '../Button';
import ButtonContainer from '../ButtonContainer';

class NavBarMobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarLinks: props.navbarLinks
		};
	}

	render(){	
		return (
			<nav className="clearfix box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px margin-auto margin-bottom-2em">
				{ this.props.children }
				<div className="bottom-0 position-fixed right-0">
					<ButtonContainer colorSchemeSuffix = { this.props.colorSchemeSuffix }>
						<Button
							buttonType="scrollToTop"
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							onClickFunction={ this.props.handleButtonClick }
							text="TOP"
							tabIndex="-1"
						/> 
					</ButtonContainer>
				</div>
			</nav>
		)
	}

};

export default NavBarMobile;
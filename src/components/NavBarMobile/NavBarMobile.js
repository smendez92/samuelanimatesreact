import React from "react";
import "./NavBarMobile.css";
import Button from '../Button';
import ButtonContainer from '../ButtonContainer';
import InlineA from "../InlineA";
import SheerWhiteContainer from "../SheerWhiteContainer";

class NavBarMobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarLinks: props.navbarLinks
		};
		this.navbarRef = React.createRef();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "scrollToTop"){
			this.handleScrollToTopButtonClick();
		};
	}

	handleScrollToTopButtonClick = () =>{
		this.navbarRef.current.scrollIntoView();
		this.navbarRef.current.focus();
	};

	render(){	
		return (
			<nav className="clearfix box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px margin-auto margin-bottom-2em">
				<SheerWhiteContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
					<h2 tabindex="0" className="text-center" ref={ this.navbarRef }>NAV</h2>
				</SheerWhiteContainer>
				<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px clearfix color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + this.props.colorSchemeSuffix}>
					{this.state.navbarLinks.map(link =>
						<div className="padding-bottom-p25em padding-top-p25em float-left font-size-p85em text-center width-50pc">
							<InlineA
								key={ link.id }	
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								isInternalLink={ true }	
								text={ link.title }
								urlPath={ link.href }
							/>
						</div>
					)}
				</div>
				<div className="bottom-0 position-fixed right-0">
					<ButtonContainer colorSchemeSuffix = { this.props.colorSchemeSuffix }>
						<Button
							buttonType="scrollToTop"
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							onClickFunction={ this.handleButtonClick }
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
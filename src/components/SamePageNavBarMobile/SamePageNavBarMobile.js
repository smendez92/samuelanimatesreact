import React from "react";
import "./SamePageNavBarMobile.css";
import Button from '../Button';
import ButtonContainer from '../ButtonContainer';
import SamePageNavBarLink from '../SamePageNavBarLink';

const SamePageNavBarMobile = props => (
	<nav className="clearfix box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p2 border-2px margin-auto margin-bottom-2em">
		{ props.children }
		<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px clearfix color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + props.colorSchemeSuffix}>
			{ props.navbarLinks.map(link =>
				<div className="font-size-p8em padding-bottom-p25em padding-left-p2em padding-right-p2em padding-top-p25em float-left font-size-p85em text-center width-50pc">
					<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
						<SamePageNavBarLink
							key={ link.id }
							buttonId={ link.id }
							colorSchemeSuffix={ props.colorSchemeSuffix }
							text={ link.title }
							onClickFunction={ props.handleNavLinkClick }
						/>
					</ButtonContainer>
				</div>
			)}
		</div>
		<div className="bottom-0 position-fixed right-0">
			<ButtonContainer colorSchemeSuffix = { props.colorSchemeSuffix }>
				<Button
					buttonType="scrollToTop"
					colorSchemeSuffix={ props.colorSchemeSuffix }
					onClickFunction={ props.handleButtonClick }
					text="Top"
					tabIndex="-1"
				/> 
			</ButtonContainer>
		</div>
	</nav>
);

export default SamePageNavBarMobile;
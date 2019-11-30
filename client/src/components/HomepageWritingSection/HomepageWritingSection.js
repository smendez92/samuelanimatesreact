import React from "react";
import "./HomepageWritingSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import LinkContainerWithGenericIcon from "../LinkContainerWithGenericIcon"
import InlineA from "../InlineA";
import SheerWhiteContainer from '../SheerWhiteContainer';

const HomepageWritingSection = React.forwardRef((props, ref) => (
	<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
		<div className={ "homepageWritingSection-color-scheme-" + props.colorSchemeSuffix + " color-inherit padding-left-p5em padding-right-p5em"}>
			<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h2 tabIndex="0" className="text-center" ref={ ref }>Writing</h2>
			</SheerWhiteContainer>
			<div className="display-flex flex-direction-column">
				<div>
				{props.paragraphs.map(paragraph =>
					<div key={ paragraph.id } className="font-Assistant padding-left-20px padding-right-20px">
							{ paragraph.includesLink === false &&
								<p className="padding-top-p5em padding-bottom-p5em">
									<span className="font-weight-600">{ paragraph.lead }:&nbsp;</span>{ paragraph.body }
								</p>
							}
							{ paragraph.includesLink === true &&
								<div className="padding-top-p5em padding-bottom-p5em">
									<span className="font-weight-600">{ paragraph.lead }:&nbsp;</span>
									{ paragraph.body[0].preLinkText }
									<LinkContainerWithGenericIcon
										materialIconFill={ props.materialIconFill }
									>
										<InlineA
											isInternalLink={ paragraph.body[0].linkIsInternalLink }	
											text={ paragraph.body[0].linkText }
											urlPath={ paragraph.body[0].linkUrl }
											colorSchemeSuffix ={ props.colorSchemeSuffix }
										/>
									</LinkContainerWithGenericIcon>
									{ paragraph.body[0].postLinkText }
								</div>
							}
						</div>
					)}
				</div>
			</div>	
		</div>
		<div className={ "border-style-solid border-width-2-0-0-0 clear-both color-inherit margin-auto padding-top-p5em text-center homepageProjectLinksContainer-color-scheme-" + props.colorSchemeSuffix}>
			<InlineA
				isInternalLink={ true }	
				text={ "See all writings." }
				urlPath={ "/projects/writing" }
				colorSchemeSuffix ={ props.colorSchemeSuffix }
			/>
	</div>
	</GenericFloatingSection>
));

export default HomepageWritingSection;
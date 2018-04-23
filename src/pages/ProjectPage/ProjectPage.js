import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AfterProject from "../projects/AfterProject";
import ApplesProject from "../projects/ApplesProject";
import ArtemisProject from "../projects/ArtemisProject";
import BodegaProject from "../projects/BodegaProject";
import BreakfastProject from "../projects/BreakfastProject";
import BusanProject from "../projects/BusanProject";
import DotsProject from "../projects/DotsProject";
import GiftpitchProject from "../projects/GiftpitchProject";
import HealthforallProject from "../projects/HealthforallProject";
import HernandezProject from "../projects/HernandezProject";
import JolietProject from "../projects/JolietProject";
import LmhtfProject from "../projects/LmhtfProject";
import MediaProject from "../projects/MediaProject";
import PlannedparenthoodProject from "../projects/PlannedparenthoodProject";
import SaigonProject from "../projects/SaigonProject";
import TarotProject from "../projects/TarotProject";
import TeenyProject from "../projects/TeenyProject";
import WalksProject from "../projects/WalksProject";
import WhyuProject from "../projects/WhyuProject";
import WikiProject from "../projects/WikiProject";
import YucaProject from "../projects/YucaProject";
import './ProjectPage.css';

const ProjectPage = () => (
    <div>
      <Switch>
        <Route exact path='/projects/after' component={AfterProject}/>
		<Route exact path='/projects/apples' component={ApplesProject}/>
		<Route exact path='/projects/artemis' component={ArtemisProject}/>
		<Route exact path='/projects/bodega' component={BodegaProject}/>
		<Route exact path='/projects/breakfast' component={BreakfastProject}/>
		<Route exact path='/projects/busan' component={BusanProject}/>
		<Route exact path='/projects/dots' component={DotsProject}/>
		<Route exact path='/projects/giftpitch' component={GiftpitchProject}/>
		<Route exact path='/projects/healthforall' component={HealthforallProject}/>
		<Route exact path='/projects/hernandez' component={HernandezProject}/>
		<Route exact path='/projects/joliet' component={JolietProject}/>
		<Route exact path='/projects/lmhtf' component={LmhtfProject}/>
		<Route exact path='/projects/media' component={MediaProject}/>
		<Route exact path='/projects/plannedparenthood' component={PlannedparenthoodProject}/>
		<Route exact path='/projects/saigon' component={SaigonProject}/>
		<Route exact path='/projects/tarot' component={TarotProject}/>
		<Route exact path='/projects/teeny' component={TeenyProject}/>
		<Route exact path='/projects/walks' component={WalksProject}/>
		<Route exact path='/projects/whyu' component={WhyuProject}/>
		<Route exact path='/projects/wiki' component={WikiProject}/>
		<Route exact path='/projects/yuca' component={YucaProject}/>
	  </Switch>
    </div>
);

export default ProjectPage;
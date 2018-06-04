import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AfterProject from "./pages/AfterProject";
import ApplesProject from "./pages/ApplesProject";
import ArtemisProject from "./pages/ArtemisProject";
import BodegaProject from "./pages/BodegaProject";
import BreakfastProject from "./pages/BreakfastProject";
import BusanProject from "./pages/BusanProject";
import DotsProject from "./pages/DotsProject";
import GiftpitchProject from "./pages/GiftpitchProject";
import HealthforallProject from "./pages/HealthforallProject";
import HernandezProject from "./pages/HernandezProject";
import JolietProject from "./pages/JolietProject";
import LmhtfProject from "./pages/LmhtfProject";
import MediaProject from "./pages/MediaProject";
import PlannedparenthoodProject from "./pages/PlannedparenthoodProject";
import SaigonProject from "./pages/SaigonProject";
import TarotProject from "./pages/TarotProject";
import TeenyProject from "./pages/TeenyProject";
import WalksProject from "./pages/WalksProject";
import WhyuProject from "./pages/WhyuProject";
import WikiProject from "./pages/WikiProject";
import YucaProject from "./pages/YucaProject";
import './App.css';

const App = () =>(
  <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
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
        <Route exact path="/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
  </Router>
);

export default App;
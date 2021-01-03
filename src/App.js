import React from 'react';
import {withBreakpoints} from 'react-breakpoints';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Portfolio from "./components/Portfolio.js";


const App = ({breakpoints, currentBreakpoint}) => {
	
	
	React.useEffect(() => {
		breakpoints[currentBreakpoint] < breakpoints.mobileLandscape ? document.getElementsByTagName('html')[0].setAttribute('isMobile', true)
		: document.getElementsByTagName('html')[0].setAttribute('isMobile', false)
	})

	return (
		<>
			<Portfolio viewMode={breakpoints[currentBreakpoint] < breakpoints.mobileLandscape ? 'mobile' : 'mobileLandscape'} />
		</>
	)
}

export default withBreakpoints(App);

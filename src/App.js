import React from 'react';
import {withBreakpoints} from 'react-breakpoints';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Portfolio from "./components/Portfolio.js";


const App = ({breakpoints, currentBreakpoint}) => {
	
	
	React.useEffect(() => {
		// anime.remove('*')

	})

	return (
		<>
			<Portfolio />
		</>
	)
}

export default withBreakpoints(App);

import React from 'react';
import { withBreakpoints } from 'react-breakpoints'

import Sidebar from './components/Sidebar.jsx'
import Intro from './components/Intro.js'

const App = ({ currentBreakpoint, breakpoints }) => {

	var props = {
		'breakpoint': currentBreakpoint,
	}

	React.useEffect(() => {
		// console.log(currentBreakpoint)
	})

	return (
		<>
			<div className="sidebar">
				<Sidebar props={ props }/>
			</div>
			<div className="content">
				<Intro props={ props }/>
			</div>

		</>
	)
}

export default withBreakpoints(App);

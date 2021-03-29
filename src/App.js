import React from 'react';

import Sidebar from './components/Sidebar.jsx'
const App = () => {
    // determine breakpoint small and portrait on start => setActive: false

	React.useEffect(() => {
		// console.log(currentBreakpoint)
	})

	return (
		<>
			<Sidebar />	
			<div className="content container-true">
				<div>

				</div>
			</div>
		</>
	)
}

export default App;

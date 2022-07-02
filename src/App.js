import React from 'react';

import Sidebar from './components/Sidebar.jsx'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {

	return (
		<>
			<Sidebar />	
			<div className="content container-true">
				<About />
				<Skills />
				<Projects />
			</div>
		</>
	)
}

export default App;

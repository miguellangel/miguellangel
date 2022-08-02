import React from 'react';

import Sidebar from './components/Sidebar.jsx'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {

	const handleScroll = (direction) => (e) => {
		e.preventDefault()
		let target = e.target.parentNode.parentNode
		let wheelEvent = new WheelEvent('wheel', {
			deltaY: direction === 'up' ? -1 : 1,
			deltaMode: 1
		});
		
		target.dispatchEvent(wheelEvent)
	
	}


	React.useEffect(() => {
	})

	return (
		<>
			<Sidebar />	
			<main className="container-true" id="content">
				<div id="firefox-helper">
					<button id="_up" onClick={handleScroll('up')}>↑</button>
					<button id="_down" onClick={handleScroll('down')}>↓</button>
				</div>
				<About />
				<Skills />
				<Projects />
			</main>
		</>
	)
}

export default App;

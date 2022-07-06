import React from 'react';

import Sidebar from './components/Sidebar.jsx'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {

	const isFirefox = React.useRef(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
	const t = React.useRef()
	const handleScroll = (direction) => (e) => {
		e.preventDefault()
		let target = e.target.parentNode.parentNode
		let wheelEvent = new WheelEvent('wheel', {
			deltaY: direction === 'up' ? -1 : 1,
			deltaMode: 1
		});
		
		target.dispatchEvent(wheelEvent)
		

		//direction === 'up' ? target.scrollBy(0, 50) : target.scrollBy(0, -50)

	}


	React.useEffect(() => {
		console.log(isFirefox)
	})

	return (
		<>
			<Sidebar />	
			<div className="content container-true">
				<div id="firefox-helper">
					<button id="_up" onClick={handleScroll('up')}>↑</button>
					<button id="_down" onClick={handleScroll('down')}>↓</button>
				</div>
				<About />
				<Skills />
				<Projects />
			</div>
		</>
	)
}

export default App;

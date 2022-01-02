import React from 'react';

import Sidebar from './components/Sidebar.jsx'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const mod = (a, n) => ((a % n) + n) % n
// const clamp = (n, min, max) => Math.min(Math.max(n, min), max) 
function throttle (callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}

const App = () => {
	const cardNum = React.useRef(1)
	const prevCardNum = React.useRef()
	const container = React.useRef()

	const touchMoveStart = React.useRef({x: 0, y: 0})

	function presentCard(e, touchDelta) {

		prevCardNum.current = cardNum.current // set previous val before updating

		if (Math.sign(e.deltaY ?? touchDelta.y) >= 0) { // if scrolling down
			cardNum.current ++ 
		} else cardNum.current --
		
		if (cardNum.current === 0) cardNum.current --
		cardNum.current = mod(cardNum.current, 4) || mod(cardNum.current, 3) // restrict to three card states

		const x = document.querySelectorAll('.content > section') // get all card section elements

		const target = x[cardNum.current - 1]
		const prev = x[prevCardNum.current - 1]

		prev.classList.remove('active')
		// if prev is not also the active one, add 'removing' class for 250ms for animation purposes 
		if (prev !== target) prev.classList.toggle('removing') && setTimeout(() => prev.classList.remove('removing'), 755)
		
		target.classList.toggle('active')
	}

	function touchStart(e) {
		touchMoveStart.current.x = e.touches[0].pageX
		touchMoveStart.current.y = e.touches[0].pageY
	}

	function touchMove(e) {
		var delta = {}

		delta.x = touchMoveStart.current.x - e.touches[0].pageX
		delta.y = touchMoveStart.current.y - e.touches[0].pageY

		presentCard(e, delta)
		
	}

	React.useEffect(() => {

		container.current.addEventListener('wheel', throttle(presentCard, 200))

		container.current.addEventListener("touchstart", throttle(touchStart, 1000), false) /* should i also throttle this? */
		container.current.addEventListener("touchmove", throttle(touchMove, 200), false)



	})

	return (
		<>
			<Sidebar />	
			<div ref={ container } className="content container-true">
				<About />
				<Skills />
				<Projects />
			</div>
		</>
	)
}

export default App;

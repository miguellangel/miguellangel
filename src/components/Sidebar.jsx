import React from 'react'
import { Suspense } from 'react'
import SidebarButton from './SidebarButton.js'
import RoadmapSVG from './RoadmapSVG.js'
const Intro = React.lazy( () => import('./Intro.js') )



const Sidebar = ({ ...props }) => {
    
    const listeners = React.useRef({})
    const sidebar = React.useRef()
    const isPortrait = React.useRef(window.matchMedia('(orientation: portrait)'))
    const isDark = React.useRef(true)

    const memoize = (label, fn) =>
		listeners.current[label]
			? listeners.current[label]
			: (listeners.current[label] = fn)

    /* determine whether window is portrait mode */
        // && window.matchMedia('(max-width:600px)').matches

    /* start inactive in small portrait mode */



    const handleToggle = ClickEvent => {
		// denote user click vs reorientation event dispatch with event.isTrusted
		//only toggle if explicit click by user
		if ( ClickEvent.isTrusted ) sidebar.current.classList.toggle('sb-active')
		
		if ( sidebar.current.classList.contains('sb-active') ) {
			
			if ( isPortrait.current.matches ) document.querySelector('main#content').removeEventListener('click', memoize('isoutside'))
			
		} else {
		
			if ( isPortrait.current.matches ) document.querySelector('main#content').addEventListener('click', memoize('isoutside', handleToggle))
			else document.querySelector('main#content').removeEventListener('click', memoize('isoutside'))
			
		}

    }

    const handleBGSwitch = () => {
        document.querySelector('#root').classList.toggle('dark')

        isDark.current = !isDark.current

    }
    
	React.useEffect(() => {

        /* re-determine statusbar display mode on orientation update 
            but check whether to set statusbar active or not 
            depending on already-existing value*/
        isPortrait.current.addEventListener('change', e => document.querySelector('#sidebar-toggle').dispatchEvent(new Event('click', {bubbles: true})))
    
        

        /* change dom aria values conditionally*/

	})
	return (
		<nav ref={ sidebar }className="sb-active" id="sidebar-placeholder">
            <div id="sidebar">
    			<div id="intro">
                    { /*lazyload component*/ }
                    <Suspense fallback={<div>Loading</div>}>
                        <Intro />
                    </Suspense>
    			</div>
    			<div id="roadmapContainer">
                    <RoadmapSVG />
    			</div>
                <div className={`pillSwitchContainer`} onClick={ handleBGSwitch }>
                    <button id="bgSwitchButton"/>
                </div>

            </div>
            <button id="sidebar-toggle" onClick={ handleToggle }>
                <SidebarButton />
            </button>

		</nav>
	)
}
export default Sidebar;
import React from 'react'
import $ from 'jquery'
import { Suspense } from 'react'
const Intro = React.lazy( () => import('./Intro.js') )

const Sidebar = ({ props }) => {

    /* determine whether window is portrait mode => disable statusbar */
    let isPortraitSmall = window.matchMedia('(orientation: portrait)').matches
        && window.matchMedia('(max-width:576px)').matches

    const [isActive, setActive] = React.useState(isPortraitSmall ? false : true)

	React.useEffect(() => {
        /* re-determine statusbar display mode on orientation update */
        window.onorientationchange = () => setActive(!isActive)
        
        /* change dom aria values */
        isActive 
        ? $('#root').attr('grid-sidebar-show', true)
        : $('#root').attr('grid-sidebar-show', false)

	})
	return (
		<div className="sidebar">
            { /*on-click event update statusbar display mode*/ }
			<button id="sidebar-toggler" onClick={() => setActive(!isActive)}></button>
			<div className={isActive ? "row" : "row hide"} id="intro">
                { /*lazyload component*/ }
                <Suspense fallback={<div>Loading</div>}>
                    <Intro shouldHide={!isActive}/>
                </Suspense>
			</div>
			<div className={isActive ? "row" : "row hide"}>
			</div>
		</div>
	)
}
export default Sidebar;
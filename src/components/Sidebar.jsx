import React from 'react'
import $ from 'jquery'
import { Suspense } from 'react'
const Intro = React.lazy( () => import('./Intro.js') )

const Sidebar = ({ props }) => {

    /* determine whether window is portrait mode */
    let isPortraitSmall = window.matchMedia('(orientation: portrait)').matches
        && window.matchMedia('(max-width:576px)').matches

    /* start inactive in small portrait mode */
    const [isActive, setActive] = React.useState(isPortraitSmall ? false : true)
    const [isModifiedPurposefully, setModifiedPurposely] = React.useState(false)

    const handleClick = () => {
        setActive(!isActive)
        setModifiedPurposely(true)
    }
    /* determine whether state modified purposely --fix bug where 
        e.g. hide sidebar in landscape, then switch to portrait, 
        the sidebar is shown  */

	React.useEffect(() => {
        /* re-determine statusbar display mode on orientation update 
            but check whether to set statusbar active or not 
            depending on already-existing value*/
        window.onorientationchange = () => 
            isModifiedPurposefully ? setModifiedPurposely(false) : setActive(!isActive)

        /* change dom aria values conditionally*/
        isActive 
        ? $('#root').attr('grid-sidebar-show', true)
        : $('#root').attr('grid-sidebar-show', false)

	})
	return (
		<div className="sidebar">
            { /*on-click event update statusbar display mode*/ }
			<button id="sidebar-toggler" onClick={handleClick}></button>
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
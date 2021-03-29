import React from 'react'
import $ from 'jquery'
import { Suspense } from 'react'
import ProgressSVG from './ProgressSVG.js'
const Intro = React.lazy( () => import('./Intro.js') )



const Sidebar = ({ props }) => {

    /* determine whether window is portrait mode */
    let isPortraitSmall = window.matchMedia('(orientation: portrait)').matches
        && window.matchMedia('(max-width:576px)').matches

    /* start inactive in small portrait mode */
    const [isActive, setActive] = React.useState(isPortraitSmall ? false : true)
    const [isModifiedPurposefully, setModifiedPurposely] = React.useState(false)

    const [isDark, setDark] = React.useState(false)

    const handleToggleSidebar = () => {
        setActive(!isActive)
        setModifiedPurposely(true)
    }

    const handleSwitchBG = () => {
        !isDark
            ? $('#root, #sidebar-toggler, #bgSwitchButton').addClass('dark')
            : $('#root, #sidebar-toggler, #bgSwitchButton').removeClass('dark')

        setDark(!isDark)

    }

	React.useEffect(() => {
        /* re-determine statusbar display mode on orientation update 
            but check whether to set statusbar active or not 
            depending on already-existing value*/
        window.onorientationchange = () => 
            isModifiedPurposefully ? setModifiedPurposely(!isModifiedPurposefully) : setActive(!isActive)

        /* change dom aria values conditionally*/
        isActive 
        ? $('.sidebar').attr('hide', false)
        : $('.sidebar').attr('hide', true)

	})
	return (
		<div className="sidebar">
            <div className="container-true">
                { /*on-click event update statusbar display mode*/ }
    			<button id="sidebar-toggler" onClick={handleToggleSidebar} />
    			<div className={isActive ? "row" : "row hide"} id="intro">
                    { /*lazyload component*/ }
                    <Suspense fallback={<div>Loading</div>}>
                        <Intro shouldHide={!isActive}/>
                    </Suspense>
    			</div>
    			<div id="roadmapContainer" className={isActive ? "row" : "row hide"}>
                    <ProgressSVG />

    			</div>
                <div className="pillSwitchContainer" onClick={handleSwitchBG}>
                    <button id="bgSwitchButton"/>
                </div>

            </div>
		</div>
	)
}
export default Sidebar;
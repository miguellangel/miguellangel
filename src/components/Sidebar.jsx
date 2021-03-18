import React from 'react'
import $ from 'jquery'

const Sidebar = ({ props }) => {

    const [isActive, setActive] = React.useState(true)

	let handleToggle = e => {

        setActive(!isActive)
        console.log('collapsed status', isActive)

		var rootNode = e.target.parentNode.parentNode.parentNode

        isActive 
            ? $(rootNode).attr('grid-sidebar-collapse', 'true')
            : $(rootNode).attr('grid-sidebar-collapse', 'false') 



		// $(rootNode).attr('class', 'sidebar-collapse')
	}

	React.useEffect(() => {
		// console.log(props.breakpoint)
	})
	return (
		<div className="container-true">
			<button id="sidebar-toggler" onClick={handleToggle}></button>
			<div className="row">
			</div>
			<div className="row">
			</div>
		</div>
	)
}
export default Sidebar;
import React from 'react'
import { anime } from 'react-anime'
// import $ from 'jquery'

/*Components*/
// import SquaredItem from './SquaredItem.js'



const Projects = ({children, style}) => {

	let paths = {
		d: 'M 600 38.66 C 750 43.29 750 34.03 900 38.66 C 1050 43.29 1050 34.03 1200 38.66 L 1200 0 L 600 0 L 600 38.66 M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66',
		dx: 'M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66 M -600 38.66 C -450 43.29 -450 34.03 -300 38.66 C -150 43.29 -150 34.03 0 38.66 L 0 0 L -600 0 L -600 38.66',
	}

	React.useEffect(() => {
		anime({
			targets: '#testSVG',
			keyframes: [{d: paths.dx, duration: 7000}],
			easing: 'linear',
			direction: 'normal',
			loop: true,
			autoplay: true,
		}).restart()
	})

    return (
        <>
            <section id="projects">

                <div className='container-true' style={{minWidth: '100vw', height: '50px'}}>
	            	<h3 style={style.common.h3}>my projects</h3>
                	{children}

                </div>

                {/*<SquaredItem />*/}

			</section>
        </>
    )
}

export default Projects;

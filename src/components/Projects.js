import React from 'react'
// import { anime } from 'react-anime'


const Projects = ({children}) => {

	React.useEffect(() => {
		// anime({
		// 	targets: '#left, #right',
		// 	d: (el, i) => ['M 0 18.66 C 150 23.29 150 14.03 300 18.66 C 450 23.29 450 14.03 600 18.66 L 600 0 L 0 0 L 0 18.66 M -600 18.66 C -450 23.29 -450 14.03 -300 18.66 C -150 23.29 -150 14.03 0 18.66 L 0 0 L -600 0 L -600 18.66'],
		// 	duration: 8000,
		// 	easing: function(el, i, total) {
		// 	    return function(t) {
		// 	      return Math.pow(Math.sin(t * (i + 1)), total);
		// 	    }
		// 	  },
		// 	loop: true,
		// 	direction: 'alternate',
		// 	begin: (el, i, l) => {
		// 	}
		// })
	})

    return (
        <>
            <section id="projects">
	            <h3 style={{position: 'absolute', display: 'inline-flex'}}>my projects</h3>

                {children}

			</section>
        </>
    )
}

export default Projects;

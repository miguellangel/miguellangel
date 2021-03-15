import React from 'react'
import img from '../workspace.svg'
import jb from '../junglebooks.svg'
import dino from '../dino.svg'

const ProjectItem = ({children}) => {
	React.useEffect(() => {
	})

	return (
		<div className = 'container'>
			<div>
				<img alt="portfolio" src={img} width="50%" height="50%"/>
				<a href="#main">Portfolio (this)</a>
			</div>
			<div>										
				<img alt="Junglebooks" src={jb} width="50%" height="50%"/>
				<a href="https://gitlab.com/Sommer_C/cs329e-ibd">Junglebooks</a>
			</div>
			<div>
				<img alt="Dino Game" src={dino} width="50%" height="50%"/>
				<a href="https://github.com/ataricoder/group_22_assignment7/tree/master/dinogame">Dino Game</a>
			</div>
			<div>
				<img alt="Planner" src={img} width="50%" height="50%"/>
				<a href="google.com">Planner</a>
			</div>
			<div>
				<img alt="Plantr" src={img} width="50%" height="50%"/>
				<a href="google.com">Plantr</a>
			</div>
		</div>
	)
}

export default ProjectItem
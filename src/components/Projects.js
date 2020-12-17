import React from 'react';

const Projects = ({children}) => {
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
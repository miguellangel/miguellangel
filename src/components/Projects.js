import React from 'react'

const Projects = () => {

    const handleLetterAnim = (letterGroup) => {
        document.querySelectorAll(letterGroup).forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.classList.toggle('active')
                setTimeout(() => item.classList.remove('active'), 1000)
            }, {once: false})
        })
    }

    React.useEffect(() => {
        handleLetterAnim('#projects .anim')
    })


    return (
        <section id="projects">
            <div className="animHeader">
                {String("Projects").split('').map((item, index) => 
                    <span key={index}><b className="anim">{item}</b></span>
                )}
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum pariatur, magni non voluptates mollitia quasi doloribus? Ad, excepturi possimus.</p>
            </div>
        </section>
    )
}

export default Projects
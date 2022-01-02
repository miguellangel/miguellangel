import React from 'react'

const About = () => {

    const handleLetterAnim = (letterGroup) => {
        document.querySelectorAll(letterGroup).forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.classList.toggle('active')
                setTimeout(() => item.classList.remove('active'), 1000)
            }, {once: false})
        })
    }

    React.useEffect(() => {
        handleLetterAnim('#about .anim')
    })
    return (
        <section id="about" className="active">
            <div className="animHeader">
                {String("Me Myself & I").split('').map((i, index) => 
                    <span key={index}><b className="anim">{i}</b></span>
                )}
            </div>
            <div className="text">
                <p>
                    I am a software engineer located in Austin, TX. <br></br>Fluid Responsive Layouts, UI Animations, and Semantic Code are my passion.<br></br>
                    My Alma Mater, <span>The University of Texas at Austin</span>, engraved in me the importance of work ethic and team collaboration amidst 
                    a vast number of fun and challenging projects which employ industry-standard practices in the real world.<br></br>
                    
                    Having a detail-oriented mindset is one of my most powerful strengths, as there will always be a new problem to tackle
                    until a project reaches its utmost perfect state. <br></br>On top of that, I excel in team environments, 
                    this being either leadership or support.<br></br>
                    
                    LET'S MAKE <span>beau idéal</span> THE STANDARD</p>
            </div>
        </section>
    )
}

export default About
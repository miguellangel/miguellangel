import React from 'react'

const Skills = () => {

    const handleLetterAnim = (letterGroup) => {
        document.querySelectorAll(letterGroup).forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.classList.toggle('active')
                setTimeout(() => item.classList.remove('active'), 1000)
            }, {once: false})
        })
    }

    React.useEffect(() => {
        handleLetterAnim('#skills .anim')
    })

    return (
        <section id="skills">
            <div className="animHeader">
                {String("Skills & Experience").split('').map((item, index) => 
                    <span key={index}><b className="anim">{item}</b></span>
                )}
            </div>
            <div className="text">
                <p>I make detail-rich responsive web apps that are fast and built using the most up-to-date practices in the frontend world. <br></br>
                I mostly thrive in the frontend but have gone full-stack for a certain number of projects. See them all below!
                I pride myself in knowing a little bit of everything whether it is graphics, animation, photoshop, you name it.
                </p>
            </div>
        </section>
    )
}

export default Skills 
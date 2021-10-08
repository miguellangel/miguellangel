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
        handleLetterAnim('.anim')
    })
    return (
        <>
            <div className="animHeader">
                {['M', 'e', ' ', 'M', 'y', 's', 'e', 'l', 'f', ' ', '&', ' ', 'I'].map((i, index) => 
                    <span key={index}><b className="anim">{i}</b></span>
                )}
            </div>
        </>
    )
}

export default About
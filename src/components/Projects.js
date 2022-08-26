import React, { Suspense } from 'react'

import Project1_A from './media/projects/audiophile-1.png'
import Project1_B from './media/projects/audiophile-2.png'
import Project1_C from './media/projects/audiophile-3.png'
import Project2_A from './media/projects/ipaddress.png'


const Projects = () => {

    const content = {
        'Project1': {
            name: 'Audiophile Mock e-Commerce',
            img_previews: [Project1_A, Project1_B, Project1_C],
            description: 'An e-commerce web app built with the Next.js framework. Design and inspiration taken from a Frontendmentor challenge.',
            frameworks: ['Next.js', 'api routes', 'frontendmentor'],
            links: {hostedAt: 'https://audiophile-ecommerce-five.vercel.app/', source: 'https://github.com/miguellangel/audiophile-ecommerce'}
        }, 
        'Project2': {
            name: 'IP Address Tracker',
            img_previews: [Project2_A],
            description: 'A responsive web app whose sole purpose is to return the geolocation of an ip address.',
            frameworks: ['Leaflet API', 'React', 'html', 'no-bloat-css', 'frontendmentor'],
            links: {hostedAt: 'https://miguellangel.github.io/ip-address-tracker/', source: 'https://github.com/miguellangel/ip-address-tracker'}
        }
    }

    const HeaderRef = React.useRef()

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
        <section id="projects" className="">
            <div className="animHeader" ref={HeaderRef}>
                {String`Projects`.split('').map((item, index) => 
                    <span key={index}><b className="anim">{item}</b></span>
                )}
            </div>
            <div className="featuredContainer">
                <Project content={content['Project1']}/>
                <Project content={content['Project2']}/>


            </div>
        </section>
    )
}

const Project = (data) => {
    React.useEffect(() => {
    })
    return (
        <div className='featuredItem'>
            <div className='featuredDescription'>
                <div id="header">
                    <h6>FEATURED PROJECT</h6>
                    <h2>{data.content.name}</h2>
                </div>
                <div id="description">
                    <p>{data.content.description}</p>
                </div>
                <div id="frameworks">
                    <ul>
                        {data.content.frameworks.map((item, index) =>
                            <li key={`frameworkKey-${index}`}>{item}</li>
                        )}
                    </ul>
                </div>
                <div id="links">
                    <a href={data.content.links.hostedAt} target="_blank" rel="noopener noreferrer"> </a>
                    <a href={data.content.links.source} target="_blank" rel="noopener noreferrer"> </a>

                </div>

            </div>
            <div className='showcase'>
                <Suspense fallback='null'>
                    <img src={data.content.img_previews[0]} alt="audiophile1" width="100%" height="100%" align="bottom" style={{objectFit: 'cover'}}/>
                </Suspense>
            </div>
        </div>
    )
}

export default Projects
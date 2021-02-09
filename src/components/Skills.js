import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap'
import { anime } from 'react-anime'
import $ from 'jquery'



const SkillAnimation = ({skillName, skillPercent}) => {

    return (
        <svg id = {`svg-${skillName}`} viewBox="0 0 600 70" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'super'}}>
            <defs>
                <path id = {`skill-${skillName}-textPath`} d="M 15 36 L 515 35"></path>
                <path id = {`skill-${skillName}-percentTextPath`} d="M 490 65 L 570 65"></path>
                <filter id={`skill-${skillName}-insetShadow`} x="-100%" y="-100%" width="200%" height="200%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="5"/>
                    <feOffset dx="5" dy="5" result="offsetblur"/>
                    <feFlood floodColor="#005d3a3a" result="color"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
                <filter id = {`skill-${skillName}-barShadow`} >
                    <feDropShadow dx="0.1" dy="0.1" stdDeviation="2" />
                </filter>
            </defs>
            {/*<rect x="5" y="50" width='450' height="17.75" style={{fill: '#f0f0f0', filter: `url(#skill-${skillName}-insetShadow)`}} rx="7.5" ry="7.5"></rect>*/}
            <rect id = {`skillProgressBar-${skillName}`} x="5" y="50.5" width='0' height="17" style={{fill: 'RGB(255, 0, 0)', filter: `url(#skill-${skillName}-insetShadow)`}} rx="7.5" ry="7.5"></rect>

            <text style={{fontFamily: 'Quicksand', fontSize: '3em'}}>
                <textPath href={`#skill-${skillName}-textPath`}>{skillName}</textPath>
            </text>
            <text style={{fontFamily: 'Quicksand', fontSize: '2em', letterSpacing: '3.125'}}>
                <textPath id = {`skill-${skillName}-percentView`} href={`#skill-${skillName}-percentTextPath`}>0</textPath>
            </text>

        </svg>

    )
}

const Skills = ({children, style}) => {
    //  each language/skill will consist of level of comprehension and amount of experience working with it.
    // amount of experience for each skill will be calculated based on the time spent working on projects over the total amount of time I have been programming.
    let frontend = {
        skills: {
            python: [0.9, 5],
            html: [0.9, 5],
            css: [0.85, 2.5],
            javascript: [0.65, 2],
            SQL: [0.5, 0.5],
            java: [0.3, 0.5],
            swift: [0.3, 0.5],
        },
        libraries: {
            react: [0.7, 0.5],
            jQuery: [0.6, 1],
            flask: [0.5, 0.5],
            postgreSQL: [0.5, 0.5],
            'processing-java': [0.5, 0.5],
            'three-js': [0.5, 0.5],
            'anime-js': [0.4, 0.5],
        }
    }


     let backend = {}
     let dataSci = {}

    let skillset = {'frontend': frontend, 'backgend': backend, 'data-sci': dataSci}

    let skillMap = Object.keys(skillset.frontend.skills).map(skill =>
            <span className="skillSpanContainer" key={skill.toString()}>
                <SkillAnimation skillName = {skill.toString()} skillPercent = {Object.values(skillset.frontend.skills[String(skill)])[0]} />
            </span>
        )

    let libraryMap = Object.keys(skillset.frontend.libraries).map(library =>
            <span className='skillSpanContainer' key={library.toString()}>
                <SkillAnimation skillName = {library.toString()} skillPercent = {Object.values(skillset.frontend.libraries[String(library)])[0]} />
            </span>
        )


    React.useEffect(() => {

        const animateProgressBars = (group) => {
            Object.keys(group).forEach((el) => {

                var progressLog = $(`#skill-${el}-percentView`)
                var skillPercent = Object.values(group[el])[0]

                anime({
                    targets: `#skillProgressBar-${el}`,
                    width: skillPercent * 450,
                    fill: [`RGB(255, 0, 0`, `RGB(${(510 * skillPercent) > 255 ? Math.abs((510 * skillPercent) - 510) : 255}, ${(510 * skillPercent) > 255 ? 255 : (510 * skillPercent) }, 0)`],
                    // width: 300,
                    easing: 'easeInOutQuad',
                    duration: 1500,
                    direction: 'alternate',
                    loop: false,
                    autoplay: true,
                    delay: 1000,
                    update: (anim) => {
                        progressLog.html(`${Math.round(anim.progress * skillPercent)}%`)
                    },
                    complete: (anim) => {
                        // anime.remove(anim)
                    }

                }).restart()
            })
        }
        animateProgressBars(frontend.skills)
        animateProgressBars(frontend.libraries)

        setTimeout(() => console.log(anime.running.length), 5000)
    })

    return (
        <>
            <section id="skills">
                <div className='container-true' style={{minWidth: '100vw', height: '50px'}}>
                    <h3 style={style.common.h3}>my skillset</h3>
                    {children}
                </div>
{/*                    <Row className='center'>
                        <Col>*/}
                            <Container>
                                <div id='skillsetDetailsContainer'>
                                    <Tabs defaultActiveKey="languages" id="uncontrolled-tab-example" style={{display: 'inline-flex'}}>
                                        <Tab eventKey="languages" title="languages" >
                                            <div style={style.skills}>
                                                {skillMap}
                                            </div>
                                        </Tab>
                                        <Tab eventKey="technologiesAndFrameworkds" title="Technologies and Frameworks" >
                                            <div style={style.skills}>
                                                {libraryMap}
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>

                            </Container>
                        {/*</Col>*/}
                    {/*</Row>*/}

            </section>
        </>
    )
}

export default Skills;
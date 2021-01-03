import React from 'react';
import ProgressBar from 'progressbar.js';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap'

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const Skills = ({children}) => {
    //  each language/skill will consist of level of comprehension and amount of experience working with it.
    // amount of experience for each skill will be calculated based on the time spent working on projects over the total amount of time I have been programming.
    let frontend = {
        'skills' : {
            'html': [0.90, 5], 'python': [0.90, 5], 'css': [0.85, 2.5], 'javascript': [0.65, 2], 'SQL': [0.5,0.5], 'java': [0.3, 0.5], 'swift': [0.3, 0.5]
        },
        'libraries': {
            'react': [0.7, 0.5]

        }
     };

    let skillset = {'frontend': frontend}

    let skillMap = Object.keys(skillset.frontend.skills).map(skill =>
            <span className="skillSpanContainer" key={skill.toString()} >
                <svg id={String('svg' + capitalize(skill))} xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 300 100">
                    <path fillOpacity="0" strokeWidth="1" stroke="#bbb" d="M 0 50 L 300 50 " style={{borderRadius: '25px'}}/>
                    <path id={String('svgPath' + capitalize(skill))} stroke="lightblue" fill="none" strokeWidth='10' fillOpacity="0" d="M 0 50 L 300 50 " style={{borderRadius: '25px'}}/>
                    <text style={{font: '24px Montserrat', transform: 'translate(0, -10px)'}}>
                        <textPath href={String('#svgPath' + capitalize(skill))}>{skill.toString()}</textPath>
                    </text>
                </svg>
                <span style={{ margin: '8px',padding: '8px', color: 'white', fontFamily: 'system-ui', fontWeight: 800 }} className="badge bg-info rounded-pill">{`${Object.values(skillset.frontend.skills[String(skill)])[0] * 100}%`}</span>
            </span>
        )

    let libraryMap = Object.keys(skillset.frontend.libraries).map(library =>
            <span className='skillSpanContainer' key={library.toString()}>
                <svg id={String('svg' + capitalize(library))} xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 300 100">
                    <path fillOpacity="0" strokeWidth="1" stroke="#bbb" d="M 0 50 L 300 50 " style={{borderRadius: '25px'}}/>
                    <path id={String('svgPath' + capitalize(library))} stroke="lightblue" fill="none" strokeWidth='10' fillOpacity="0" d="M 0 50 L 300 50 " style={{borderRadius: '25px'}}/>
                    <text style={{font: '24px Montserrat', transform: 'translate(0, -10px)'}}>
                        <textPath href={String('#svgPath' + capitalize(library))}>{library.toString()}</textPath>
                    </text>
                </svg>
                <span style={{ margin: '8px',padding: '8px', color: 'white', fontFamily: 'system-ui' }} className="badge bg-info rounded-pill"> {`${Object.values(skillset.frontend.libraries[String(library)])[0] * 100}%`} </span>
            </span>
        )


    React.useEffect(() => {
        const animateSVGs = () => {
            Object.keys(skillset.frontend.skills).map(skill => 
                new ProgressBar.Path(String('#svgPath' + capitalize(skill)), {
                    easing: 'easeInOut',
                    duration: 1400,
                }).animate(Object.values(skillset.frontend.skills[String(skill)])[0])
            );
            Object.keys(skillset.frontend.libraries).map(library =>
                new ProgressBar.Path(String('#svgPath' + capitalize(library)), {
                    easing: 'easeInOut',
                    duration: 1400,
                }).animate(Object.values(skillset.frontend.libraries[String(library)])[0])
            )
        }
        animateSVGs()

    })

    return (
        <>
            <section id="skills">
                <h3 style={{position: 'absolute', display: 'table-caption'}}>my skillset</h3>
                {children}
                    <Row className='center'>
                        <Col>
                            <Container id='skillsetDetailsContainer'>
                                <Tabs defaultActiveKey="languages" id="uncontrolled-tab-example" style={{display: 'inline-flex'}}>
                                    <Tab eventKey="languages" title="languages">
                                        {skillMap}
                                    </Tab>
                                    <Tab eventKey="libraries" title="libraries">
                                        {libraryMap}
                                    </Tab>
                                </Tabs>
                            </Container>
                        </Col>
                    </Row>

            </section>
        </>
    )
}

export default Skills;
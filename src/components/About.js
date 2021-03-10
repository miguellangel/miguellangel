import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import tower from "../UT-Tower.svg";
import nlp from "../nlp.png";
import workspace from "../workspace.svg"


const About = ({children, style}) => {

    return (
        <section id="about">
            <div className="container-true" style={{width: '100vw', height: '78px'}}>
                <h3 style={style.common.h3}>about me</h3>
                {children}
            </div>

            <Container style={{maxWidth:'80vw'}}>
                <Row xs={1} md={3} lg={3}>
                    <Col className="">
                            <Row md={1} className="">
                                <Col>
                                    <p className="center about-p" style={style.about.p}>
                                        I am a 2020 <span><a href="http://utexas.edu">University of Texas at Austin</a></span> graduate with a Major in <a href="https://liberalarts.utexas.edu/linguistics/">Linguistics</a> and <a href="https://www.cs.utexas.edu/undergraduate-program/academics/elements-computing">Certificate in Computer Science.</a>
                                    </p>

                                </Col>
                                <Col>
                                    <img className="about-img" alt="placeholder for now!" src={tower} width="150px" height="150px" />
                                </Col>
                            </Row>
                    </Col>
                    <Col className="">
                        <Row className="" md={1} style={{padding:"30px"}}>
                            <Col>
                                <img className="about-img" alt="web-dev" src={workspace} width="250px" height="250px" />
                            </Col>
                            <Col>
                                <p className="center about-p" style={style.about.p}>My professional interests are Frontend Development and Machine Learning as applied to Natural Language Processing (NLP)</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="">
                        <Row className="" md={1}>
                            <Col>
                                <p className="center about-p" style={style.about.p}>I plan to further my academic career in the future by pursuing a Masters in Computational Linguistics and Computer Science.</p>
                            </Col>
                            <Col>
                                <img className="about-img" alt="comp-lin" src={nlp} width="150px" height="150px" />
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
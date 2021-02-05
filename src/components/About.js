import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import tower from "../UT-Tower.png";
import nlp from "../nlp.png";


const About = ({children, style}) => {

    return (
        <section id="about">
            <div className="container-true" style={{width: '100vw', height: '50px'}}>
                <h3 style={style.common.h3}>about me</h3>
                {children}
            </div>

            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col className="">
                            <Row xs={1} md={2} className="">
                                <Col>
                                    <img className="about-img" alt="placeholder for now!" src={tower} width="150px" height="150px" />
                                </Col>
                                <Col>
                                    <p className="about-p" style={style.about.p}>
                                        I am a 2020 <span><a href="http://utexas.edu">University of Texas at Austin</a></span> graduate with a Major in <a href="https://liberalarts.utexas.edu/linguistics/">Linguistics</a> and <a href="https://www.cs.utexas.edu/undergraduate-program/academics/elements-computing">Certificate in Computer Science.</a>
                                    </p>

                                </Col>
                            </Row>
                    </Col>
                    <Col className="">
                        <Row className="" md={1}>
                            <Col>
                                <img className="about-img" alt="web-dev" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" width="250px" height="250px" />
                            </Col>
                            <Col>
                                <p className="about-p" style={style.about.p}>My professional interests are Frontend Development and Machine Learning as applied to Natural Language Processing (NLP)</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="">
                        <Row className="" xs={2}>
                            <Col>
                                <img className="about-img" alt="comp-lin" src={nlp} width="150px" height="150px" />
                            </Col>
                            <Col>
                                <p className="about-p" style={style.about.p}>I plan to further my academic career in the future by pursuing a Masters in Computational Linguistics and Computer Science.</p>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
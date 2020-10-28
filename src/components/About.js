import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const About = ({tower, nlp}) => {
    return (
        <>
            <Container className="fullsize">
                <Row className="fullsize" xs={1} md={3}>
                    <Col className="">
                        <Container className="fullsize">
                            <Row xs={1} md={2} className="center">
                                <Col>
                                    <img className="about-img" alt="placeholder for now!" src={tower} width="150px" height="150px" />
                                </Col>
                                <Col>
                                    <p className="about-p">
                                        I am a 2020 <span><a href="http://utexas.edu">University of Texas at Austin</a></span> graduate with a Major in <a href="https://liberalarts.utexas.edu/linguistics/">Linguistics</a> and <a href="https://www.cs.utexas.edu/undergraduate-program/academics/elements-computing">Certificate in Computer Science.</a>
                                    </p>
                                </Col>
                            </Row>


                        </Container>
                    </Col>
                    <Col className="">
                        <Container className="fullsize" >
                            <Row className="center">
                                <Col>
                                    <img className="about-img" alt="web-dev" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" width="300em" height="300em" />
                                </Col>
                                <Col>
                                    <p className="about-p">My professional interests are in Frontend Development and Machine Learning as applied to Natural Language Processing (NLP)</p>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                    <Col className="">
                        <Container className="fullsize" >
                            <Row className="center">
                                <Col>
                                    <p className="about-p">I plan to further my academic career in the future by pursuing a Masters in Computational Linguistics and Computer Science.</p>
                                </Col>
                                <Col>
                                    <img className="about-img" alt="comp-lin" src={nlp} width="150px" height="150px" />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default About;
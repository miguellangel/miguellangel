import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container className="fullsize">
                <Row className="fullsize">
                    <Col className="fullsize">
                        <p className="center">
                            I am a 2020 <span><a href="http://utexas.edu">University of Texas at Austin</a></span> graduate with a Major in <a href="https://liberalarts.utexas.edu/linguistics/">Linguistics</a> and <a href="https://www.cs.utexas.edu/undergraduate-program/academics/elements-computing">Certificate in Computer Science.</a>
                        </p>
                    </Col>
                    <Col className="fullsize">
                        <p className="center">My professional interests are in Frontend Development and Machine Learning as applied to Natural Language Processing (NLP)</p>
                    </Col>
                    <Col className="fullsize">
                        <p className="center">
                            I plan to further my academic career in the future by pursuing a Masters in Computational Linguistics and Computer Science.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default About;
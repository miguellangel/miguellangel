import React from 'react';
import {Row, Col} from "react-bootstrap";

const MainBody = ({portrait}) => {
    return (
        <section id="main">
            <Row  className="fullsize" id="intro" xs={1} md={1} lg={2}>
                <Col sm={8} lg={4}>
                    {/* <Container style={{width: "100%", height: "100%"}}> */}
                        <img id="portrait" src={portrait} alt="This is me: Miguel Arriaga" />
                    {/* </Container> */}
                </Col>
                <Col sm={4} lg={8}>
                    <h4 className="center el">THIS IS ME</h4>
                    <h1 className="center el">MIGUEL ARRIAGA</h1>
                </Col>
            </Row>
    </section>
    
    );
}
export default MainBody;

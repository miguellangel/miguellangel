import React from 'react';
import { Row, Col } from 'react-bootstrap'
import portrait from "../portrait1.png";


const Intro = ({style}) => {
    // let colStyles = {
    //     maxWidth: '100% !important'
    // }
    return (
        <section id="main" style={{width: '100vw', maxWidth: '100vw'}}>
            <Row id="intro" xs={1} sm={2}>
                <Col sm={4}>
                    <img id="portrait" src={portrait} alt="This is me: Miguel Arriaga" style={style.intro.portrait}/>
                </Col>
                <Col sm={8}>
                    <div className="center">
                        <h4>hello, i am</h4>
                        <h1>MIGUEL ANGEL</h1>
                    </div>
                </Col>
            </Row>
    </section>
    
    );
}
export default Intro;

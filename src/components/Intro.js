import React from 'react';
import {Container} from "react-bootstrap";

const MainBody = () => {
    return (
        <Container id="intro" className="fullsize center">
            <h4>THIS IS ME</h4>
            <h1>MIGUEL ARRIAGA</h1>
            <div>
                <a href="#about" class="btn btn-primary">Learn more about me!</a>                
            </div>
        </Container>
    );
}
export default MainBody;

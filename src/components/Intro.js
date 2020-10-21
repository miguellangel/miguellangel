import React from 'react';
import {Container} from "react-bootstrap";

const MainBody = () => {
    const scrollToView = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <Container id="intro" className="fullsize center">
            <h4>THIS IS ME</h4>
            <h1>MIGUEL ARRIAGA</h1>
            <div>
                <a onClick={ () => scrollToView("#about")} href="#about" className="btn btn-primary">Learn more about me!</a>                
            </div>
        </Container>
    );
}
export default MainBody;

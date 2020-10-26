import React from 'react';
import {Container} from "react-bootstrap";

const MainBody = () => {
    const scrollToView = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <Container id="intro" className="fullsize">
            <h4>THIS IS ME</h4>
            <h1>MIGUEL ARRIAGA</h1>
            <div>
                <button onClick={ () => scrollToView("#about")} className="btn btn-primary">Learn more about me!</button>                
            </div>
        </Container>
    );
}
export default MainBody;

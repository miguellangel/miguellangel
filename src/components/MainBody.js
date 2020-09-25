import React from 'react';
import './MainBody.css';
// import { Nav, Button, Container, Row, Col } from "react-bootstrap";

const MainBody = ({width, height}) => {
    return (
        <>
            <div id = "intro" style = {{"width": "100%", "height" : height}}></div>
        </>
    );
}
export default MainBody;
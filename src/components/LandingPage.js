import React, { useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import WindowSize from "./WindowSize.js";
// import SideBar from './SideBar.js';
import NavBar from './NavBar.js';
import MainBody from './MainBody.js';

// Limit the number of resize calls
function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

const LandingPage = () => {
    const [dimensions, setDimensions] = useState({
        width : WindowSize().myWidth,
        height : WindowSize().myHeight

    })

    React.useEffect( () => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width : WindowSize().myWidth,
                height : WindowSize().myHeight
            })
        }, 500)
        window.addEventListener('resize', debouncedHandleResize);
        return _ => {
            // this function is called after function called by useEffect
            window.removeEventListener('resize', debouncedHandleResize);
        }
    })

    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col lg={12}>
                        <MainBody width = {dimensions.width} height = {dimensions.height} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LandingPage;
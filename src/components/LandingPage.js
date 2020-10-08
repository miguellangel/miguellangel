import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import WindowSize from "./WindowSize.js";
// import SideBar from './SideBar.js';
import NavBar from './NavBar.js';
import Intro from './Intro.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './LandingPage.scss';
import portrait from '../portrait.png';

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
    const [dimensions, setDimensions] = useState({width: WindowSize().myWidth, height: WindowSize().myHeight})

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({width: WindowSize().myWidth, height: WindowSize().myHeight})
		}, 500)
		
		const debouncedStoreScroll = debounce(function storeScroll() {
            document.documentElement.dataset.scroll = window.scrollY;
		}, 25)


		window.addEventListener('resize', debouncedHandleResize);
		document.addEventListener('scroll', debouncedStoreScroll);
		// call scrollstate for the first time
		debouncedStoreScroll();

        return _ => { // this function is called after function called by useEffect
            window.removeEventListener('resize', debouncedHandleResize);
        }
    })

    return (
        <>
            <NavBar/>
            <section id="main" >
                <Container className="fullsize">
                    <Row className="fullsize">
                        <Col className="justify-content-center">
                            <Container style={{width: "100%", height: "100%"}}>
                                <img id="portrait" src={portrait} alt="This is me: Miguel Arriaga" />
                            </Container>
                        </Col>
                        <Col>
                            <Intro />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills" >
                <Container >
                    <Skills />
                </Container>
            </section>
            <section id="projects" >
                <Container >
                    <Projects />
                </Container>
            </section>
            <section id="contact" >
                <Container >
                    <Contact />
                </Container>

            </section>
        </>
    );
}

export default LandingPage;

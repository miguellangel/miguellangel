import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
// import SideBar from './SideBar.js';
import NavBar from './NavBar.js';
import Intro from './Intro.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './LandingPage.scss';
import portrait from '../portrait.png';
import tower from '../UT-Tower.png';
import nlp from '../nlp.png';
// import html2canvas from 'html2canvas';
// import {canvasRGB} from 'stackblur-canvas';
// import $ from 'jquery';

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

    React.useEffect(() => {
		
		const debouncedStoreScroll = debounce(function storeScroll() {
            document.documentElement.dataset.scroll = window.scrollY;
        }, 25)
        
        // const renderBlurryNav = () => {
        //     html2canvas(document.getElementById('root')).then(canvas => {
        //         canvas.getContext('2d');
        //         document.body.appendChild(canvas);
                
        //         canvasRGB(canvas, 0, 0, $('canvas').width(), $('canvas').height(), 23);
                
        //         var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        //         document.getElementById('pageNav').style.background = 'url(' + image + ')';
        //     })
        // }

		document.addEventListener('scroll', debouncedStoreScroll);
		// call scrollstate for the first time
        debouncedStoreScroll();
        // renderBlurryNav();
        

        return _ => { // this function is called after function called by useEffect
        }
    })

    return (
        <>
            <NavBar/>
            <section id="main" >
                <Container className="fullsize">
                    <Row className="fullsize">
                        <Col sm={3} lg={3} className="justify-content-center">
                            <Container style={{width: "100%", height: "100%"}}>
                                <img id="portrait" src={portrait} alt="This is me: Miguel Arriaga" />
                            </Container>
                        </Col>
                        <Col sm={10} lg={9}>
                            <Intro />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="about">
                <About tower = {tower} nlp=  {nlp}/>
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

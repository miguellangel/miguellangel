import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import $ from 'jquery';
import { withBreakpoints} from 'react-breakpoints'


const NavBar = ({children, breakpoints, currentBreakpoint, style}) => {

    const scrollToView = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });

        $('.navbar-collapse').collapse('toggle');
        // trigger a click automatically so user does not end up having to click twice for nav to expand again
        $(document.getElementById('responsive-navbar-nav').previousElementSibling).trigger('click');
    }

    let incrNavHeight = () => {
                
        breakpoints[currentBreakpoint] < breakpoints.large 
            ? $('#responsive-navbar-nav').css({
                background: 'white',
                boxShadow: '0 7px 9px -7px black',
                borderRadius: '10px 0px 10px 10px'})
            : $('#responsive-navbar-nav').css({
                background: 'transparent',
                boxShadow: '0 7px 9px -7px transparent',
                borderRadius: '10px 0px 10px 10px'})
        }

    return (
        <Container fluid="true" id="navContainer" style={style.navBar}>
            {children}

            <Navbar id="pageNav" bg = "transparent" variant = "light" collapseOnSelect={true} expand="lg" fixed="top" style={style.navBar.nav}>
                <Container>
                    <Navbar.Brand>miguellangel</Navbar.Brand>                

                </Container>
                <Navbar.Toggle bg="primary" aria-controls="responsive-navbar-nav" onClick={incrNavHeight}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container className="justify-content-end">
                        <Nav activeKey="/home" >
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToView("#main")} >HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToView("#about")} >ABOUT</Nav.Link>
                            </Nav.Item>
                            <Nav.Link onClick={() => scrollToView("#skills")} >SKILLS</Nav.Link>
                            <Nav.Link onClick={() => scrollToView("#projects")} >PROJECTS</Nav.Link>
                            <Nav.Link onClick={() => scrollToView("#contact")} >CONTACT</Nav.Link>
                        </Nav>

                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}


export default withBreakpoints(NavBar);
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import $ from 'jquery';



const NavBar = ({children}) => {
    const scrollToView = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });

        $('.navbar-collapse').collapse('toggle');
        // trigger a click automatically so user does not end up having to click twice for nav to expand again
        $(document.getElementById('responsive-navbar-nav').previousElementSibling).trigger('click');
    };
    React.useEffect( () => {
    })
    return (
        <Container fluid="true" id="navContainer">
            {children}
            <Navbar id="pageNav" bg = "transparent" variant = "light" collapseOnSelect={true} expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>miguellangel</Navbar.Brand>                

                </Container>
                <Navbar.Toggle bg="primary" aria-controls="responsive-navbar-nav" />
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


export default NavBar;
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


let button_style = {
    // "color" : "#222222",
};

const NavBar = () => {

    const scrollToView = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    };
    React.useEffect( () => {
    })
    return (
        <Navbar id="pageNav" bg = "transparent" variant = "light" collapseOnSelect expand="lg" fixed="top">
            <Container>
                <Navbar.Brand style={ button_style }>miguellangel</Navbar.Brand>                

            </Container>
            <Navbar.Toggle bg="primary" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container className="justify-content-end">
                    <Nav activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link style={button_style} onClick={() => scrollToView("#main")} >HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={button_style} onClick={() => scrollToView("#about")} >ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Link onClick={() => scrollToView("#skills")} >SKILLS</Nav.Link>
                        <Nav.Link onClick={() => scrollToView("#projects")} >PROJECTS</Nav.Link>
                        <Nav.Link onClick={() => scrollToView("#contact")} >CONTACT</Nav.Link>
                    </Nav>

                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBar;
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


let button_style = {
    "color" : "#222222",
}
const NavBar = () => {
    React.useEffect( () => {
    })
    return (
        <Navbar id="pageNav" bg = "transparent" variant = "light" collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand style={ button_style }>miguellangel</Navbar.Brand>                
            <Navbar.Toggle bg="primary" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container className="justify-content-end">
                    <Nav activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link style={button_style} href="/home">HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={button_style} href="#about">ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>

                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBar;
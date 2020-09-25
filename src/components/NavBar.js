import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

let button_style = {
    "color" : "#222222",
}

const NavBar = () => {
    return (
        <>
            <Navbar id="pageNav" bg = "transparent" variant = "light" collapseOnSelect expand="lg" fixed="top">
                <Navbar.Brand style={ button_style }>miguellangel</Navbar.Brand>
                <Navbar.Toggle bg="primary" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey="/home" className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link style = {button_style} href="/home">HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style = {button_style} href="#about">ABOUT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#services">SERVICES</Nav.Link>
                        <Nav.Link href="#pages">PAGES</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavBar;
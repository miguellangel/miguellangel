import React, { useState } from 'react';
import './../App.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import './SideBar.css';
const SideBar = ({ width, height }) => {
    
    return (
        <div id = "sideBarContainer" style = {{height: height}}>
            This is a SideBar
            <Button variant="primary">This is a button</Button>
        </div>
    )
}
export default SideBar;
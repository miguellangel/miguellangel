import React from "react";

import WavySVG from "./WavySVG.js";
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import "./LandingPage.scss";
import portrait from "../portrait.png";
import tower from "../UT-Tower.png";
import nlp from "../nlp.png";
// import html2canvas from 'html2canvas';
// import {canvasRGB} from 'stackblur-canvas';
// import $ from 'jquery';

// Limit the number of resize calls
function debounce(fn, ms) {
    let timer;
    return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

const Portfolio = () => {
    
    React.useEffect(() => {
        const debouncedStoreScroll = debounce(function storeScroll() {
            document.documentElement.dataset.scroll = window.scrollY;
        }, 25);

        // const renderBlurryNav = () => {
        //     html2canvas(document.getElementById('root')).then(canvas => {
        //         canvas.getContext('2d');
        //         document.body.appendChild(canvas);

        //         canvasRGB(canvas, 0, 0, $('canvas').width(), $('canvas').height(), 23);

        //         var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        //         document.getElementById('pageNav').style.background = 'url(' + image + ')';
        //     })
        // }

        document.addEventListener("scroll", debouncedStoreScroll);
        // call scrollstate for the first time
        debouncedStoreScroll();
        // renderBlurryNav();

        return (_) => {
            // this function is called after function called by useEffect
        };
    });

    return (
        <>
            <NavBar>
                <WavySVG isNav={true} fill={"#fff"} />
            </NavBar>

            <Intro portrait={portrait} />

            <About tower={tower} nlp={nlp}>
                <WavySVG isNav={false} fill={"#fff"} />
            </About>

            <Skills>
                <WavySVG isNav={false} fill={"#fff"} />
            </Skills>

            <Projects>
                <WavySVG isNav={false} fill={"#fff"} />
            </Projects>

            <Contact>
                <WavySVG isNav={false} fill={"#fff"} />
            </Contact>
        </>
    );
};

export default Portfolio;

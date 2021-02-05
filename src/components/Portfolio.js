import React from "react";
import "./LandingPage.scss";

import WavySVG from "./WavySVG.js";
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

// import $ from 'jquery'

import { withBreakpoints } from 'react-breakpoints'

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

const Portfolio = ({breakpoints, currentBreakpoint}) => {

    let responsiveStyles = {
        common: {
            h3: {
                position: 'absolute',
                fontFamily: 'Dancing Script',
                letterSpacing: '5px',
                paddingLeft: breakpoints[currentBreakpoint] < breakpoints.large ? '20px' : '60px',
            }
        },
        navBar: {
            position: 'fixed',
            zIndex: 3,
            minWidth: '100vw',
            height: '79px',
            fontSize: currentBreakpoint === 'small' ? 'small' : currentBreakpoint === 'medium' ? 'medium' : currentBreakpoint === 'large' ? 'large' : currentBreakpoint === 'larger' ? 'large' : 'x-large',
            nav: {
                padding: breakpoints[currentBreakpoint] < breakpoints.extraLarge ? '1em' : null,
            }            
        },
        intro: {
            portrait: {
                left: breakpoints[currentBreakpoint] > breakpoints.small ? '100%' : '50%',
                top: breakpoints[currentBreakpoint] > breakpoints.small ? '50%' : '100%',
                transform: breakpoints[currentBreakpoint] > breakpoints.small ? 'translate(-100%, -50%)' : 'translate(-50%,-100%)'
            }
        },
        about: {
            p: {
                fontSize: currentBreakpoint === 'small' ? 'small' : currentBreakpoint === 'medium' ? 'medium' : currentBreakpoint === 'large' ? 'large' : currentBreakpoint === 'larger' ? 'large' : 'x-large',
                fontFamily: "Montserrat, sans-serif",
                textAlign: 'center',
            },
        },
        skills: {},
        projects: {},
        contact: {},
    }

    React.useEffect(() => {
        console.log(currentBreakpoint)

    })
    React.useEffect(() => {

        const debouncedStoreScroll = debounce(function storeScroll() {
            document.documentElement.dataset.scroll = window.scrollY;
        }, 25);

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
            <NavBar style={responsiveStyles} >
                <WavySVG fill={"#fff"} />
            </NavBar>

            <Intro style={responsiveStyles} />

            <About style={responsiveStyles} >
                <WavySVG fill={"#fff"} />
            </About>

            <Skills style={responsiveStyles} >
                <WavySVG fill={"#fff"} />
            </Skills>

            <Projects style={responsiveStyles} >
                <WavySVG fill={"#fff"} />
            </Projects>

            <Contact style={responsiveStyles} >
                <WavySVG fill={"#fff"} />
            </Contact>
        </>
    );
};

export default withBreakpoints(Portfolio);

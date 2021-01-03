import React from "react";
import anime from "animejs/lib/anime.es.js";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import { withBreakpoints } from "react-breakpoints";

const paths = {
    small: {
        filterProps: {'stdDeviation': 3},
        nav: {
            d:
                "M 0 94.216 C 150 107.324 150 81.108 300 94.216 C 450 107.324 450 81.108 600 94.216 L 600 0 L 0 0 L 0 94.216",
            dx:
                "M 0 94.216 C 135.00 96.59 135.00 73.00 270.00 84.79 C 405.00 96.59 405.00 73.00 600 94.216 L 600 0 L 0 0 L 0 94.216",
            viewBox: "0 0 600 100",
        },
        section: {
            d:
                "M 0 54.216 C 150 67.324 150 41.108 300 54.216 C 450 67.324 450 41.108 600 54.216 L 600 0 L 0 0 L 0 54.216",
            dx:
                "M 0 54.216 C 135.00 56.59 135.00 33.00 270.00 44.79 C 405.00 56.59 405.00 33.00 600 54.216 L 600 0 L 0 0 L 0 54.216",
            viewBox: "0 0 600 60",
        },
    },
    medium: {
        filterProps: {'stdDeviation': 0.75},
        nav: {
            d:
                "M 0 54.216 C 150 67.324 150 41.108 300 54.216 C 450 67.324 450 41.108 600 54.216 L 600 0 L 0 0 L 0 54.216",
            dx:
                "M 0 54.216 C 135.00 60.59 135.00 37.00 270.00 48.79 C 405.00 60.59 405.00 37.00 600 54.216 L 600 0 L 0 0 L 0 54.216",
            viewBox: "0 0 600 60",
        },
        section: {
            d:
                "M 0 24.216 C 150 37.324 150 11.108 300 24.216 C 450 37.324 450 11.108 600 24.216 L 600 0 L 0 0 L 0 24.216",
            dx:
                "M 0 24.216 C 135.00 30.59 135.00 7.00 270.00 18.79 C 405.00 30.59 405.00 7.00 600 24.216 L 600 0 L 0 0 L 0 24.216",
            viewBox: "0 0 600 30",
        },
    },
    large: {
        filterProps: {'stdDeviation': 0.75},        
        nav: {
            d:
                "M 0 36.216 C 150 49.324 150 23.108 300 36.216 C 450 49.324 450 23.108 600 36.216 L 600 0 L 0 0 L 0 36.216",
            dx:
                "M 0 36.216 C 135.00 44.39 135.00 20.80 270.00 32.59 C 405.00 44.39 405.00 20.80 600 36.216 L 600 0 L 0 0 L 0 36.216",
            viewBox: "0 0 600 42",
        },
        section: {
            d:
                "M 0 17.216 C 150 30.324 150 4.108 300 17.216 C 450 30.324 450 4.108 600 17.216 L 600 0 L 0 0 L 0 17.216",
            dx:
                "M 0 17.216 C 135.00 25.39 135.00 1.80 270.00 13.59 C 405.00 25.39 405.00 1.80 600 17.216 L 600 0 L 0 0 L 0 17.216",
            viewBox: "0 0 600 23",
        },
    },
    extraLarge: {
        filterProps: {'stdDeviation': 0.75},        
        nav: {
            d:
                "M 0 26.216 C 150 39.324 150 13.108 300 26.216 C 450 39.324 450 13.108 600 26.216 L 600 0 L 0 0 L 0 26.216",
            dx:
                "M 0.0 26.216 C 135.00 35.39 135.00 11.80 270.00 23.59 C 405.00 35.39 405.00 11.80 600 26.22 L 600 0.0 L 0.0 0.0 L 0.0 26.216",
            viewBox: "0 0 600 32",
        },
        section: {
            d:
                "M 0.00 13.60 C 150.00 26.70 150.00 0.49 300.00 13.60 C 450.00 26.70 450.00 0.49 600.00 13.60 L 600.00 0.00 L 0.00 0.00 L 0.00 13.60",
            dx:
                "M 0.00 13.60 C 135.00 22.77 135.00 -0.82 270.00 10.97 C 405.00 22.77 405.00 -0.82 600.00 13.60 L 600.00 0.00 L 0.00 0.00 L 0.00 13.60",
            viewBox: "0 0 600 18",
        },
    },
};

const WavySVG = ({ isNav, fill, breakpoints, currentBreakpoint }) => {
    React.useEffect(() => {
        console.log('some new brakpoint detected') // fix this bug; animation not changing through breakpoints
        isNav
            ? anime({
                  targets: "#navSVGPath",
                  keyframes: [{ d: paths[currentBreakpoint].nav.dx }],
                  easing: "easeInOutQuad",
                  duration: 2250,
                  loop: true,
                  direction: "alternate",
              })
            : anime({
                  targets: ".sectionSVGPath",
                  keyframes: [{ d: paths[currentBreakpoint].section.dx }],
                  easing: "easeInOutQuad",
                  duration: 2250,
                  loop: true,
                  direction: "alternate",
              });
    });

    return isNav ? (
        <>
            {/* navigation bar curve */}
            <svg
                id="navCurveSVG"
                style={{ position: "fixed", zIndex: "3" }}
                viewBox={paths[currentBreakpoint].nav.viewBox}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation={paths[currentBreakpoint].filterProps.stdDeviation}/>
                    </filter>
                </defs>
                <g>
                    <path
                        id="navSVGPath"
                        style={{ fill: "transparent", filter: "url(#shadow)" }}
                        d={paths[currentBreakpoint].nav.d}
                    />
                </g>
            </svg>
        </>
    ) : (
        <>
            {/* Section curve */}
            <svg
                className="sectionCurveSVG"
                style={{}}
                viewBox={paths[currentBreakpoint].section.viewBox}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation={paths[currentBreakpoint].filterProps.stdDeviation} />
                    </filter>
                </defs>
                <g>
                    <path
                        className="sectionSVGPath"
                        d={paths[currentBreakpoint].section.d}
                        style={{ fill: fill, filter: "url(#shadow)" }}
                    />
                </g>
            </svg>
        </>
    );
};

export default withBreakpoints(WavySVG);

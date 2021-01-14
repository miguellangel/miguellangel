import React from "react";
import  {anime} from "react-anime";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import { withBreakpoints } from "react-breakpoints";
import $ from 'jquery'

const paths = {
    small: {
        filterProps: {'stdDeviation': 3},
        nav: {
            d:
                "M 600 96.66 C 750 101.29 750 92.03 900 96.66 C 1050 101.29 1050 92.03 1200 96.66 L 1200 0 L 600 0 L 600 96.66 M 0 96.66 C 150 101.29 150 92.03 300 96.66 C 450 101.29 450 92.03 600 96.66 L 600 0 L 0 0 L 0 96.66",
            dx:
                "M 0 98.66 C 150 103.29 150 94.03 300 98.66 C 450 103.29 450 94.03 600 98.66 L 600 2 L 0 2 L 0 98.66 M -600 98.66 C -450 103.29 -450 94.03 -300 98.66 C -150 103.29 -150 94.03 0 98.66 L 0 2 L -600 2 L -600 98.66",
            viewBox: "0 0 600 100",
        },
        section: {
            d:
                "M 600 56.66 C 750 61.29 750 52.03 900 56.66 C 1050 61.29 1050 52.03 1200 56.66 L 1200 0 L 600 0 L 600 56.66 M 0 56.66 C 150 61.29 150 52.03 300 56.66 C 450 61.29 450 52.03 600 56.66 L 600 0 L 0 0 L 0 56.66",
            dx:
                "M 0 56.66 C 150 61.29 150 52.03 300 56.66 C 450 61.29 450 52.03 600 56.66 L 600 0 L 0 0 L 0 56.66 M -600 56.66 C -450 61.29 -450 52.03 -300 56.66 C -150 61.29 -150 52.03 0 56.66 L 0 0 L -600 0 L -600 56.66",
            viewBox: "0 0 600 60",
        },
    },
    medium: {
        filterProps: {'stdDeviation': 3},
        nav: {
            d:
                "M 600 56.66 C 750 61.29 750 52.03 900 56.66 C 1050 61.29 1050 52.03 1200 56.66 L 1200 0 L 600 0 L 600 56.66 M 0 56.66 C 150 61.29 150 52.03 300 56.66 C 450 61.29 450 52.03 600 56.66 L 600 0 L 0 0 L 0 56.66",
            dx:
                "M 0 56.66 C 150 61.29 150 52.03 300 56.66 C 450 61.29 450 52.03 600 56.66 L 600 0 L 0 0 L 0 56.66 M -600 56.66 C -450 61.29 -450 52.03 -300 56.66 C -150 61.29 -150 52.03 0 56.66 L 0 0 L -600 0 L -600 56.66",
            viewBox: "0 0 600 60",
        },
        section: {
            d:
                "M 600 26.66 C 750 31.29 750 22.03 900 26.66 C 1050 31.29 1050 22.03 1200 26.66 L 1200 0 L 600 0 L 600 26.66 M 0 26.66 C 150 31.29 150 22.03 300 26.66 C 450 31.29 450 22.03 600 26.66 L 600 0 L 0 0 L 0 26.66",
            dx:
                "M 0 26.66 C 150 31.29 150 22.03 300 26.66 C 450 31.29 450 22.03 600 26.66 L 600 0 L 0 0 L 0 26.66 M -600 26.66 C -450 31.29 -450 22.03 -300 26.66 C -150 31.29 -150 22.03 0 26.66 L 0 0 L -600 0 L -600 26.66",
            viewBox: "0 0 600 30",
        },
    },
    large: {
        filterProps: {'stdDeviation': 1.5},        
        nav: {
            d:
                "M 600 38.66 C 750 43.29 750 34.03 900 38.66 C 1050 43.29 1050 34.03 1200 38.66 L 1200 0 L 600 0 L 600 38.66 M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66",
            dx:
                "M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66 M -600 38.66 C -450 43.29 -450 34.03 -300 38.66 C -150 43.29 -150 34.03 0 38.66 L 0 0 L -600 0 L -600 38.66",
            viewBox: "0 0 600 42",
        },
        section: {
            d:
                "M 600 18.66 C 750 23.29 750 14.03 900 18.66 C 1050 23.29 1050 14.03 1200 18.66 L 1200 0 L 600 0 L 600 18.66 M 0 18.66 C 150 23.29 150 14.03 300 18.66 C 450 23.29 450 14.03 600 18.66 L 600 0 L 0 0 L 0 18.66",
            dx:
                "M 0 18.66 C 150 23.29 150 14.03 300 18.66 C 450 23.29 450 14.03 600 18.66 L 600 0 L 0 0 L 0 18.66 M -600 18.66 C -450 23.29 -450 14.03 -300 18.66 C -150 23.29 -150 14.03 0 18.66 L 0 0 L -600 0 L -600 18.66",
            viewBox: "0 0 600 22",
        },
    },
    extraLarge: {
        filterProps: {'stdDeviation': 1.5},        
        nav: {
            d:
                "M 600 28.66 C 750 33.29 750 24.03 900 28.66 C 1050 33.29 1050 24.03 1200 28.66 L 1200 0 L 600 0 L 600 28.66 M 0 28.66 C 150 33.29 150 24.03 300 28.66 C 450 33.29 450 24.03 600 28.66 L 600 0 L 0 0 L 0 28.66",
            dx:
                "M 0 28.66 C 150 33.29 150 24.03 300 28.66 C 450 33.29 450 24.03 600 28.66 L 600 0 L 0 0 L 0 28.66 M -600 28.66 C -450 33.29 -450 24.03 -300 28.66 C -150 33.29 -150 24.03 0 28.66 L 0 0 L -600 0 L -600 28.66",
            viewBox: "0 0 600 32",
        },
        section: {
            d:
                "M 600 18.66 C 750 23.29 750 14.03 900 18.66 C 1050 23.29 1050 14.03 1200 18.66 L 1200 0 L 600 0 L 600 18.66 M 0 18.66 C 150 23.29 150 14.03 300 18.66 C 450 23.29 450 14.03 600 18.66 L 600 0 L 0 0 L 0 18.66",
            dx:
                "M 0 18.66 C 150 23.29 150 14.03 300 18.66 C 450 23.29 450 14.03 600 18.66 L 600 0 L 0 0 L 0 18.66 M -600 18.66 C -450 23.29 -450 14.03 -300 18.66 C -150 23.29 -150 14.03 0 18.66 L 0 0 L -600 0 L -600 18.66",
            viewBox: "0 0 600 22",
        },
    },
};

const WavySVG = ({ isNav, fill, breakpoints, currentBreakpoint }) => {


    React.useEffect(() => {
        // console.log(`WavySVG component has re-rendered to --${currentBreakpoint}`)

        // revert svg paths to original values before re-rendering animation
        $('#navSVGPath').attr('d', paths[currentBreakpoint].nav.d)
        $('.sectionSVGPath').toArray().map((i) => i.setAttribute('d', paths[currentBreakpoint].section.d))

        anime({
            targets: isNav ? '#navSVGPath' : '.sectionSVGPath',
            keyframes: [{d: paths[currentBreakpoint][isNav ? 'nav' : 'section'].dx}],
            easing: 'linear',
            duration: 7000,
            loop: true,
            direction: "normal",
            autoplay: true,
        })



        }, [isNav, currentBreakpoint] // only re-render on breakpoint change
    )

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
                <path
                    id="navSVGPath"
                    style={{ fill: "transparent", filter: "url(#shadow)" }}
                    d={paths[currentBreakpoint].nav.d}
                />
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
                <path
                    className="sectionSVGPath"
                    d={paths[currentBreakpoint].section.d}
                    style={{ fill: fill, filter: "url(#shadow)" }}
                />
            </svg>
        </>
    );
};

export default withBreakpoints(WavySVG);

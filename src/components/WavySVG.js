import React from "react";
import  {anime} from "react-anime";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import { withBreakpoints } from "react-breakpoints";
import $ from 'jquery'

let newPaths = {
    d: 'M 600 38.66 C 750 43.29 750 34.03 900 38.66 C 1050 43.29 1050 34.03 1200 38.66 L 1200 0 L 600 0 L 600 38.66 M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66',
    dx: 'M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L 0 0 L 0 38.66 M -600 38.66 C -450 43.29 -450 34.03 -300 38.66 C -150 43.29 -150 34.03 0 38.66 L 0 0 L -600 0 L -600 38.66',
}


const WavySVG = ({ fill, breakpoints, currentBreakpoint }) => {


    React.useEffect(() => {
        // console.log(`WavySVG component has re-rendered to --${currentBreakpoint}`)

        /*revert svg paths to original values before re-rendering animation*/

        $('.SVGPath').toArray().map((i) => i.setAttribute('d', newPaths.d))

        var waves = anime({
            targets: '.SVGPath',
            keyframes: [{d: newPaths.dx}],
            easing: 'linear',
            duration: 7000,
            loop: false,
            direction: "normal",
            autoplay: true,
            complete:() => {
            }
        }).restart()

        return anime.remove(waves)

        }, [currentBreakpoint] // only re-render on breakpoint change
    )

    return (
        <>
            {/* navigation bar curve */}
            <svg
                id="CurveSVG"
                style={{ zIndex: "3" }}
                viewBox="0 0 600 42"
                preserveAspectRatio="xMidYMax slice"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation="1.5"/>
                    </filter>
                </defs>
                <path
                    className="SVGPath"
                    style={{ fill: "transparent", filter: "url(#shadow)" }}
                    d={newPaths.d}
                />
            </svg>
        </>
    )
};

export default withBreakpoints(WavySVG);

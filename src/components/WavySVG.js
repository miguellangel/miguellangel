import React from "react";
import  {anime} from "react-anime";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import { withBreakpoints } from "react-breakpoints";
import $ from 'jquery'

let newPaths = {
    // d: 'm 0,37.721062 c 0,0 49.920128,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 75,6 75,6 V 0 H 0 Z',
    d: 'M 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 C 750 43.29 750 34.03 900 38.66 C 1050 43.29 1050 34.03 1200 38.66 L 1200 0 L 0 0 L 0 38.66',
    dx: 'M -600 38.66 C -450 43.29 -450 34.03 -300 38.66 C -150 43.29 -150 34.03 0 38.66 C 150 43.29 150 34.03 300 38.66 C 450 43.29 450 34.03 600 38.66 L 600 0 L -600 0 L -600 38.66',
    // dx: 'm 0,37.721062 c 0,0 49.920128,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 49.92013,6 75,6 25.07987,0 49.92013,-6 75,-6 25.07987,0 75,6 75,6 V 0 H 0 Z',
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
            duration: 14000,
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
                className="CurveSVG"
                style={{ zIndex: "3" }}
                viewBox="0 0 600 42"
                preserveAspectRatio="xMidYMax slice"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation="1"/>
                    </filter>
                </defs>
                <path
                   className="SVGPath"
                   style={{fill:'transparent',stroke:'#000f0f0f',strokeWidth:'1px',strokeLinecap:'butt',strokeLinejoin:'miter',strokeOpacity:'1',fillOpacity:'1',filter:"url('#shadow')"}}
                   d={newPaths.d} />
                />
            </svg>
        </>
    )
};

export default withBreakpoints(WavySVG);

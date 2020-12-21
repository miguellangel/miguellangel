import React from 'react';
import anime from 'animejs/lib/anime.es.js';
// import ReactVisibilitySensor from 'react-visibility-sensor';

const WavySVG = ({isNav, fill}) => {

    // const sectionSVGStatus = React.useRef('hidden');


    React.useEffect(() => {
        if (isNav) {
            anime({
                targets: '#navSVGPath',
                keyframes: [{d: 'M 0.0 26.216 C 127.5 33.43 127.5 11.14 255.0 22.3 C 382.5 33.43 382.5 11.14 600 26.22 L 600 0.0 L 0.0 0.0 L 0.0 26.216'},
                            ],
                easing: 'easeInOutQuad',
                duration: 1500,
                loop: true,  
                direction: 'alternate'
            });

        } else {
            anime({
                targets: '.sectionSVGPath',
                keyframes: [{d: 'M 0.00 13.60 C 127.50 20.81 127.50 -1.48 255.00 9.68 C 382.50 20.81 382.50 -1.48 600.00 13.60 L 600.00 0.00 L 0.00 0.00 L 0.00 13.60'},
                            ],
                easing: 'easeInOutQuad',
                duration: 1500,
                loop: true,  
                direction: 'alternate'
            });

        }
          

    })

    if (isNav) {
        return (<>
            {/* navigation bar curve */}
            <svg id="navCurveSVG" style={{position : 'fixed', zIndex : '3'}} viewBox='0 0 600 32' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation="0.75"/>
                    </filter>
                </defs>
                <g>
                    <path id="navSVGPath" style={{fill: "transparent", filter:"url(#shadow)"}} d="M 0 26.216 C 150 39.324 150 13.108 300 26.216 C 450 39.324 450 13.108 600 26.216 L 600 0 L 0 0 L 0 26.216" />
                </g>
            </svg>            
        </>)
    }
    return (<>
        {/* Section curve */}
        <svg className="sectionCurveSVG" style={{}} viewBox='0 0 600 18' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="0.05" dy="0.1" stdDeviation="0.75"/>
                </filter>
            </defs>
            <g>
                <path className="sectionSVGPath" d="M 0.00 13.60 C 150.00 26.70 150.00 0.49 300.00 13.60 C 450.00 26.70 450.00 0.49 600.00 13.60 L 600.00 0.00 L 0.00 0.00 L 0.00 13.60" style={{fill: fill, filter:"url(#shadow)"}}/>
            </g>
        </svg>        
    </>)
}

export default WavySVG;
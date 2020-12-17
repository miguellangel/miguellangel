import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import ReactVisibilitySensor from 'react-visibility-sensor';

const WavySVG = ({isNav, fill}) => {

    const sectionSVGStatus = React.useRef('hidden');


    React.useEffect(() => {
        if (isNav) {
            anime({
                targets: '#navSVGPath',
                keyframes: [{d: 'M 0.0 30.0 C 127.5 40.5 127.5 15.0 255.0 27.75 C 382.5 40.5 382.5 15.0 600.0 30.0 L 600.0 0.0 L 0.0 0.0 L 0.0 30.0 '},
                            ],
                easing: 'easeInOutQuad',
                duration: 1500,
                loop: true,  
                direction: 'alternate'
            });

        } else {
            anime({
                targets: '.sectionSVGPath',
                keyframes: [{d: 'M 0 15 C 127.5 25.5 127.5 0.0 255.0 12.75 C 382.5 25.5 382.5 0.0 600 15 L 600 0 L 0 0 L 0 15'},
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
            <svg id="navCurveSVG" style={{position : 'fixed', zIndex : '3'}} viewBox='0 0 600 60' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation="0.75"/>
                    </filter>
                </defs>
                <g>
                    <path id="navSVGPath" d="M 0 30 C 150 45 150 15 300 30 C 450 45 450 15 600 30 L 600 0 L 0 0 L 0 30 " style={{fill: "transparent", filter:"url(#shadow)"}}/>
                </g>
            </svg>
            
            {/* {children} */}
        </>)
    }
    return (<>
        {/* Section curve */}
        <ReactVisibilitySensor partialVisibility onChange={(isVisible) => {sectionSVGStatus.current = isVisible ? 'visible' : 'hidden'}} >
            <svg className="sectionCurveSVG" style={{}} viewBox='0 0 600 30' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.05" dy="0.1" stdDeviation="0.75"/>
                    </filter>
                </defs>
                <g>
                    <path className="sectionSVGPath" d="M 0 15 C 150 30 150 0 300 15 C 450 30 450 0 600 15 L 600 0 L 0 0 L 0 15" style={{fill: fill, filter:"url(#shadow)"}}/>
                </g>
            </svg>
        </ReactVisibilitySensor>
        
        {/* {children} */}
            
    </>)
}

export default WavySVG;
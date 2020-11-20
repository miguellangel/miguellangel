import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import ReactVisibilitySensor from 'react-visibility-sensor';

var onChange = (isVisible) => {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}
// function onChange (isVisible) {
//     console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
// }

const SurroundWithWavySVG = ({children}) => {
    React.useEffect(() => {
        console.log(onChange.isVisible);
        anime({
            targets: '#svg_4',
            keyframes: [{d: 'M 0 15 C 172.5 34.5 172.5 0.0 345.0 17.25 C 517.5 34.5 517.5 0.0 600 15 L 600 30 L 0 30 L 0 15'},
                        ],
            easing: 'easeInOutQuad',
            duration: 1500,
            loop: true,  
            direction: 'alternate'
        });
        anime({
            targets: '#svg_5',
            keyframes: [{d: 'M 0 15 C 127.5 25.5 127.5 0.0 255.0 12.75 C 382.5 25.5 382.5 0.0 600 15 L 600 0 L 0 0 L 0 15 Z'},
                        ],
            easing: 'easeInOutQuad',
            duration: 1500,
            loop: true,  
            direction: 'alternate'
        });
          

    })
    return (
        <>
            <ReactVisibilitySensor partialVisibility onChange={onChange} >
                {/* topSide SVG */}
                <svg style={{transform: "translate(-0, -75%)"}} viewBox='0 0 600 30' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path id="svg_4" d="M 0 15 C 150 30 150 0 300 15 C 450 30 450 0 600 15 L 600 30 L 0 30 L 0 15 Z" fill="#F2F4F9"/>
                    </g>
                </svg>
            </ReactVisibilitySensor>
            <div>
                {children}
            </div>
            <ReactVisibilitySensor partialVisibility onChange={onChange} >
                {/* bottomSide SVG */}
                <svg style={{transform: 'translate(-0%, -25%)'}} viewBox='0 0 600 30' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path id="svg_5" d="M 0 15 C 150 30 150 0 300 15 C 450 30 450 0 600 15 L 600 0 L 0 0 L 0 15" fill="#fff"/>
                    </g>
                </svg>
            </ReactVisibilitySensor>
            
        </>

    )
}

export default SurroundWithWavySVG;
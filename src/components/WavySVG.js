import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const WavySVG = () => {
    React.useEffect(() => {
        var morphing = anime({
            targets: 'svg path',
            d: 'M 0 60 C 0 60 210 0 300 30 C 510 60 510 0 600 30 C 690 60 810 0 900 60 Z',
            easing: 'easeInOutSine',
            duration: 2000,
            loop: true,  
            direction: 'alternate'
          });

    })
    return (
        <>
            <svg style={{backgroundColor: "#F2F4F9"}} width="100%" height="60" viewBox="0 0 600 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --> */}
                <g>
                    <path id="svg_4" d="M 0 60 C 90 0 210 60 300 30 C 390 0 510 60 600 30 C 690 0 810 60 900 60 Z" fill="#fff"/>
                </g>
            </svg>
            <div style={{width:"100%", height:"300px", backgroundColor:"white", transform:"translate(0%,87)"}}></div>
        </>
    )
}

export default WavySVG;
import React from 'react';
import ProgressBar from 'progressbar.js';

const Skills = () => {
    React.useEffect(() => {
        var line = new ProgressBar.Line('#lineContainer');
        line.animate();

    })
    // var ProgressBar = require('progressbar.js')
    return (
        <>
            <div id="lineContainer"></div>
        </>
    )
}

export default Skills;
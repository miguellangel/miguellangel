import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreakpoints from 'react-breakpoints'
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

const breakpoints = {
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1200,
    // desktop: 1440,
    // desktopLarge: 1500,
    // desktopWide: 1920,
  }

ReactDOM.render(
    // <React.StrictMode> 
    <ReactBreakpoints breakpoints={breakpoints}>
        <App/>
    </ReactBreakpoints>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

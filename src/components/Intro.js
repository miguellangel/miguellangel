import React from 'react'
import profile from './media/portrait1.png'
import LinkedIn from './media/LinkedIn.svg'
import gitHub from './media/gitHub.svg'
// import { lazyload } from 'react-lazyload'

const Intro = ({shouldHide}) => {
	return (
		<>
            <img src={profile} width="50%" alt="miguel angel" />
            <h5>hello, my name is</h5>
            <h3>miguel angel</h3>
            <div id="contact-icons">
                <a style={{WebkitMask: `url(${LinkedIn}) no-repeat 50% 50%`}} href="https://www.linkedin.com/in/miguel-arriaga-950b2412b/"></a>
                <a style={{WebkitMask: `url(${gitHub}) no-repeat 50% 50%`}} href="https://github.com/miguellangel"></a>
                <a style={{WebkitMask: `url(${LinkedIn}) no-repeat 50% 50%`}} href="google.com"></a>
                <a style={{WebkitMask: `url(${LinkedIn}) no-repeat 50% 50%`}} href="google.com"></a>


            </div>
        </>
	)
}

export default Intro;
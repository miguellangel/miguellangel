import React from 'react'
import profile from './media/profile.jpg'
import LinkedIn from './media/LinkedIn.svg'
import gitHub from './media/gitHub.svg'
import cssbattle from './media/cssbattle.svg'
// import { lazyload } from 'react-lazyload'

const Intro = ({shouldHide}) => {
	return (
		<>
            <img src={profile} width="50%" alt="miguel angel" />
            <h3>miguel angel</h3>
            <h5>aspiring full-stack developer</h5>
            <div id="contact-icons">
                <a style={{WebkitMask: `url(${LinkedIn}) no-repeat 50% 50%`}} href="https://www.linkedin.com/in/miguel-arriaga-950b2412b/"> </a>
                <a style={{WebkitMask: `url(${gitHub}) no-repeat 50% 50%`}} href="https://github.com/miguellangel"> </a>
                <a style={{WebkitMask: `url(${cssbattle}) no-repeat 50% 50%`}} href="https://cssbattle.dev/player/miguel"> </a>
                <a style={{WebkitMask: `url(${LinkedIn}) no-repeat 50% 50%`}} href="https://leetcode.com/xmiguel_ar/"> </a>


            </div>
        </>
	)
}

export default Intro;
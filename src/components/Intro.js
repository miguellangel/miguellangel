import React from 'react'
import profile from './media/portrait1.png'
// import { lazyload } from 'react-lazyload'

const Intro = ({shouldHide}) => {
    console.log('should hide?', shouldHide)
	return (
		<>
            <img src={profile} width="50%" alt="miguel angel" />
            <h5>hello, my name is</h5>
            <h3>miguel angel</h3>
        </>
	)
}

export default Intro;
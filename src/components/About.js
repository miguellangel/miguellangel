import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Quicksand from './fonts/Quicksand.ttf'


const Caption = ({ position, children }) => {
	return (
		<Text
			characters="abcdefghijklmnopqrstuvwxyz0123456789!"
			position={position}
			// lineHeight={0.8}
			fontSize={0.5}
			font={Quicksand}
			anchorX="start"
			anchorY="middle"
			>
			{children}
		</Text>
	)
}

function Rig({ v = new THREE.Vector3() }) {
	return useFrame((state) => {
		state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
	})
}

const About = () => {
	const spacify = index => {

		const locations = {0: [-10,-4,0], 1: [1, 5, 0], 2: [5, -5, 0], 3: [-2, -6, 0], 4: [-8, 6, 0]}
		return locations[index]
	}

	const target = React.useRef()
	const handleLetterAnim = (letterGroup) => {
		document.querySelectorAll(letterGroup).forEach((item, index) => {
			item.addEventListener('mouseenter', () => {
				item.classList.toggle('active')
				setTimeout(() => item.classList.remove('active'), 1000)
			}, { once: false })
		})
	}

	React.useEffect(() => {
		handleLetterAnim('#about .anim')

	})
	return (
		<section id="about" className="flag active" ref={target}>
			<div className="animHeader">
				{String`Me\u00A0Myself\u00A0&\u00A0I`.split('').map((i, index) => // explicit non-breaking space
					<span key={index}><b className="anim">{i}</b></span>
				)}
			</div>
			<div className="text">
				<p>
					I am a software engineer located in Austin, TX. <br></br>I am an experienced front-end developer, modernizing web apps by implementing responsive layouts, animations, and an overhaul of the user experience (UX). <br></br>

				</p>
			</div>
			<div id="canvas-container">
				<Delay waitBeforeShow={1500}>
					<Canvas>
						<Suspense fallback={null}>
							{
								['flexible', 'problem solver', 'determined', 'intuitive', 'detail-oriented']
									.map((item, index) => (
										<Caption key={`item-${item}`} position={spacify(index)}>{item}</Caption>
									)
								)
							}
							<Rig />
						</Suspense>
					</Canvas>

				</Delay>
			</div>
		</section>
	)
}
const Delay = ({ waitBeforeShow, children }) => {
	const [hidden, setHidden] = React.useState(true)
	React.useEffect(() => { setTimeout(() => setHidden(false), waitBeforeShow) })
	return hidden ? '' : children
}

export default About
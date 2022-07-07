import React from "react"
import { Tween } from 'react-gsap'

const mod = (a, n) => ((a % n) + n) % n
// const clamp = (n, min, max) => Math.min(Math.max(n, min), max) 
function throttle (callback, limit) {	
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}

const RoadmapSVG = ({ ...props }) => {
	const [ cardNum, setCardNum ] = React.useState(1)
	const tween = React.useRef(null)
	const cardNumRef = React.useRef(1)
	const prevCardNum = React.useRef()
	const container = React.useRef()
	const prevProgress = React.useRef(0)
	const progress = React.useRef(0.25)

	const touchMoveStart = React.useRef({x: 0, y: 0})

	function presentCard(e, ...props) {
		const [touchDelta, buttonNum] = props
		prevCardNum.current = cardNumRef.current // record previous vals before updating
		prevProgress.current = progress.current
		
		if (!buttonNum) {
			// TODO: Do something about natural scrolling
			if (Math.sign(e.deltaY ?? touchDelta.y) >= 0) { // if scrolling or swiping down
				progress.current = mod(progress.current + (progress.current === 0.75 ? 0.5 : 0.25), 1)
				cardNumRef.current = mod(cardNumRef.current + 1, 4) || mod(cardNumRef.current + 1, 3) // restrict to three card states
			} else {
				progress.current = mod(progress.current + (progress.current === 0.25 ? -0.5 : -0.25), 1)
				// mod doesn't work w 0, so set to -1 in order to loop around e.g. -1 % 4 = 3
				// -1 % 3 returns 2 but we want it to be 3 so we increase the mod to 4
				// (x % 4 || x % 3) will return the one on the left by default regardless which one is greater
				cardNumRef.current = mod(cardNumRef.current + (cardNumRef.current === 1 ? -2 : -1), 4) || mod(cardNumRef.current + (cardNumRef.current === 1 ? -2 : -1), 3) // restrict to three card states
			}


		} else {
			cardNumRef.current = buttonNum
			progress.current = buttonNum * 0.25
		}
		

		const x = document.querySelectorAll('.content > section') // get all card section elements

		const target = x[cardNumRef.current - 1]
		const prev = x[prevCardNum.current - 1]
		prev.classList.remove('active')
		// if prev is not also the active one, add 'removing' class for 250ms for animation purposes 
		if (prev !== target) prev.classList.toggle('removing') && setTimeout(() => prev.classList.remove('removing'), 500)
		target.classList.toggle('active')
		
		/* 
		since we use setTimeout to allow time for animations, 
		set state of the card after all class changes go into effect to avoid errors
		*/
		setTimeout(() => setCardNum(cardNumRef.current), 0)

	}

	function touchStart(e) {
		touchMoveStart.current.x = e.touches[0].pageX
		touchMoveStart.current.y = e.touches[0].pageY
	}

	function touchMove(e) {
		var delta = {}

		delta.x = touchMoveStart.current.x - e.touches[0].pageX
		delta.y = touchMoveStart.current.y - e.touches[0].pageY

		presentCard(e, delta, null)
		
	}
	
	const handleClick = buttonNum => e => {
		e.preventDefault()
		presentCard(0, 0, buttonNum)
	}

	React.useEffect(() => {

		container.current = document.querySelector('.content.container-true')

		container.current.addEventListener('wheel', throttle(presentCard, 200), {passive: true})
		container.current.addEventListener('touchstart', throttle(touchStart, 2000), {useCapture: false, passive: true})
		container.current.addEventListener('touchmove', throttle(touchMove, 600), {useCapture: false, passive: true})

	}, [])

	return (
		<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid" {...props}>
			<defs id="roadMapDefs">
				<clipPath id="clipPathIconContainer">
					<circle
						cx={64.524}
						cy={12.455}
						r={3.384}
						fill="url(#radialGradient1843)"
						paintOrder="stroke fill markers"
					/>
				</clipPath>
				<clipPath id="clipPath1078">
					<path
						d="M154.13-104.93c-1.72.072-3.452.245-5.127.475-6.7.917-12.488 2.75-12.488 2.75a.75.75 0 00-.488.941.75.75 0 00.941.488s5.69-1.796 12.238-2.693c3.275-.449 6.758-.668 9.81-.338 3.054.33 5.64 1.215 7.225 2.84 1.24 1.27 1.94 3.484 1.94 5.719s-.7 4.446-1.94 5.716c-1.584 1.625-3.612 2.035-6.082 1.819s-5.304-1.103-8.173-2.01-5.775-1.834-8.495-2.072c-2.72-.238-5.332.259-7.287 2.263-1.634 1.676-2.37 4.242-2.37 6.784s.736 5.105 2.37 6.78c1.067 1.094 2.515 1.365 3.932 1.241 1.417-.124 2.881-.597 4.31-1.049 1.43-.452 2.824-.882 3.99-.984 1.168-.102 2.03.079 2.727.793.543.557.69 1.259.61 2.234s-.427 2.151-.791 3.361-.747 2.455-.848 3.668c-.1 1.214.116 2.469 1.03 3.405 1.073 1.1 2.637 1.578 4.312 1.76 1.675.18 3.497.059 5.197-.174 3.4-.466 6.33-1.395 6.33-1.395a.75.75 0 00.49-.941.75.75 0 00-.94-.488s-2.833.892-6.083 1.337c-1.625.223-3.349.329-4.834.168s-2.695-.593-3.398-1.314c-.543-.557-.69-1.257-.61-2.232.081-.976.427-2.152.791-3.362s.747-2.456.848-3.67-.116-2.468-1.03-3.404c-1.066-1.094-2.514-1.364-3.93-1.24-1.418.124-2.882.597-4.312 1.049-1.429.452-2.823.882-3.99.984-1.167.102-2.03-.079-2.726-.793-1.243-1.274-1.946-3.493-1.946-5.734s.703-4.46 1.946-5.735c1.584-1.625 3.612-2.034 6.082-1.818s5.304 1.102 8.173 2.01c2.87.907 5.775 1.834 8.495 2.072 2.72.238 5.332-.26 7.287-2.264 1.63-1.671 2.365-4.23 2.365-6.765s-.735-5.094-2.365-6.766c-1.955-2.004-4.894-2.933-8.137-3.283-1.621-.175-3.329-.205-5.049-.133z"
						color="#000"
						style={{
							fontFeatureSettings: "normal",
							fontVariantAlternates: "normal",
							fontVariantCaps: "normal",
							fontVariantEastAsian: "normal",
							fontVariantLigatures: "normal",
							fontVariantNumeric: "normal",
							fontVariantPosition: "normal",
							fontVariationSettings: "normal",
							inlineSize: 0,
							isolation: "auto",
							mixBlendMode: "normal",
							shapeMargin: 0,
							shapePadding: 0,
							textDecorationColor: "#000",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textIndent: 0,
							textOrientation: "mixed",
							textTransform: "none",
							whiteSpace: "normal",
						}}
					/>
				</clipPath>
				<clipPath id="clipPathIconContainer-9">
					<circle
						cx={64.524}
						cy={12.455}
						r={3.384}
						fill="url(#radialGradient1843)"
						paintOrder="stroke fill markers"
					/>
				</clipPath>
				<clipPath id="clipPathIconContainer-1">
					<circle
						cx={64.524}
						cy={12.455}
						r={3.384}
						fill="url(#radialGradient1843)"
						paintOrder="stroke fill markers"
					/>
				</clipPath>
				<filter
					id="filter1145"
					x={-0.008}
					y={-0.008}
					width={1.016}
					height={1.015}
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation={0.067} />
				</filter>
				<filter
					id="filter1060"
					x={-0.006}
					y={-0.01}
					width={1.013}
					height={1.019}
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation={0.442} />
				</filter>
				<filter
					id="filter1145-6"
					x={-0.008}
					y={-0.008}
					width={1.016}
					height={1.015}
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation={0.067} />
				</filter>
				<filter
					id="filter1145-7"
					x={-0.008}
					y={-0.008}
					width={1.016}
					height={1.015}
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation={0.067} />
				</filter>
			</defs>
			<path
				id="road-bottom"
				transform="translate(-107.84 96.073) scale(.86878)"
				d="M71.492-134.66v110.29h166.19v-110.29zm85.932 29.869c.844.02 1.676.07 2.486.158 3.243.35 6.182 1.28 8.137 3.285 1.63 1.672 2.365 4.23 2.365 6.766 0 2.535-.735 5.092-2.365 6.764-1.955 2.004-4.565 2.503-7.285 2.265-2.72-.237-5.627-1.167-8.496-2.074s-5.703-1.794-8.172-2.01c-2.47-.216-4.5.194-6.084 1.819-1.243 1.274-1.944 3.495-1.944 5.736s.7 4.46 1.944 5.734c.696.714 1.561.895 2.728.793 1.167-.102 2.56-.532 3.989-.984 1.429-.452 2.895-.925 4.312-1.049 1.417-.124 2.865.147 3.932 1.24.913.937 1.13 2.191 1.029 3.405-.1 1.213-.486 2.457-.85 3.668s-.708 2.386-.789 3.361.067 1.678.61 2.234c.703.722 1.913 1.154 3.398 1.315 1.485.16 3.21.054 4.834-.168 3.25-.445 6.082-1.338 6.082-1.338a.75.75 0 01.94.488.75.75 0 01-.489.942s-2.93.928-6.33 1.394c-1.7.233-3.524.355-5.199.174-1.675-.181-3.237-.659-4.31-1.76-.914-.936-1.13-2.19-1.03-3.404.101-1.213.484-2.46.848-3.67s.708-2.386.789-3.361-.065-1.676-.608-2.233c-.696-.714-1.559-.895-2.726-.793-1.167.102-2.561.533-3.99.985-1.43.452-2.894.925-4.311 1.049-1.417.123-2.865-.147-3.932-1.24-1.634-1.676-2.37-4.24-2.37-6.782s.736-5.107 2.37-6.783c1.955-2.005 4.566-2.503 7.286-2.266 2.72.238 5.626 1.167 8.496 2.075s5.702 1.793 8.172 2.01c2.47.215 4.497-.194 6.082-1.819 1.239-1.27 1.939-3.482 1.939-5.717s-.7-4.448-1.94-5.719c-1.584-1.625-4.17-2.51-7.222-2.84-3.053-.33-6.536-.11-9.81.338-6.55.897-12.24 2.694-12.24 2.694a.75.75 0 01-.942-.488.75.75 0 01.49-.942s5.789-1.832 12.488-2.75a55.021 55.021 0 015.127-.474c.86-.037 1.717-.048 2.56-.028z"
				clipPath="url(#clipPath1078)"
				fill="#000"
				fillRule="evenodd"
				filter="url(#filter1060)"
				opacity={0.66}
				paintOrder="markers fill stroke"
			/>
			
			<Tween ref={ tween } from={{svgDraw: prevProgress.current}} to={{svgDraw:progress.current}} duration={0.5} >
				<path
					id="road-top"
					d="M10.955 8.335s19.945-6.306 26.095 0c2.493 2.557 2.493 8.29 0 10.845-6.15 6.307-19.945-6.306-26.095 0-2.5 2.564-2.5 8.312 0 10.875 3.063 3.14 9.933-3.141 12.996 0 2.53 2.594-2.53 8.411 0 11.006 3.087 3.165 13.099 0 13.099 0"
					fill="none"
					stroke="#172947"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.303}
				/>
			</Tween>
			<a href="#about" onClick={handleClick(1)}>
				<g id="icon-about">
					<path
						transform="translate(-27.274 -3.92)"
						d="M54.652 3.072v21.086H75.23V3.072zm9.672 5.8a3.384 3.384 0 013.383 3.384 3.384 3.384 0 01-3.383 3.383 3.384 3.384 0 01-3.385-3.383 3.384 3.384 0 013.385-3.385z"
						clipPath="url(#clipPathIconContainer)"
						filter="url(#filter1145)"
						opacity={0.66}
					/>
					<circle cx={37.05} cy={8.335} r={3.384} fill="#fff" />
					<g
						id="person"
						transform="translate(9.333 5.279) scale(.20772)"
						fill="#000049"
					>
						<ellipse
							transform="skewX(-5.527) scale(1 .99535)"
							cx={133.78}
							cy={8.637}
							rx={3.501}
							ry={3.987}
							paintOrder="markers fill stroke"
						/>
						<path d="M133.7 13.235l-1.244 4.642-1.244-4.643s-3.354 1.026-4.18 2.405c-1.57 2.622-.28 9.163-.28 9.163h2.09l.22-3.438.083 3.368h7.401V20.7l.805 3.994h3.012s.832-5.854-.524-8.254c-.782-1.383-2.464-2.077-3.92-2.713-.694-.304-2.22-.492-2.22-.492z" />
					</g>
				</g>
			</a>
			<a href="#skills" onClick={handleClick(2)}>
				<g id="icon-skills">
					<path
						transform="translate(-53.569 6.725)"
						d="M54.652 3.072v21.086H75.23V3.072zm9.672 5.8a3.384 3.384 0 013.383 3.384 3.384 3.384 0 01-3.383 3.383 3.384 3.384 0 01-3.385-3.383 3.384 3.384 0 013.385-3.385z"
						clipPath="url(#clipPathIconContainer-9)"
						filter="url(#filter1145-6)"
						opacity={0.66}
					/>
					<circle cx={10.755} cy={18.98} r={3.384} fill="#fff" />
					<g
						id="lightbulb"
						fill="none"
						stroke="#000049"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path
							d="M10.398 20.367a1.134 1.134 0 01-.76-1.262 1.134 1.134 0 011.127-.948 1.134 1.134 0 011.112.967 1.134 1.134 0 01-.782 1.249"
							strokeWidth={0.187}
							paintOrder="markers fill stroke"
						/>
						<path
							d="M10.29 19.442c.115-.122.192-.077.247.004m.085.176c.081.14.213.114.279-.013m.08-.166c.053-.073.125-.104.22-.001"
							strokeWidth={0.134}
						/>
						<path
							d="M10.398 20.367a.477.477 0 00-.022.174m.074.195c.14.179.44.203.579.002m.068-.19a.716.716 0 00-.002-.175"
							strokeWidth={0.16}
						/>
						<path
							d="M10.7 18.43a.824.824 0 00-.19.034m-.186.094a1.135 1.135 0 00-.262.304"
							strokeWidth={0.134}
						/>
						<path
							d="M10.755 17.08v.613M12.593 17.91l-.53.307M8.917 17.91l.53.307"
							strokeWidth={0.16}
						/>
					</g>
				</g>
			</a>
			<a href="#projects" onClick={handleClick(3)}>
				<g id="icon-projects">
					<path
						transform="translate(-40.107 17.145)"
						d="M54.652 3.072v21.086H75.23V3.072zm9.672 5.8a3.384 3.384 0 013.383 3.384 3.384 3.384 0 01-3.383 3.383 3.384 3.384 0 01-3.385-3.383 3.384 3.384 0 013.385-3.385z"
						clipPath="url(#clipPathIconContainer-1)"
						filter="url(#filter1145-7)"
						opacity={0.66}
					/>
					<circle cx={24.217} cy={29.4} r={3.384} fill="#fff" />
					<g id="briefcase">
						<path
							d="M47.509-11.764c-.55 0-.99.489-.99 1.096v.5l3.392.314v-.443c0-.054.044-.098.098-.098h.967c.027 0 .05.011.068.03.018.017.03.04.03.068v.453c.003-.002-.002-.011.003-.012l3.39-.312v-.5c0-.607-.444-1.096-.993-1.096zm2.658 1.568l-.056.043v1.102l.043.043h.681l.04-.04v-1.105l-.048-.043zm-3.648.235v2.578c0 .607.44 1.094.99 1.094h5.965c.55 0 .992-.487.992-1.094v-2.578l-3.387.293c0-.007-.004-.018-.006-.026v.787c0 .028-.01.051-.029.069a.096.096 0 01-.068.03h-.967a.1.1 0 01-.068-.03.093.093 0 01-.03-.069v-.777c0 .005-.003.011-.004.016z"
							fill="#000049"
							paintOrder="stroke fill markers"
							transform="translate(.61 33.855) scale(.46753)"
						/>
						<path
							d="M23.676 28.42v-.418h.973v.418"
							fill="none"
							stroke="#000049"
							strokeLinejoin="round"
							strokeWidth={0.233765}
						/>
					</g>
				</g>
			</a>
		</svg>
	)
}

export default RoadmapSVG

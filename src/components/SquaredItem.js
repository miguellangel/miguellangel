import React from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { Container, Row, Col } from 'react-bootstrap'

const SquaredItem = ({children, breakpoints, currentBreakpoint}) => {
	
	const itemHeights = {
		small: `425px`,
		medium: `360px`,
		large: `319.5px`,
		extraLarge: `285px`,
	}

	const style = {
		height: itemHeights[currentBreakpoint],
	}


	React.useEffect(() => {
	})

	return (
		<Container>
			<Row>
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					<p style={{textAlign: 'center'}}>Portfolio</p>
				</Col>	
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					Junglebooks
				</Col>		
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					Dino Game
				</Col>		
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					This is an Item
				</Col>		
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					This is an Item
				</Col>	
				<Col sm={12} md={6} lg={4} xl={3} style={style}>
					This is an Item
				</Col>
			</Row>
		</Container>
	)
}

export default withBreakpoints(SquaredItem)
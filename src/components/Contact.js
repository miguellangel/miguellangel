import React from 'react';

const Contact = ({children, style}) => {
    return (
        <>
            <section id="contact">
            	<div className="container-true" style={{width: '100vw', height: '50px'}}>
            		<h3 style={style.common.h3}>contact me!</h3>
                	{children}
            	</div>
            </section>
        </>
    )
}

export default Contact;
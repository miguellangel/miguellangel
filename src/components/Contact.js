import React from 'react';

const Contact = ({children}) => {
    return (
        <>
            <section id="contact">
            <h3 style={{position: 'absolute', display: 'inline-flex'}}>contact me!</h3>
                {children}
            </section>
        </>
    )
}

export default Contact;
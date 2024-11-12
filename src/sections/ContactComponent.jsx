import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from './ContactForm'


function ContactComponent() {

    return (
        <>
        
        <section className="contact-page">
    
            <div className="container">
    
                <div className="header">
                    <h1>Contact us</h1>
                </div>
    
                <div className="contact-links">
    
                    <div className="contact-item email">
                        <i className="fa-regular fa-envelope"></i>
                        <div className="email-text">
                            <h4>Email us</h4>
                            <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                            <NavLink to="/" className="email-link">Leave a message <i className="fa-solid fa-arrow-right"></i></NavLink >
                        </div>
                    </div>
    
                    <div className="contact-item careers">
    
                        <i className="fa-solid fa-user-plus"></i>
                        <div className="careers-text">
                            <h4>Careers</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <NavLink  to="/" className="application-link">Send an application <i className="fa-solid fa-arrow-right"></i></NavLink >
                        </div>
                    </div>
                </div>
    
    
              <ContactForm/>
    
            </div>
    
        </section>
        </>
      )
    }
 

export default ContactComponent
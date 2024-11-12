import React, { useState, useEffect } from 'react'
import PhoneIcon from '../assets/images/icon_phone.svg'
import ChatIcon from '../assets/images/icon_chat.svg'
import { Link, NavLink } from 'react-router-dom'
import FaqsItem from './FaqsItem'


const Faqs = () => {
    


  return (
    <>
     <section className="faqs">
    
    <div className="container">

            <div className="heading">
                <h2>Any questions?<span> Check out the FAQs</span></h2>
                <p>Still have unanswered questions and need to get in touch?</p>    
            </div>

           
      <FaqsItem/>
    
        <div className="contact-area">
                
            <div className="contact-box">
                <img src={PhoneIcon} alt=""/>
                <p className="small-text">Still have questions?</p>
                <NavLink to="/contact" className="contact-phone">
                    Contact us 
                    <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
            </div>
    
            <div className="contact-box ">
                <img src={ChatIcon}alt=""/>
                <p className="small-text">Don't like phone calls?</p>
                <a href="#" className="contact-chat">
                        Contact us 
                <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>


                    <Link to="/contact" className="btn-primary">Contact us now</Link>
               
            </div>
    
</div>

 </section>

    </>
  )
}

export default Faqs

// function Faqs() {
//   return (
   
//   )
// }

// export default Faqs
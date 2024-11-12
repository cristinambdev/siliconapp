import React, { useContext, useState } from 'react'
import { FormContext } from '../contexts/FormContext'

import SubscriptionIcon from '../assets/images/subscription-icon-1.svg fill.svg'
import EmailIcon from '../assets/images/vector_email_subscription.svg'


const Subscription = () => {

  const [ submitted, setSubmitted ] = useState(false)

  const [formData, setFormData] = useState({ email: ''})
  const [errors, setErrors] = useState({})

  const handleOk = () => {
      setSubmitted(false)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
}


const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
        newErrors.fullName = "Must be at least 2 characters long, no numbers"
    }
    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
        newErrors.email = "Please, enter a valid email"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) { 
          setSubmitted(true);
          setFormData({ email: '' })
        } 
    }
  };

  if(submitted) {
    return (
      <div className = "confirmation-message">
        <h2>Thank you for subscribing to our newsletter</h2>
        <button className='btn-primary' onClick={handleOk}>Ok</button>
      </div>
    )
  }


  
  return (
    <section className="subscription">
      <div className="container">
            <img className="bell" src={SubscriptionIcon} alt="Subscription Icon" />
            <h2>Subscribe to our newsletter <span>to stay informed about our latest updates</span></h2>
          
          <form onSubmit={handleSubmit} className="subscription-form" noValidate>
            <img className="subscription-icon" src={EmailIcon} alt="Email Icon" />
             
              <div className='input-group'>
              <input
                type="email"
                name="email"
                className={`email-input ${errors.email ? 'input-error' : ''}`}
                placeholder="Your email"
                onChange={handleInputChange}
                value={formData.email}
              />
              <button type="submit" className="btn-primary">Subscribe</button>
              </div>

              <div className="invalid-input">              
                {errors.email && <p>{errors.email}</p>}
              </div>
   
          </form>
      </div>
    </section>
  )
}

export default Subscription



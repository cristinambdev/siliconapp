import React, { useContext, useState } from 'react'
import { FormContext } from '../contexts/FormContext'

import SubscriptionIcon from '../assets/images/subscription-icon-1.svg fill.svg'
import EmailIcon from '../assets/images/vector_email_subscription.svg'


const Subscription = () => {
  const { formData, setFormData, errors, validateForm, handleInputChange } = useContext(FormContext);
  const [submitted, setSubmitted] = useState(false);

  const handleOk = () => setSubmitted(false);


  //WITH SUGGESTIONS FROM CHAT GPT tO MAKE BOTH THE SUBSCRIPTION AND FORM TO WORK)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm(['email'])) { 
      try {
        const payload = { email: formData.email };
  
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
  
        if (res.ok) {
          console.log("Form submitted successfully.");
          setSubmitted(true);
          setFormData((prev) => ({ ...prev, email: '' })); // Clear email field
        } else {
          console.error("Server error:", await res.text());
        }
      } catch (err) {
        console.error("Network or fetch error:", err.message);
      }
    } else {
      console.error("Validation failed. Errors:", errors); // Log only email-related errors
    }
  };
  

  if (submitted) {
    return (
      <div className="confirmation-message">
        <h2>Thank you for subscribing to our newsletter</h2>
        <button className="btn-primary" onClick={handleOk}>Ok</button>
      </div>
    );
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
                  value={formData.email || ''}
                />
                <button 
                  type="submit" 
                  className="btn-primary"
                  >
                  Subscribe
                </button>
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



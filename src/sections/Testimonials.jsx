import React, { useState, useEffect } from 'react'
import TestimonialItem from './TestimonialItem'



const Testimonials = () => {

    const [testimonialItems, setTestimonialItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonialItems(data)
    }

    useEffect(() => {

        fetchData()
     
    }, [])
    


  return (
    <section className="reviews">

    <div className="container">

        <div className="heading">
            <h2>Clients are Loving Our App</h2>
        </div>
    
    
            {
                testimonialItems.map((item) => (
                <TestimonialItem key ={item.id} item={item} />))
            }
    
    </div>

</section> 
  )
}

export default Testimonials







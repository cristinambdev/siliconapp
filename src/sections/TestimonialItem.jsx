import React from 'react'
import Quotes from '../assets/images/quotes.svg'
import StarRating from './StarRating'

const TestimonialItem = ({item}) => {
  return (
    <>

        <div className="review-box">
            <img className="quotes" src={Quotes} alt=""/>

            <StarRating starRating={item.starRating}/>    

            <p className="comment">{item.comment}</p>
                
            <div className="reviewer">
                <img className="avatar" src={item.avatarUrl} alt="author profile picture"/>
                <div className="signature">
                <p className="reviewer-name">{item.author}</p>
                <p className="reviewer-job">{item.jobRole}</p>
                </div>
            </div>
        </div>

   

    </>
  )
}

export default TestimonialItem
import React from 'react'

const StarRating = ({starRating = 0}) => {

    const maxStars = 5
    const filledStars = Math.min(Math.max(starRating, 0), maxStars) // CHAT GPT suggestion as I was geting "invalid Array length" error
    const emptyStars = maxStars - filledStars



  return (
        <div className='star-rating'>

            {
                [...Array(filledStars)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                ) )
            }

{
                [...Array(emptyStars)].map((_, index) => (
                    <i key={index} className="fa-regular fa-star"></i>
                ) )
            }

        </div>
  )
}

export default StarRating
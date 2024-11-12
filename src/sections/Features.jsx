import React from 'react'
import FeaturesImagePhone from '../assets/images/iPhone12_yourcards.svg'
import FeaturesImageCard from '../assets/images/creditcard_yourcards.svg'
import FeaturesItem from './FeaturesItem'

function Features() {
  return (
    <section className="app-features">
        <div className="container">

            <div className="phone-yourcards">
                <img className="phone" src={FeaturesImagePhone} alt="phone showing transaction detail"/>
                <img className="credit-card" src={FeaturesImageCard} alt="credit card"/>
            </div>

            <div className="features-content">
                <div className="heading">
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. 
                        Nam luctus facilisis ultrices. Pellentesque volutpat ligula oc est. Mattis fermentum, at nec lacus.</p>
                </div>

                <div className="items">
                    <FeaturesItem/>
                
                </div>
            </div>
        </div>

</section>
  )
}

export default Features
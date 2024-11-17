import React from 'react'
import PaymentsVektor from '../assets/images/vektor_creditcard.svg'
import SecurityVektor from '../assets/images/vektor_security.svg'
import StatistiksVektor from '../assets/images/vektor_statistics.svg'
import SupportVektor from '../assets/images/vektor_support.svg'
import CashbackVektor from '../assets/images/vektor_cashback.svg'
import StandardsVektor from '../assets/images/vektor_standards.svg'

const FeaturesItem = () => {
  return (
    <>

      <div className="features">

      <div className="features-icon">
          <img src={PaymentsVektor} alt="credit card icon"/>
      </div>

      <div className="features-text">
          <h5>Easy Payments</h5>
          <p>Id mollis consectetur congue aegestas egestas suspendisse blandit justo.</p>
      </div>
      </div>

      <div className="features">

      <div className="features-icon">
          <img src={SecurityVektor}  alt="shield icon"/>
      </div>

      <div className="features-text">
          <h5>Data Security</h5>
          <p>Augue pulvinar justo, fermentum
              fames aliquam accumsan vestibulum
              non.</p>
      </div>
      </div>

      <div className="features">
      <div className="features-icon">
          <img src={StatistiksVektor}  alt="statistics icon"/>
      </div>
      <div className="features-text">
          <h5>Cost Statistics</h5>
          <p>Mattis urna ultricies non amet, purus
              in auctor non. Odio vulputate ac nibh.</p>
      </div>
      </div>

      <div className="features">
      <div className="features-icon">
          <img src={SupportVektor}  alt="chatting bubbles icon"/>
      </div>
      <div className="features-text">
          <h5>Support 24/7</h5>
          <p>A elementum, imperdiet enim, pretium
              etiam facilisi in aenean quam mauris.</p>
      </div>
      </div>

      <div className="features">
      <div className="features-icon">
          <img src={CashbackVektor}  alt="wallet icon"/>
      </div>
      <div className="features-text">
          <h5>Regular Cashback</h5>
          <p>Sit facilisis arcu, fermentum
              vestibulum arcu elementum imperdiet
              eleifend.</p>
      </div>
      </div>

      <div className="features">
      <div className="features-icon">
          <img src={StandardsVektor} alt="smiley face icon"/>
      </div>
      <div className="features-text">
          <h5>Top Standards</h5>
          <p>Faucibus maecenas lorem
              cursus nibh. Sociis risus id. Sit
              facilisis dolor arcu.</p>
      </div>
      </div>
        
    </>
  )
}

export default FeaturesItem
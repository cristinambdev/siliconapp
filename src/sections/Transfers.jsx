import React from 'react'
import Check from '../assets/images/bx-check-circle.svg'
import PaymentsVektor from '../assets/images/vektor_creditcard.svg'
import CashbackVektor from '../assets/images/vektor_cashback.svg'
import TransfersImageBottom from '../assets/images/detailed_explanation_bottom_img.svg'
import TransfersImageTop from '../assets/images/detailed_explanation_top_picture.svg'



function Transfers() {
  return (
    <section className="transfers">
    <div className="container">
        
        <div className="left-explanation">
            
            <div className="text-top">
                <h3>Make your money transfer simple and clear</h3>
                <ul>
                    <li>
                        <p><img className="check" src={Check} alt=""/> 
                            Banking transactions are free for you 
                        </p> 
                    </li>
                        
                    <li>
                        <p><img className="check" src={Check} alt=""/> 
                            No monthly cash commission
                        </p>
                    </li>                        
                    <li>
                        <p><img className="check" src={Check} alt=""/> 
                            Manage payments and transactions online
                        </p>
                    </li>                     
                </ul>
                <a className="btn-primary learn-more">
                    Learn more 
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="contacts-img">
                <img src={TransfersImageBottom} alt=""/>
        </div>
           
    </div>
    
    <div className="right-explanation">
        <div className="september-forecast-img">
            <img src={TransfersImageTop} alt=""/>
        </div>
        <div className="heading">
            <h3>Receive payment from international bank details</h3>
        </div>
        
        <div className="content-left">

        <div className="features-icon">
            <img src={PaymentsVektor} alt="credit card icon"/>
        </div>

            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            <a className="btn-primary learn-more">
                Learn more
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
        <div className="content-right">
            <div className="features-icon">
                <img src={CashbackVektor} alt=""/>
            </div>
            <p>A elem  entur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        </div>
    </div>    
</div>

</section>
  )
}

export default Transfers
import React from 'react'
import CarousselPhone1 from '../assets/images/caroussel_phone1.svg'
import CarousselPhone2 from '../assets/images/caroussel_phone2.svg'
import CarousselPhone3 from '../assets/images/caroussel_phone3.svg'
import CarousselPhone4 from '../assets/images/caroussel_phone4.svg'
import CarousselPhone5 from '../assets/images/caroussel_phone5.png'
import CarousselPhone6 from '../assets/images/caroussel_phone6.svg'
import CarousselPhone7 from '../assets/images/caroussel_phone7.svg'

function Caroussel() {
  return (
    <section className="caroussel">
    <div className="container">

        <h2>How Does it Work?</h2>

        <div className="image-container">
                <img className="caroussel-img1" src={CarousselPhone1} alt="phone showing a credit card and a list of transaction"/>
                <img className="caroussel-img4" src={CarousselPhone4} alt="phone showing a timeline with expenses"/>
                <img className="caroussel-img2" src={CarousselPhone2} alt="phone showing a credit card and a list of transaction"/>
                <img className="caroussel-img3" src={CarousselPhone3} alt="phone showing an account balance and list of contacts to send money to"/>
                <img className="caroussel-img5" src={CarousselPhone5} alt="phone showing an account balance and list of contacts to send money to"/>
                <img className="caroussel-img6" src={CarousselPhone6} alt="phone showing an account balance and list of contacts to send money to"/>
                <img className="caroussel-img7" src={CarousselPhone7} alt="phone showing a 15 dollars transfer to another user"/>
        </div>

                <div className="caroussel-text phone" id="text-mobile">
                    <h4>Transfers to people from your contact list</h4>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis
                        ultrices. Pellentesque volutpat ligula est. Mattis
                        fermentum, at nec lacus. </p>
                </div>

                <div className="caroussel-text tablet" id="text-tablet">
                    <h4>Step 3. Transfers to people from your contact list</h4>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                        Pellentesque volutpat ligula est. Mattis fermentum, at nec
                        lacus. </p>
                </div>
          
                <div className="caroussel-text desktop" id="text-desktop">
                    <h4>Latest transaction history</h4>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique 
                            quisque hac in consectetur condimentum. </p>
                </div>
            
            

    </div>

</section>
  )
}

export default Caroussel
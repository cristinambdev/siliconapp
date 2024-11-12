import React from 'react'

const Location = () => {
  return (
    <>
    <section className="location">
        <div className="container">

            <div className="map" style={{height:'100%',  width:'100%', display:'inline-block', overflow:'hidden'}}>

                <iframe src="https://www.google.com/maps/d/embed?mid=1OAEKhdFYEDm7LsSMzt61I1deNvRSFYk&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>                    
            
            </div>

            <div className="addresses">

                <div className="location-1">
                    <h4> Silicon Apliccations 1</h4>
                    <div className="address">
                        <i className="fa-solid fa-location-dot" style={{color:'#6366F1'}}></i>
                        <p> Stenvägen 6, 702 44 Örebro, Sweden</p>
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-phone-volume" style={{color:'#6366F1'}}></i>
                        <p> (+46) 700 - 0956</p>
                    </div>
                    <div className="opening-times">
                        <div className="weekday-hours">
                        <i className="fa-regular fa-clock" style={{color:'#6366F1'}}></i>
                        <p><span className='weekdays'>Mon-Fri:</span><span>9:00 am - 22:00am</span></p>
                    </div>
                        <p><span className='weekend-days'>Sat-Sun:</span><span>9:00 am - 20:00am</span></p>
                       
                    </div>
                    
                    
                </div>

                <div className="location-2">

                    <h4> Silicon Apliccations 2</h4>
                    <div className="address">
                        <i className="fa-solid fa-location-dot" style={{color:'#6366F1'}}></i>
                        <p> Pilgatan 2, 721 30 Västerås, Sweden</p>
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-phone-volume" style={{color:'#6366F1'}}></i>
                        <p>(+46) 700 - 0968</p>
                    </div>
                    <div className="opening-times">
                        <div className="weekday-hours">
                        <i className="fa-regular fa-clock" style={{color:'#6366F1'}}></i>
                        <p><span className='weekdays'>Mon-Fri:</span><span>9:00 am - 22:00am</span></p>
                    </div>
                        <p><span className='weekend-days'>Sat-Sun:</span><span>9:00 am - 20:00am</span></p>
                       
                    </div>

                    
                </div>

            </div>
            
            <div className="social-icons">
                   <div className='features-icon'>
                   
                   <a target="_blank" href="https://facebook.com"> <i className="fa-brands fa-facebook"></i></a>

                   </div>

                   <div className='features-icon'>
                   
                   <a target="_blank" href="https://x.com"><i className="fa-brands fa-square-x-twitter"></i></a> 

                   </div>

                   <div className='features-icon'>
                   
                   <a target="_blank" href="https://instagram.com"><i className="fa-brands fa-square-instagram"></i></a>

                   </div>

                   <div className='features-icon'>

                   <a target="_blank" href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a>

                   </div>

                </div>

        </div>

    </section>

    </>
  )
}

export default Location
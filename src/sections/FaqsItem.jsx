import React,{ useState, useEffect } from 'react'
import axios from 'axios'




const FaqsItem = ({}) => { 

    const [faqsItems,setFaqsItems] = useState([])

    const getDataUsingAxios = async () => {
        const res = await axios.get('https://win24-assignment.azurewebsites.net/api/faq')
        setFaqsItems(res.data)
    }

        useEffect(() => {

            getDataUsingAxios()

    }, [])
   
    const [accordion, setAccordion] = useState(-1)

    const toggleAccordion = (index) => {
        if(index === accordion){
            setAccordion(-1)
            return
        }
        setAccordion(index)
    }



  return (
<>
    <div className="faqs-accordion">
            
        {
        faqsItems.map((item, index) => 

            <div className="accordion-item" key={index} onClick = {() => toggleAccordion(index)}>
        
                <div className="question" >
                    <p className={accordion === index ? "active" : ""}>{item.title}</p>
                        <button className="btn-round" style={{
                            backgroundColor: accordion === index ? '#6366F1' : '',
                            transition: 'background-color 0.8s ease'

                        }}>
                            
                            {accordion === index ? (
                                <>
                                <i className="fa solid fa-chevron-up" style={{color: "#FFF"}} ></i>
                                </>
                            ) : (
                            <>
                            <i className="fa-solid fa-chevron-down" ></i>

                            </>
                            )}
                        </button>
                 </div>
        
            <div className="answer">
                    <div className="expandable">
                        <p className={accordion === index ? "active" : "inactive"}>{item.content}</p>
                    </div>
                </div> 
            </div>
                

         )}
  
</div>
</>

  )
}

export default FaqsItem
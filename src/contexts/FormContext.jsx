import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {

    const options = [
        { id: 1, text: "Features" },
        { id: 2, text: "Services" },
        { id: 3, text: "Finance" },
        { id: 4, text: "Other" }
    ]
    
     const [formData, setFormData] = useState(
            { fullName: '', 
              email: '', 
              category: options[0].id })
    
        
    const [errors, setErrors] = useState({})
    

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value })
        }
        
      
        const validateForm = () => {
            const newErrors = {}
    
            if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
                newErrors.fullName = "Must be at least 2 characters long, no numbers"
            }
            if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
                newErrors.email = "Please, enter a valid email"
            }
    
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0
        }
    
 

  return (
    <FormContext.Provider value={{ formData, setFormData, errors, options, validateForm, handleInputChange}}>
      {children}
    </FormContext.Provider>
  )
}


export default FormProvider
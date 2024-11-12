import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './views/Home'
import Breadcrumbs from './sections/Breadcrumbs'
import Contact from './views/Contact'
import Header from './sections/Header'
import Footer from './sections/Footer'

import { FormProvider } from './contexts/FormContext'


export const App = () => {


  return (


  <BrowserRouter>
    
    <FormProvider>
       <div className="wrapper" data-theme="light">
  
        <Header/>

        <Breadcrumbs />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer/>
  
      </div>
      </FormProvider>

  </BrowserRouter>

  )
}

export default App


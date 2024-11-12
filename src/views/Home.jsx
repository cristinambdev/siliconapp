import React from 'react'

import Hero from '../sections/Hero'
import Brands from '../sections/Brands'
import Features from '../sections/Features'
import Caroussel from '../sections/Caroussel'
import Transfers from '../sections/Transfers'
import Testimonials from '../sections/Testimonials'
import Faqs from '../sections/Faqs'
import Subscription from '../sections/Subscription'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Features/>
      <Caroussel/>
      <Transfers/>
      <Testimonials/>
      <Faqs/>
      <Subscription/>
    </>
  )
}

export default Home
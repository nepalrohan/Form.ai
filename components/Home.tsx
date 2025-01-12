import React from 'react'
import HeroSection from './HeroSection'
import PricingPage from '@/components/PricingPage'
import Footer from './Footer'
const HomePage = () => {
  return (
    <div className='grid  items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>

<HeroSection/>
      <PricingPage/>
      <Footer/>  
    </div>
  )
}

export default HomePage
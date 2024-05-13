import React from 'react'
import Header from '../Components/Header/Header'
import Mindset from '../Components/LandingPage/Mindset'

import Video from '../Components/LandingPage/Video/Video'
import Footer from '../Components/LandingPage/Footer'
import Quotes from '../Components/LandingPage/Quotes/Quotes'
import FAQ from '../Components/LandingPage/FAQ'

const Homepage = () => {
  return (
    <div>
      <div className='h-[45rem]'>
        <Header/>
      </div>

      <div>
        <Mindset/>
      </div>

      <div>
        <Quotes/>
      </div>

      <div>
        <FAQ/>
      </div>

      <div className='bg-black'>
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage

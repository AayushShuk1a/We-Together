import React from 'react'
import Header from '../Components/Header/Header'
import Mindset from '../Components/LandingPage/Mindset'
import Footer from '../Components/LandingPage/Footer'
import Quotes from '../Components/LandingPage/Quotes/Quotes'


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

      

      <div className='bg-black'>
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage

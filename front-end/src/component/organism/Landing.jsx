import React from 'react'
import AfterHero from '../molecule/AfterHero'
import BeforeFooter from '../molecule/BeforeFooter'
import Footer from '../molecule/Footer'
import Navbar from '../molecule/Navbar'
import Hero from '../molecule/Hero'

function Landing() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AfterHero/>
        <BeforeFooter/>
        <Footer/>
    </div>
  )
}

export default Landing
import React from 'react'
import AfterHero from '../molecule/afterHero/AfterHero'
import BeforeFooter from '../molecule/beforeFooter/BeforeFooter'
import Footer from '../molecule/footer/Footer'
import Navbar from '../molecule/navbar/Navbar'
import Hero from '../molecule/hero/Hero'

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
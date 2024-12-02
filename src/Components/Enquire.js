import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Contact/Section1'
import Footer from './Footer'

export default () =>{
  return (
    <div>
        <HeroSection tittle={"Enquire"} img={"/assests/Svgs/contactform.svg"}/>
        <Section1/>
        <Footer/>
    </div>
  )
}
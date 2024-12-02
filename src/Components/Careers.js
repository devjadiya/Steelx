import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Carrers/Section1'
import Footer from './Footer'

export default () =>{
  return (
    <div>
      
        <HeroSection tittle={"Careers"} img={"/assests/Svgs/career.svg"}/>

        <Section1/>
        <Footer/>
    </div>
  )
}
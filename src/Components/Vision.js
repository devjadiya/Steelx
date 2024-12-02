import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Vision/Section1'
import Section2 from './Vision/Section2'
import Footer from './Footer'

export default () =>{
  return (
    <div>
        <HeroSection  tittle={"Vision-Mission"} img={"/assests/Svgs/vision.svg"}/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}
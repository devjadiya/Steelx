import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Location/Section1'
import Footer from './Footer'

export default () =>{
  return (
    <div>
        <HeroSection tittle={"Manufacturing Location"} img={"/assests/Svgs/contactbg.svg"}/>
        <Section1/>
        <Footer/>
    </div>
  )
}
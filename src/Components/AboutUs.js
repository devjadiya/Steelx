import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './About/Section1'
import Section2 from './About/Section2'
import Section3 from './About/Section3'
import Section4 from './About/Section4'

export default () =>{
  return (
    <div>
        <HeroSection tittle={"About Us"} img={"/assests/Svgs/aboutus.svg"}/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
  )
}
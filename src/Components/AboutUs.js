import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './About/Section1'
import Section2 from './About/Section2'
import Section3 from './About/Section3'
import Section4 from './About/Section4'
import { About_data } from '../Data'
import Footer from './Footer'

export default () =>{
  return (
    <div>
        <HeroSection tittle={About_data.heading} img={About_data.bg_img}/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
    </div>
  )
}
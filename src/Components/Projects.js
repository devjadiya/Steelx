import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Projects/Section1'
import Footer from './Footer'

export default () =>{
  return (
    <div>
        <HeroSection tittle={"Projects"} img={"/assests/Svgs/project.svg"}/>
        <Section1/>
        <Footer/>
    </div>
  )
}
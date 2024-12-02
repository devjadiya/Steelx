import React from 'react'
import HeroSection from './Comman/HeroSection'
import Section1 from './Accessories/Section1'
import Footer from './Footer'

export default () => {
  return (
    <div>
      <HeroSection tittle={"Accessories"} img={"/assests/Svgs/acc.svg"} />
      <div className=' bg-[#F3F3F3] flex justify-center items-center lg:py-20 py-10 '>
        <h1 className=' text-black lg:text-3xl text-xl font-medium text-center w-10/12 '>
        Excellence in Every Detail: We are committed to delivering the highest quality across every intricate aspect of our work.
        </h1>
      </div>
      <Section1 />

      <Footer/>
    </div>
  )
}
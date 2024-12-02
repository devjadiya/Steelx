import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './HeroSection'
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Section4 from './Home/Section4'
import Section5 from './Home/Section5'
import {motion} from "framer-motion"
import Canvas from '../Components/Canvas'
import Loader from './Loder'
import Footer from './Footer'

 

export default function Home() {

  const handleClick = () => {
    // Implement the logic to scroll back to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div>
 {/* <div className=' lg:hidden'>
  
<HeroSection/> 
<Section1/>
<Section2/>
<Section7/>
<Section3/>
<Section5/>
<Section4/>
<Footer/>



</div>  */}
<div className=' '>

<Loader/>
<Canvas/>
<Footer/>

<motion.div onClick={handleClick} whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration:0.2}}  className='w-12 h-12 cursor-pointer flex justify-center items-center transition-all bg-bg-orange rounded-full fixed bottom-10 z-[99999] right-10'>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.295 16.3888H7.295V4.38883L1.795 9.88883L0.375 8.46883L8.295 0.548828L16.215 8.46883L14.795 9.88883L9.295 4.38883V16.3888Z" fill="#FFFCFC"/>
</svg>

</motion.div>
</div>

    </div>
  )
}

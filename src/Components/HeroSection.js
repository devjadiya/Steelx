import React from 'react'
import { Link } from 'react-scroll'
import {motion} from "framer-motion"
import { Home_Hero_Section } from '../Data'
export default function HeroSection() {
  return (
    <div>
      <video className=' w-full lg:h-screen h-96  absolute left-0 top-0 object-cover z-0' autoPlay loop muted src={Home_Hero_Section.bg_video_path1} />

      <div className=' w-full z-[40] lg:h-screen top-0 left-0 relative text-white lg:pl-32 px-4 flex lg:flex-row flex-col py-10 '>
        <div style={{ fontFamily: "Chakra Petch" }} className=' lg:w-1/2 w-full flex flex-col lg:gap-y-5  gap-y-2 justify-center lg:items-start items-center '>
          <h1 className=' lg:text-9xl text-4xl font-semibold'>
            {Home_Hero_Section.top_heading}
          </h1>
          <h1 className=' lg:text-9xl text-4xl font-bold'>
          {Home_Hero_Section.middle_heading}
          </h1>
          <h1 className=' lg:text-9xl text-4xl font-semibold'>
            {Home_Hero_Section.lower_heading}
          </h1>
          <p className=' lg:text-2xl text-sm lg:text-left hidden lg:block text-center font-semibold'>
          {Home_Hero_Section.description} </p>
        </div>
        <div className=' hidden  lg:w-1/2 w-full lg:flex flex-col justify-end items-end py-20 pr-10'>
          <Link to='entry' smooth={true} duration={2000}> 
          <div className=' cursor-pointer lg:w-full h-48 overflow-hidden rounded-2xl justify-center items-center'>
       
          {/* <video className='absoulte w-full object-cover h-full z-10' /> */}

          <video src={Home_Hero_Section.card_video_url1}  muted autoPlay loop  className='absoulte w-full object-cover h-full z-10'/>
            <motion.svg  className=' absolute z-20  translate-x-36 -translate-y-32' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_597_88)">
                <path d="M50.4596 33.9792L26.3971 19.25C25.5221 18.6667 24.793 19.1042 24.793 20.125V49.875C24.793 50.8959 25.5221 51.3334 26.3971 50.75L50.4596 36.0209C50.642 35.92 50.794 35.7721 50.8998 35.5926C51.0057 35.413 51.0615 35.2084 51.0615 35C51.0615 34.7916 51.0057 34.587 50.8998 34.4075C50.794 34.228 50.642 34.0801 50.4596 33.9792Z" fill="white" />
                <path d="M35.0013 2.91684C28.6558 2.91684 22.4528 4.79849 17.1768 8.32385C11.9007 11.8492 7.78849 16.86 5.36018 22.7224C2.93187 28.5849 2.29651 35.0358 3.53446 41.2593C4.7724 47.4829 7.82804 53.1996 12.315 57.6865C16.8019 62.1735 22.5186 65.2291 28.7422 66.467C34.9657 67.705 41.4166 67.0696 47.2791 64.6413C53.1415 62.213 58.1523 58.1008 61.6776 52.8247C65.203 47.5486 67.0846 41.3457 67.0846 35.0002C67.104 30.7815 66.2873 26.6009 64.6818 22.6996C63.0763 18.7984 60.7138 15.2538 57.7307 12.2708C54.7476 9.28772 51.2031 6.92521 47.3019 5.31971C43.4006 3.71421 39.22 2.89753 35.0013 2.91684ZM35.0013 61.2502C29.8096 61.2502 24.7344 59.7106 20.4176 56.8263C16.1008 53.9419 12.7363 49.8422 10.7495 45.0456C8.76268 40.2491 8.24284 34.9711 9.2557 29.8791C10.2686 24.7871 12.7686 20.1097 16.4398 16.4386C20.1109 12.7675 24.7882 10.2674 29.8802 9.25456C34.9722 8.2417 40.2502 8.76153 45.0468 10.7483C49.8433 12.7351 53.943 16.0997 56.8274 20.4165C59.7118 24.7332 61.2513 29.8084 61.2513 35.0002C61.213 41.9503 58.4351 48.6049 53.5206 53.5194C48.606 58.434 41.9514 61.2119 35.0013 61.2502Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_597_88">
                  <rect width="70" height="70" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>


          </div></Link>
        </div>

      </div>
    </div>
  )
}

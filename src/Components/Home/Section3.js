import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Home_Section4 } from '../../Data'
const Section3=() =>{
  const [activeImg, setActiveImg] = useState(1)


  const btnpressnext = () => {
    if (activeImg < 5) { setActiveImg(activeImg + 1) }
    else {
      setActiveImg(1)
    }

  }
  const btnpressprev = () => {
    if (activeImg > 1) {
      setActiveImg(activeImg - 1)
    }
    else {
      setActiveImg(5)
    }
  }
  return (
    <div>
      <section className="relative w-full lg:h-screen lg:px-24  bg-[#F5F5F5] flex flex-col justify-center items-center py-4 px-4 md:px-8">
        <h1 className=' lg:text-5xl text-4xl font-extrabold my-16 text-black'>{Home_Section4.haeding}</h1>
        <div className="relative z-10 gap-5  flex-col-reverse flex lg:flex-row">
          <div className="flex flex-col lg:w-1/2 w-full  py-5 ">
            <ul className=' flex flex-col  text-black lg:text-3xl text-xl font-bold gap-y-5'>
              <li onClick={() => setActiveImg(1)} className={`${activeImg == 1 ? "text-text-orange" : "text-black"} hover:text-text-orange cursor-pointer`}>{Home_Section4.Items[0].description}</li>
              <li onClick={() => setActiveImg(2)} className={`${activeImg == 2 ? "text-text-orange" : "text-black"} hover:text-text-orange cursor-pointer`}>{Home_Section4.Items[1].description}</li>
              <li onClick={() => setActiveImg(3)} className={`${activeImg == 3 ? "text-text-orange" : "text-black"} hover:text-text-orange cursor-pointer`}>{Home_Section4.Items[2].description}</li>
              <li onClick={() => setActiveImg(4)} className={`${activeImg == 4 ? "text-text-orange" : "text-black"} hover:text-text-orange cursor-pointer`}>{Home_Section4.Items[3].description}</li>
              <li onClick={() => setActiveImg(5)} className={`${activeImg == 5 ? "text-text-orange" : "text-black"} hover:text-text-orange cursor-pointer`}>{Home_Section4.Items[4].description}</li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/2 w-full mt-5  justify-center items-center sm:w-9/12 lg:mt-0 ">

            {/* <button className='w-20 h-20 rounded-full bg-[#686868] text-white flex justify-center items-center'>
                    \f104
                    </button> */}
            <img src={`/assests/WhyUs/${activeImg}.svg`} className='w-3/4 h-3/4 object-cover rounded-2xl' />
          </div>
        </div>

        <motion.button className="pre-btn w-10 h-10 bg-black z-[30] text-white font-bold text-2xl rounded-full flex justify-center items-center absolute left-5 lg:left-1/2 translate-y-16 top-[35%] lg:top-1/2" onClick={btnpressprev}><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.13L4.583 9L12 15.885L9.7166 18L-3.85895e-07 9L9.7166 0L12 2.13Z" fill="#FFFCFC"/>
</svg>
</motion.button>
        <button className="next-btn w-10 h-10 bg-black z-[30] text-white font-bold text-2xl rounded-full flex justify-center items-center absolute right-10  lg:top-1/2 translate-y-16 top-[35%]" onClick={btnpressnext}>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.87L7.417 9L0 2.115L2.2834 0L12 9L2.2834 18L0 15.87Z" fill="#FFFCFC"/>
</svg>

</button>
      </section>
    </div>
  )
}
 export default Section3
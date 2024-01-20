import React from 'react'
import { motion } from "framer-motion"
import { Home_Section3 } from '../../Data';
const Section2 = () => {

    const cardScaleVariants = {
        hover: {
            scale: 1.05, // Adjust the scale factor as needed
            transition: {
                duration: 0.4, // Adjust the duration of the scaling animation
                ease: "easeInOut", // You can choose a different easing function
            },
        },
    };
    return (
        <div>
          
       

            
<style>
{
    `.bg-1{
        background-image: url("/assests/bg-pro.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }`
}
</style>
            <section className="relative w-full bg-1 z-10 mx-auto lg:h-screen flex justify-center items-center py-4 px-4 md:px-8">

                <div className="relative z-10 gap-5 items-center lg:flex">
                    <div className="flex lg:w-1/2  w-full flex-col lg:px-12 px-4 justify-end items-end max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                        <h3 className="lg:text-7xl text-3xl  text-white font-extrabold lg:text-right text-center">
                          {Home_Section3.haeding}  
                        </h3>

                    </div>
                    <div className="flex lg:flex-row flex-col lg:w-1/2 gap-y-5 lg:gap-y-0 mt-5 mx-auto sm:w-9/12 h-full lg:mt-0  w-full">
                        <div className=' w-full lg:w-1/3 flex flex-col px-6  justify-center items-center gap-y-5'>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/11.svg' className=' cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Warehousing</p>
                            </div>

                        </div>
                        <div className=' w-full lg:w-1/3 flex flex-col justify-center items-center px-6 gap-y-5'>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/12.svg' className=' cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Accomodations</p>
                            </div>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/13.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Agriculture</p>
                            </div>
                        </div>
                        <div className=' w-full lg:w-1/3 flex flex-col justify-center items-center px-6 gap-y-5'>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/16.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Projects</p>
                            </div>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/17.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Infrastructure</p>
                            </div>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/18.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Industrial</p>
                            </div>
                        </div>
                        <div className=' w-full lg:w-1/3 flex flex-col justify-center items-center px-6 gap-y-5'>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/14.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Commercial</p>
                            </div>
                            <div className=' rounded-2xl flex flex-col justify-center items-center p-3 bg-white shadow-md w-full h-40'>
                                <motion.img whileHover={"hover"} variants={cardScaleVariants} src='/assests/Svgs/15.svg' className='cursor-pointer object-cover my-2' />

                                <p className=' text-sm text-black font-bold my-2'>Community</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section2;
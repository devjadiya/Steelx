import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Home_Section2 } from '../../Data';
const Section1=()=> {
    const [variant, setVariant] = useState(null)
    const cardScaleVariants = {
        hover: {
            scale: 1.05, // Adjust the scale factor as needed
            transition: {
                duration: 0.4, // Adjust the duration of the scaling animation
                ease: "easeInOut", // You can choose a different easing function
            },
        },
    };

    const svgScaleVariants = {
        hover: {
            scale: 1, // Ensure the SVG maintains its size relative to the card
        },
    };

    return (
        <div>
            <section className=" bg-white relative w-full lg:h-screen flex justify-center items-center mx-auto py-4 px-4 md:px-8">

                <div className="relative z-10 gap-5 items-center lg:flex j-full">
                    
                    <div className="flex lg:flex-row flex-col gap-y-8 lg:w-1/2  mt-5 mx-auto sm:w-9/12 h-full lg:mt-0  w-full">
                        <div className='w-full lg:w-1/3 flex lg:flex-col flex-row gap-x-8  px-6 gap-y-5'>
                            <motion.div
                                variants={cardScaleVariants}
                                whileHover={"hover"}
                                className="rounded-2xl flex flex-col cursor-pointer justify-start items-start p-3 bg-white shadow-md w-full h-48"
                               
                            >
                                <motion.img
                               
                                    src="/assests/Svgs/1.svg"
                                    className="object-cover my-2"
                                />
                                <h1 className="text-text-orange font-semibold text-4xl">85+</h1>
                                <p className="text-xs text-black font-bold my-2">Projects</p>
                            </motion.div>
                            <motion.div   variants={cardScaleVariants}
                                whileHover={"hover"} className=' rounded-2xl cursor-pointer flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                                <img src='/assests/Svgs/2.svg' className=' object-cover my-2' />
                                <h1 className=' text-text-orange font-semibold text-2xl lg:text-4xl'>
                                    35 +
                                </h1>
                                <p className=' text-xs text-black font-bold my-2'>Sales offices world wide</p>
                            </motion.div>
                        </div>
                        <div className='w-full lg:w-1/3 flex lg:flex-col flex-row px-6  gap-x-8  gap-y-5'>
                            <motion.div   variants={cardScaleVariants}
                                whileHover={"hover"} className=' rounded-2xl cursor-pointer flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                                <img src='/assests/Svgs/3.svg' className=' object-cover my-2' />
                                <h1 className=' text-text-orange font-semibold text-2xl lg:text-4xl'>
                                    10 k+
                                </h1>
                                <p className=' text-xs text-black font-bold my-2'>MT productions capacity</p>
                            </motion.div>
                            <motion.div   variants={cardScaleVariants}
                                whileHover={"hover"} className=' rounded-2xl cursor-pointer flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                                <img src='/assests/Svgs/4.svg' className=' object-cover my-2' />
                                <h1 className=' text-text-orange font-semibold text-2xl lg:text-4xl'>
                                    2000 +
                                </h1>
                                <p className=' text-xs text-black font-bold my-2'>Employees world wide</p>
                            </motion.div>
                        </div>
                        <div className='w-full lg:w-1/3 flex lg:flex-col flex-row gap-x-8 px-6 gap-y-5'>
                            <motion.div   variants={cardScaleVariants}
                                whileHover={"hover"} className=' rounded-2xl cursor-pointer flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                                <img src='/assests/Svgs/5.svg' className=' object-cover my-2' />
                                <h1 className=' text-text-orange font-semibold text-2xl lg:text-4xl'>
                                    5 +
                                </h1>
                                <p className=' text-xs text-black font-bold my-2'>Manufacturing location worldwide</p>
                            </motion.div>
                            <motion.div variants={cardScaleVariants}
                                whileHover={"hover"} className=' rounded-2xl flex flex-col cursor-pointer justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                                <img src='/assests/Svgs/6.svg' className=' object-cover my-2' />
                                <h1 className=' text-text-orange font-semibold text-2xl lg:text-4xl'>
                                    2 +
                                </h1>
                                <p className=' text-xs text-black font-bold my-2'>Global Presence</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                        <h3 className="lg:text-5xl text-4xl text-black font-extrabold  ">
                          {Home_Section2.heading}
                        </h3>
                        <p className="text-black leading-relaxed text-md my-8 font-bold">
                                 {Home_Section2.description}  </p>
                        <Link
                            className="mt-5 px-4 py-2 lg:w-1/4 w-1/2 cursor-pointer text-white font-medium flex justify-center items-center  bg-bg-orange hover:bg-black transition-all rounded-full "
                            to="/about">
                            Know More

                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section1;
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Home_Section2 } from '../../Data';
const Overlay=(prop)=> {
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
            <section className="  relative w-full lg:h-full flex justify-start items-center mx-auto py-4 px-4 md:px-8">

                <div className="relative z-10 gap-5 items-center lg:flex w-2/5 ">
                    
                  
                    <div className=" flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                        <h3 className="lg:text-5xl text-4xl text-text-orange font-extrabold  ">
                          {prop.heading}
                        </h3>
                        <p className="text-black leading-relaxed text-lg my-8 font-semibold">
                                 {prop.description}  </p>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Overlay;
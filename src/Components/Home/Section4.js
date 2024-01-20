import React, { useState } from 'react'

const Section4=() =>{
    const data = [
        {
            img_url: "/assests/Customers/1.svg",
            description: "Amongst the World’s Largest PEB manufacturers"
        },
        {
            img_url: "/assests/Customers/2.svg",
            description: "Global Footprint of projects"
        },
        {
            img_url: "/assests/Customers/3.svg",
            description: "Global Engineering Expertise with Innovative Solutions"
        },
        {
            img_url: "/assests/Customers/4.svg",
            description: "High Safety Standards and Sustainable Building Solutions"
        },
        {
            img_url: "/assests/Customers/5.svg",
            description: "Complete Solution Provider"
        },
        {
            img_url:"/assests/Customers/6.svg",
            description: "Amongst the World’s Largest PEB manufacturers"
        },
        {
            img_url: "/assests/Customers/7.svg",
            description: "Global Footprint of projects"
        },
        {
            img_url: "/assests/Customers/8.svg",
            description: "Global Engineering Expertise with Innovative Solutions"
        },
        {
            img_url: "/assests/Customers/9.svg",
            description: "High Safety Standards and Sustainable Building Solutions"
        },
        {
            img_url: "/assests/Customers/10.svg",
            description: "Complete Solution Provider"
        },

    ]
    const [activeImg, setActiveImg] = useState(0)

    const next = () => {
        if (activeImg < 4) { setActiveImg(activeImg + 1) }
        else {
            setActiveImg(0)
        }

    }
    const prev = () => {
        if (activeImg > 0) {
            setActiveImg(activeImg - 1)
        }
        else {
            setActiveImg(4)
        }
    }
    return (
        <div className=' w-full h-[60vh] z-[40]  relative  flex justify-center bg-[#F3F3F3] items-center flex-col gap-y-10'>
            <h1 className=' lg:text-6xl text-4xl text-black font-extrabold'>
                Customers
            </h1>
            <img src={data[activeImg].img_url} className=' h-30 w-30 object-cover' />
            <p className=' lg:text-2xl text-lg lg:w-full w-3/4 text-center text-black font-medium  italic'>"{data[activeImg].description}"</p>

            <button onClick={prev} className=' text-white text-lg font-semibold absolute left-5 lg:left-1/4 h-8 w-8 rounded-full bg-black flex justify-center items-center'>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.13L4.583 9L12 15.885L9.7166 18L-3.85895e-07 9L9.7166 0L12 2.13Z" fill="#FFFCFC"/>
</svg>

            </button>
            <button onClick={next} className=' text-white text-lg font-semibold absolute  right-5 lg:right-1/4 h-8 w-8 rounded-full bg-black flex justify-center items-center'>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.87L7.417 9L0 2.115L2.2834 0L12 9L2.2834 18L0 15.87Z" fill="#FFFCFC"/>
</svg>

            </button>
        </div>
    )
}
 export default Section4
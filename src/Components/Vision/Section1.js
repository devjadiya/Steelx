import React from 'react'

export default function Section1() {
    return (
        <div className=' w-full lg:h-screen bg-[#FFFFFF] gap-y-10  lg:pl-32 px-4  py-10 flex justify-center items-center lg:flex-row flex-col'>

            <div className='lg:w-1/2 text-black w-full flex justify-start items-start pr-16 lg:gap-y-10 gap-y-5 flex-col'>
                <div className='    w-full flex flex-col gap-y-10 '>
                    <h1 className=' font-extrabold lg:text-6xl text-3xl'>
                    Vision
                    </h1>
                    <p className=' text-lg font-bold'>
                        
Empowering Futures Worldwide: Our vision is to be acknowledged as the global frontrunner in the innovative design, manufacturing, supply, and erection of pre-engineered steel buildings (PEB) and structures.
                    </p>
                </div>
                <div className='    w-full flex flex-col gap-y-10 '>
                    <h1 className=' font-extrabold lg:text-6xl text-3xl'>
                      Mission
                    </h1>
                    <p className=' text-lg font-bold'>
                    At SteelX, our mission is to consistently deliver top-tier products to our customers, coupled with personalized services and an unwavering commitment to excellence. We strive to redefine industry standards and ensure enduring satisfaction in every endeavor.
                    </p>
                </div>
            </div>

            <div className=' lg:w-1/2 w-full h-full'>
                <img src='/assests/Svgs/vision1.svg' className=' object-cover w-full h-full' />
            </div>

        </div>
    )
}

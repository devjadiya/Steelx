import React from 'react'
import { About_Section1 } from '../../Data'

export default function Section2() {
    return (
        <section className="relative w-full lg:h-screen flex bg-[#CCCCCC] justify-center items-center mx-auto py-10 px-4 md:px-8">

            <div className="relative z-10 gap-5 items-center lg:flex j-full">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="lg:text-5xl text-4xl text-black font-extrabold  lg:text-left text-center ">
                        {About_Section1.heading}
                    </h3>
                    <p className="text-black leading-relaxed text-xl my-8 font-bold">
                        {About_Section1.description1}
                    </p>
                    <p className="text-black leading-relaxed text-xl my-8 font-bold">
                        {About_Section1.description2}
                    </p>

                </div>
                <div className="flex lg:flex-row flex-col gap-y-8 lg:w-1/2  mt-5 mx-auto sm:w-9/12 h-full lg:mt-0  w-full">
                    <div className='w-full lg:w-1/3 flex lg:flex-col flex-row gap-x-8  px-6 gap-y-5'>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/1.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                85+
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>Projects</p>
                        </div>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/2.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                35 +
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>Sales offices world wide</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex lg:flex-col flex-row px-6  gap-x-8  gap-y-5'>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/3.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                10 k+
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>MT productions capacity</p>
                        </div>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/4.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                2000 +
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>Employees world wide</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex lg:flex-col flex-row gap-x-8 px-6 gap-y-5'>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/5.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                5 +
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>Manufacturing location worldwide</p>
                        </div>
                        <div className=' rounded-2xl flex flex-col justify-start items-start p-3 bg-white shadow-md w-full h-48'>
                            <img src='/assests/Svgs/6.svg' className=' object-cover my-2' />
                            <h1 className=' text-text-orange font-semibold text-4xl'>
                                2 +
                            </h1>
                            <p className=' text-sm text-black font-bold my-2'>Global Presence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

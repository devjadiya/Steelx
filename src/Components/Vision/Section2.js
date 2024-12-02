import React from 'react'
import { OurValues } from '../../Data'

export default function Section2() {
    return (
        <div className=' w-full bg-[#CCCCCC] flex flex-col justify-center items-center lg:py-16 py-10 lg:px-32 px-4'>
            <h1 className=' text-black font-extrabold text-6xl '>
                Our Values
            </h1>

            <div className=' w-full text-black flex flex-col justify-center items-center py-10 gap-y-10'>
                <div className='lg:flex-row flex flex-col justify-center items-center gap-y-6 w-full gap-x-5'>
                    <div className='flex justify-start flex-col items-start  rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start mb-5 items-start'>
                            <img src='/assests/Svgs/ourvalues1.svg' className=' object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>

                            {OurValues[0].heading}
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                            {OurValues[0].description}
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues2.svg' className='mb-5 object-cover ' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[1].heading}
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                            {OurValues[1].description}
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues3.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[2].heading}
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                            {OurValues[2].description}
                        </p>
                    </div>

                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues4.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[3].heading}
                        </h1>
                        <p className='lg:text-md text-sm font-semibold'>
                            {OurValues[3].description}
                        </p>
                    </div>
                </div>
                <div className='lg:flex-row flex flex-col justify-center items-center gap-y-5 w-full gap-x-5'>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues5.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[4].heading}
                        </h1>
                        <p className=' lg:text-md text-smfont-semibold'>
                            {OurValues[4].description}
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues6.svg' className=' mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[5].heading}
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                            {OurValues[5].description}
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues7.svg' className=' mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                            {OurValues[6].heading}
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                            {OurValues[6].description}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

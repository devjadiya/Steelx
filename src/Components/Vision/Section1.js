import React from 'react'
import { Mission_data, Vision_data } from '../../Data'

export default function Section1() {
    return (
        <div className=' w-full lg:h-screen bg-[#FFFFFF] gap-y-10  lg:pl-32 px-4  py-10 flex justify-center items-center lg:flex-row flex-col'>

            <div className='lg:w-1/2 text-black w-full flex justify-start items-start pr-16 lg:gap-y-10 gap-y-5 flex-col'>
                <div className='    w-full flex flex-col gap-y-10 '>
                    <h1 className=' font-extrabold lg:text-6xl text-3xl'>
                  {Vision_data.heading}
                    </h1>
                    <p className=' text-lg font-bold'>
                        {Vision_data.description}

                    </p>
                </div>
                <div className='    w-full flex flex-col gap-y-10 '>
                    <h1 className=' font-extrabold lg:text-6xl text-3xl'>
                      {Mission_data.heading}
                    </h1>
                    <p className=' text-lg font-bold'>
                  {Mission_data.description}
                    </p>
                </div>
            </div>

            <div className=' lg:w-1/2 w-full h-full'>
                <img src={Mission_data.img_url} className=' object-cover w-full h-full' />
            </div>

        </div>
    )
}

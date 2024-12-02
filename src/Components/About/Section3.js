import React from 'react'
import { About_Section2 } from '../../Data'

export default function Section3() {
    return (
        <div className=' lg:flex-row flex-col flex gap-y-5 justify-center items-center bg-white w-full gap-x-10 lg:px-8 px-4 py-10 lg:h-[60vh]'>
            <div className=' lg:w-1/2 w-full flex lg:justify-end lg:text-5xl text-4xl  justify-center font-bold text-black items-center'>
          {About_Section2.heading}
            </div>
            <div className=' lg:w-1/2 w-full flex justify-start lg:text-xl text-sm font-bold text-center lg:text-left text-black items-center'>
          {About_Section2.description}
            </div>
        </div>
    )
}

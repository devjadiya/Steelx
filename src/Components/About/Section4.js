import React from 'react'
import { About_Section3 } from '../../Data'

export default function Section4() {
  return (
    <div className=' w-full lg:h-[90vh] flex lg:flex-row flex-col justify-start bg-[#CCCCCC] items-start lg:py-16 py-8 lg:px-8 px-4'>
<div className=' w-full lg:w-1/2 justify-start items-start flex flex-col gap-y-5 text-black'>
<h1 className=' lg:text-4xl text-4xl font-bold'>
{About_Section3.heading}
</h1>
<p className=' lg:text-xl text-sm font-semibold'>
{About_Section3.description}
</p>
</div>
<div className=' flex justify-center items-center lg:w-1/2 w-full'>
<img src="/assests/Svgs/aboutus1.svg" />
</div>
    </div>
  )
}

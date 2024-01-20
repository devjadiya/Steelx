import React from 'react'

export default function Section1() {
  return (
    <div className=' w-full flex flex-col justify-center gap-y-10 items-center lg:py-20 py-5 px-4 lg:px-32'>

<div className=' lg:flex-row flex-col gap-y-10 flex w-full justify-center items-center gap-x-10'>
<div className=' w-full lg:w-1/3 h-80 flex hover:-translate-y-1  duration-300 transition-all  cursor-pointer justify-end items-start shadow-md rounded-3xl overflow-hidden'>
<img src='/assests/projects/1.svg' className=' z-10 object-cover w-full h-full'/>

</div>
<div className=' w-full lg:w-1/3 h-80 flex justify-end hover:-translate-y-1  duration-300 cursor-pointer transition-all  items-start shadow-md rounded-3xl overflow-hidden'>
<img src='/assests/projects/2.svg' className=' z-10 object-cover w-full h-full'/>

</div>
<div className=' w-full lg:w-1/3 h-80 flex justify-end items-start hover:-translate-y-1 cursor-pointer  duration-300 transition-all  shadow-md rounded-3xl overflow-hidden'>
<img src='/assests/projects/3.svg' className=' z-10 object-cover w-full h-full'/>

</div>
</div>
<div className=' lg:flex-row flex-col gap-y-10 flex hover:-translate-y-1  duration-300 transition-all  w-full justify-center items-center gap-x-10'>
<div className=' w-full lg:w-1/3 h-80 flex justify-end items-start shadow-md cursor-pointer rounded-3xl overflow-hidden'>
<img src='/assests/projects/4.svg' className=' z-10 object-cover w-full h-full'/>

</div>
<div className=' w-full lg:w-1/3 h-80 flex justify-end hover:-translate-y-1  cursor-pointer duration-300 transition-all  items-start shadow-md rounded-3xl overflow-hidden'>
<img src='/assests/projects/5.svg' className=' z-10 object-cover w-full h-full'/>

</div>
<div className=' w-full lg:w-1/3 h-80 flex justify-end hover:-translate-y-1 cursor-pointer  duration-300 transition-all  items-start shadow-md rounded-3xl overflow-hidden'>
<img src='/assests/projects/6.svg' className=' z-10 object-cover w-full h-full'/>

</div>
</div>


    </div>
  )
}

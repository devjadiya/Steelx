import React from 'react'
import { Applications } from '../../Data'

export default function Section1() {
    return (
        <div className=' w-full flex justify-center items-center gap-y-10 lg:py-20 flex-col py-10 lg:px-32 px-4 bg-white '>

            <h1 className=' text-5xl text-black font-extrabold'>Applications</h1>
            <div className='flex lg:flex-row flex-col w-full justify-center gap-y-10 items-center  gap-x-10'>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app1.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> {Applications[0].heading}</h1>
                        <p className='text-black font-medium text-sm'> {Applications[0].description}</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app2.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'>  {Applications[1].heading}</h1>
                        <p className='text-black font-medium text-sm'> {Applications[1].description}</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app3.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> {Applications[2].heading}
</h1>
                        <p className='text-black font-medium text-sm'> {Applications[2].description}</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col w-full justify-center gap-y-10 items-center  gap-x-10'>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app6.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> {Applications[3].heading}</h1>
                        <p className='text-black font-medium text-sm'> {Applications[3].description}</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app5.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> {Applications[4].heading}</h1>
                        <p className='text-black font-medium text-sm'> {Applications[4].description}</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app4.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> {Applications[5].heading}</h1>
                        <p className='text-black font-medium text-sm'> {Applications[5].description} </p>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

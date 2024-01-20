import React from 'react'

export default function Section1() {
    return (
        <div className=' w-full flex justify-center items-center gap-y-10 lg:py-20 flex-col py-10 lg:px-32 px-4 bg-white '>

            <h1 className=' text-5xl text-black font-extrabold'>Applications</h1>
            <div className='flex lg:flex-row flex-col w-full justify-center gap-y-10 items-center  gap-x-10'>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app1.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> Skylights & Wall Lights</h1>
                        <p className='text-black font-medium text-sm'>Made of translucent GRP to match Kirby rib and wall panels, with an estimated light transmitting capacity of 60 %.</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app2.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'> Roof Jacks</h1>
                        <p className='text-black font-medium text-sm'>These are enclosures for pipes or stacks projecting from the roof. They allow for safe working on the roof.</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app3.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'>Aircraft Hangar Doors
</h1>
                        <p className='text-black font-medium text-sm'>Steelx provides solutions for special applications such as aircraft hangars, customized hangar doors and framing, customized support systems for special equipment and maintenance cranes.</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col w-full justify-center gap-y-10 items-center  gap-x-10'>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app6.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'>Sliding Doors</h1>
                        <p className='text-black font-medium text-sm'>Sliding doors are used in hangars, warehouses, etc., where a larger opening into the building is required. They are not hinged but rather rollers are provided on top of the doors and this roller is placed on brackets allowing a sliding movement.</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app5.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'>Ridge Ventilators</h1>
                        <p className='text-black font-medium text-sm'>This is a gravity-type ventilator which is provided with a bird screen and mechanical controlled damper. Allows natural ventilation of the building.</p>
                    </div>
                </div>
                <div className=' overflow-hidden rounded-2xl shadow-lg w-full lg:w-1/3  lg:h-96 gap-y-2 flex flex-col'>
                    <img className=' object-cover w-full h-1/2' src='/assests/Svgs/app4.svg' />
                    <div className='p-3 flex justify-start items-start gap-y-2 flex-col'>
                        <h1 className=' text-black font-bold text-2xl'>Turbovents</h1>
                        <p className='text-black font-medium text-sm'> whirlwind low silhoutte extract ventilator with spun aluminium nonreturn shutter and one-piece base and throat. Mounted on GRP roof curb moulded to suit steelX Roof panels.</p>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

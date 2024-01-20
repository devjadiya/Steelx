import React from 'react'

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
                            
Straightforward Communication
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                        We foster candid discussions, valuing open debates where the best ideas emerge triumphant.
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues2.svg' className='mb-5 object-cover ' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Customer-Centric Approach
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                        At SteelX, customers are at the heart of our focus and initiatives. We strive to exceed expectations through dedicated service and innovative solutions.
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues3.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Collaborative Team Spirit
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                        We embrace teamwork, actively sharing information and ideas, collectively working to elevate the capabilities of those around us
                        </p>
                    </div>

                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues4.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Diversity & Inclusivity
                        </h1>
                        <p className='lg:text-md text-sm font-semibold'>
                        Our workforce's diversity is an invaluable asset. We treat everyone with dignity and respect, irrespective of status, gender, education, ethnicity, or religion.
                        </p>
                    </div>
                </div>
                <div className='lg:flex-row flex flex-col justify-center items-center gap-y-5 w-full gap-x-5'>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues5.svg' className='mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Empowerment Culture
                        </h1>
                        <p className=' lg:text-md text-smfont-semibold'>
                        We believe in empowering individuals to make decisions with a proactive mindset, fostering a culture of action.
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues6.svg' className=' mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Valuing Employees
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                        At SteelX, our employees are our greatest asset. We go the extra mile to ensure continuous training, development, and motivation.
                        </p>
                    </div>
                    <div className='flex justify-start flex-col items-start gap-y-3 rounded-2xl shadow-lg bg-white p-5 w-full lg:w-1/4 h-60 lg:h-80'>
                        <div className=' w-full h-20 flex l justify-start items-start'>
                            <img src='/assests/Svgs/ourvalues7.svg' className=' mb-5 object-cover my-2' />
                        </div>
                        <h1 className=' lg:text-2xl text-xl font-bold'>
                        Merit-Based Recognition
                        </h1>
                        <p className=' lg:text-md text-sm font-semibold'>
                        We operate on a meritocracy principle, where rewards and career advancements are solely based on performance and capabilities.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

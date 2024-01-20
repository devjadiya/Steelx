import React, { useState, useRef } from 'react'
import { Home_Section5 } from '../../Data';
const Section5 = () => {
    const container = useRef(null);

    const btnpressprev = () => {
        var box = container.current;
        if (box) {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        }
    };

    const btnpressnext = () => {
        var box = container.current;
        if (box) {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
        }
    };
  


    return (
        <section className="">


            <div className=" lg:pt-16 py-8 lg:h-[70vh]  flex justify-center items-center flex-col relative overflow-hidden bg-[#fff] mx-auto px-4 md:px-8">

                <h1 className='text-4xl lg:text-6xl text-black font-extrabold text-center w-full'>
                    {Home_Section5.haeding}
                </h1>
                <div className=' w-9/12 h-full '>


                    <ul ref={container} className="flex gap-x-8 gap-y-10 py-10 px-10 scroll-smooth justify-start overflow-hidden ">
                        {
                            Home_Section5.Items.map((items, key) => (
                                <li className="w-full flex-shrink-0 mx-auto group sm:max-w-sm  rounded-2xl p-1" key={key}>
                                    
                                        <img src={items.img} loading="lazy" alt={items.title} className=" rounded-lg" />

                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <button className="pre-btn w-10 h-10 bg-black text-white font-bold text-2xl rounded-full flex justify-center items-center absolute left-5  top-1/2" onClick={btnpressprev}><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.13L4.583 9L12 15.885L9.7166 18L-3.85895e-07 9L9.7166 0L12 2.13Z" fill="#FFFCFC" />
                </svg>
                </button>
                <button className="next-btn w-10 h-10 bg-black text-white font-bold text-2xl rounded-full flex justify-center items-center absolute right-5  top-1/2" onClick={btnpressnext}><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15.87L7.417 9L0 2.115L2.2834 0L12 9L2.2834 18L0 15.87Z" fill="#FFFCFC" />
                </svg>
                </button>
            </div>
        </section>
    )
}
export default Section5
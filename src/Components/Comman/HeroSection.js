import React from 'react'

export default function HeroSection(props) {
  return (

    <> <img className=' w-full h-[60vh]  absolute left-0 top-0 z-0 object-cover' src={props.img} />
      <div className=' lg:h-[55vh] h-[54vh] w-full z-10  relative flex justify-center items-center lg:items-end text-center font-bold py-8 text-5xl text-white'>
        {props.tittle}
      </div>
      <div className=' w-full h-10 lg:flex hidden bg-[#FFFFFF] relative  p-3  z-10 shadow-md justify-start items-center'>
        <ul className='  gap-x-5 text-black  flex flex-row'>

          <li>Home Page</li>
          <li>{props.tittle}</li>
          <li>{props.subtittle}</li>
        </ul>
      </div>
    </>
  )
}

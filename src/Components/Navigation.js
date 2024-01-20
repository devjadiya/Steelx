import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { serviceItems, MachineriesItems, navigation } from '../Data'


export default () => {

        const [state, setState] = useState(false)
        const [activeItem, setActiveItem] = useState(0)

        const handle = (key) => {
                if (activeItem === 0) {
                        setActiveItem(key)
                }
                else {
                        setActiveItem(0)
                }
        }

        return (

                <>
                        <div className=' w-full h-14 fixed top-0 lg:flex hidden justify-center items-center lg:px-32 z-50'>


                                < div id="navbar" className='  shadow-md w-10/12 h-14  space-x-8 flex    justify-start   items-center    text-white z-50 rounded-bl-xl rounded-br-xl  '>
                                        <style>
                                                {` li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  /* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }`}
                                        </style>
                                        <a href='/' className=''>
                                                <img src='/assests/Group (1).png' className=' cursor-pointer  w-50 h-10' />

                                        </a>

                                        <div className='flex justify-center items-center space-x-5  whitespace-nowrap'>
                                                {navigation.map((idx, key) => (
                                                        <div class="group inline-block" key={key + 1}>
                                                                <button
                                                                        class="py-1 px-3 text-lg  flex  justify-center items-center hover:text-text-orange  font-bold "
                                                                >
                                                                        <span class=" ">{idx.title}</span>

                                                                </button>
                                                                <ul
                                                                        id='navbar-inner' class=" btn-start  transform scale-0  rounded-br-2xl overflow-hidden rounded-bl-2xl  flex flex-col justify-start items-start top-14  group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                                                                >
                                                                        {idx.Items.map((idx, key) => (
                                                                                <>
                                                                                        <Link to={idx.path} key={key + 1} className='py-1 px-3 text-lg cursor-pointer  border-white  border-t  hover:bg-bg-orange w-full transition-all font-bold '>
                                                                                                {idx.title}
                                                                                        </Link>
                                                                                </>))
                                                                        }

                                                                </ul>
                                                        </div>))}

                                        </div>



                                </div>




                        </div>

                        <div className='w-full lg:hidden p-2 items-center bg-white shadow-md relative  justify-between flex  z-[40] h-14'>
                                <Link to='/' className=''>
                                        <img src='/assests/Group (1).png' className=' cursor-pointer  w-50 h-10' />

                                </Link>


                                <svg onClick={() => setState(!state)} width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.390625 0.669922H18.3906V2.66992H0.390625V0.669922ZM0.390625 5.66992H18.3906V7.66992H0.390625V5.66992ZM0.390625 10.6699H18.3906V12.6699H0.390625V10.6699Z" fill="black" />
                                </svg>



                        </div>

                        <div className={` z-[80] h-screen w-full lg:hidden  top-0 left-0 ${state ? "translate-x-0" : "-translate-x-[100%]"}   bg-opacity-80 transition-all   absolute bg-black `}>
                                <div className=' flex  justify-end w-full h-14 items-center p-2'>
                                        <svg onClick={() => setState(!state)} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white" />
                                        </svg>





                                </div>
                                <div className='flex flex-col justify-start items-center  w-full whitespace-nowrap text-white my-12  gap-y-7'>
                                        {navigation.map((idx, key) => (
                                                <div class="group  w-full" key={key + 1}>
                                                        <div onClick={() => handle(key + 1)}
                                                                class="py-1 px-3 text-2xl  flex w-full   justify-between items-center hover:text-text-orange  font-bold "
                                                        >
                                                                <div class=" ">{idx.title}</div>
                                                               
                                                                        <div>
                                                                        <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95833 0L12.5 9.27125L22.0625 0L25 2.85425L12.5 15L9.53674e-07 2.85425L2.95833 0Z" fill="white"/>
</svg>


                            
                                                        </div>

                                                </div>
                                                              { activeItem === key + 1 && <>
                                                        <ul
                                                                class="      flex flex-col justify-start items-start  
  transition duration-150 ease-in-out origin-top min-w-32  pl-4"
                                                        >
                                                                {idx.Items.map((idx, key) => (
                                                                        <>
                                                                                <Link to={idx.path} key={key + 1} className='py-1 px-3 text-sm cursor-pointer  border-white    hover:bg-bg-orange w-full transition-all font-bold '>
                                                                                        {idx.title}
                                                                                </Link>
                                                                        </>))
                                                                }

                                                        </ul> </> }
                                </div>))}

                        </div>              </div >
                </>
        )
}


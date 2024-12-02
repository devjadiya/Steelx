import React from 'react'
import { Link } from 'react-router-dom'


export default function Section1() {
  return (
    <div className=' text-black gap-y-5 w-full flex-col lg:h-[60vh] lg:px-16 px-4 py-10 lg:py-20 flex justify-start items-start'>

     <h1 className='  text-2xl font-bold '>
     Empowering Careers at SteelX: Where Your Professional Growth is Our Priority
     </h1>

     <p className='lg:text-xl text-md font-medium'>
     Join a dynamic team at SteelX, where individuals are valued as the cornerstone of our success. At SteelX, we recognize that every business thrives on the strengths of its people. As one of the leading names in the PEB industry, our company has been shaped by the expertise and dedication of our technical, commercial, and administrative professionals.     </p>
     <p className='lg:text-xl text-md font-medium'>

     Be part of a company where your contributions matter, and your growth is our priority. Explore a fulfilling career path with SteelX, where we believe in the power of our people to drive success.     </p>

     <div className=' lg:w-1/2 w-full flex justify-center items-center gap-x-3'>
<Link to="/contact/enquire-now" className='flex rounded-full w-1/2 cursor-pointer bg-bg-orange justify-center py-3 items-center text-lf font-semibold text-white'>
 Check our current openings
</Link>
<Link to="/contact/enquire-now"  className='flex rounded-full w-1/2 cursor-pointer bg-bg-orange justify-center py-3 items-center text-lf font-semibold text-white'>
Submit your Cv
</Link>
     </div>
    </div>
  )
}

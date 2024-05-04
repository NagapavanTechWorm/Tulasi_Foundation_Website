import React from 'react'
import img1 from "../assets/logo1.png";
import img2 from "../assets/logo2.png";
import img3 from "../assets/logo3.png";
import img4 from "../assets/logo5.png";
import spiral from "../assets/spiral.svg";
import slice from "../assets/slice-white.png";



export const Count = () => {
  return (
    <div className='relative w-full flex justify-center items-center px-20 py-40 bg-gradient-to-b from-black to-gray-500 '>
      <img src={spiral} className='absolute top-7 left-7' />
      <img src={slice} className='absolute bottom-7 right-7' />
      <div className='flex flex-wrap justify-center items-center gap-10 md:gap-40 w-[70%] mx-auto'>
          <div className='flex flex-col justify-center items-center text-white gap-y-4 mt-10'>
            <img src={img1} className='w-20' />
            <h1 className='text-5xl'>10+</h1>
            <h3 className='text-3xl'>Members</h3>
          </div>
          <div className='flex flex-col justify-center items-center text-white gap-y-4'>
            <img src={img2} className='w-20'/>
            <h1 className='text-5xl' >20+</h1>
            <h3 className='text-3xl'>Volunteers</h3>
          </div>
          <div className='flex flex-col justify-center items-center text-white gap-y-4'>
            <img src={img3} className='w-20'/>
            <h1 className='text-5xl' >100+</h1>
            <h3 className='text-3xl'>Helped</h3>
          </div>
          <div className='flex flex-col justify-center items-center text-white gap-y-4 mb-10'>
            <img src={img4}className='w-20' />
            <h1 className='text-5xl' >500K</h1>
            <h3 className='text-3xl'>Raised</h3>
          </div>
      </div>
    </div>
  )
}

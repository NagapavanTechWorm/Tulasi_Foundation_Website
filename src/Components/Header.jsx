import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header className='py-2 px-10 border-b-2 w-full'>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-5'>
            <a href="tel:+1234567890" className='flex flex-row items-center gap-1'><BsFillTelephoneFill className='text-secondary'/><span className='text-white'>123456789</span></a>
            <span className='hidden sm:inline-block text-white'>|</span>
            <a href="mailto:tulasi@gmail.com" className='flex flex-row items-center gap-1'><IoMailSharp className='text-secondary' /><span className='text-white'>tulasi@gmail.com</span></a>
            </div>
            <div className='flex items-center'>
                <Link to={"/donate"} className='btn btn-secondary btn-sm' >Donate</Link>
            </div>
        </div>
    </header>
  )
}

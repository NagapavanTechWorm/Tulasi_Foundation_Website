import React from 'react'
import logo from "../assets/logo.png";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='bg-black w-full text-left text-white'>
        <div className='md:w-[80%] mx-auto px-10 py-20 grid grid-cols-1 gap-20 md:grid-cols-3'>
            {/* {} */}
            <div className='flex flex-col gap-4 items-start'>
               <div className='flex items-center gap-2'>    
               <img src={logo} className='w-20' />
               <h1 className='text-3xl text-secondary'>Tulasi Foundation</h1>
               </div>
               <p className='text-gray-300' >Tulasi Foundation is a charity trust that supports the elderly and children in need. It offers essential care such as shelter, food, and medical aid, enhancing their quality of life and providing hope and dignity.</p>
               <div className='flex justify-center items-start gap-5'>
                    <a href='' ><CiInstagram size={40} /></a>
                    <a href=''><FaFacebook size={40} /></a>
               </div>
            </div>
            {/* {} */}
            <div className='flex flex-col justify-center items-start gap-5 mx-auto'>
                <h1 className='text-3xl text-center font-bold' >Links</h1>
                 <>
                    <Link to="/" className='hover:underline text-3xl text-gray-300' >Home</Link>
                    <Link to="/gallery" className='hover:underline text-3xl text-gray-300' >Gallery</Link>
                    <Link to="/about" className='hover:underline text-3xl text-gray-300' >About</Link>
                    <Link to="/contact" className='hover:underline text-3xl text-gray-300' >Contact</Link>
                 </>   
            </div>
            {/* {} */}
            <div className='flex flex-col justify-center items-start gap-5 mx-auto'>
                <h1 className='text-3xl text-center font-bold mx-auto' >Contact</h1>
                 <div className='flex flex-col justify-start items-start gap-6 md:gap-12'>
                    <div className='flex justify-center items-center gap-5' >
                        <FaMapMarkerAlt size={100} />
                        <p className='text-xl md:text-xl text-gray-300'>#397, 5th main, 13th cross, D Group Layout, Sri Gandakavalu, Vishwaneedam Post, Bangalore - 560091 </p>
                    </div>
                    <div className='flex justify-center items-center gap-5' >
                        <MdEmail size={30} />
                        <a href="mailto:tulasitrust.c@gmail.com" className='text-xl md:text-2xl text-gray-300'>tulasitrust.c@gmail.com </a>
                    </div>
                    <div className='flex justify-center items-center gap-5' >
                        <FaPhone size={30} />
                        <a href="tel:+918892200334" className='text-xl md:text-2xl text-gray-300' >8892200334</a>
                    </div>
                 </div>   
            </div>  
        </div>
        <div className='bg-gray-800 px-7 py-2 flex flex-row justify-around'>
            <div className='flex items-center gap-2'>
                <FaCopyright  size={30}  />
                <p>2024 copyright <span className='text-secondary'>Tulasi Foundation</span></p>
            </div>
            <h1>Developed by <span className='text-secondary'>Nagapavan A</span></h1>
        </div>
    </div>
  )
}

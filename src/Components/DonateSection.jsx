import React from 'react'
import spiral from "../assets/spiral.svg";
import slice from "../assets/slice-white.png";
import { QRCode } from 'antd';
import logo from "../assets/logo.png";


export const DonateSection = () => {
  return (
    <div className='relative w-full flex justify-center items-center px-20 py-40 bg-gradient-to-b from-black to-gray-500'>
      <img src={spiral} className='absolute top-7 left-7' />
      <img src={slice} className='absolute bottom-7 right-7' />
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-40 w-[90%] mx-auto'>
        <div className='flex flex-col justify-start items-start gap-7 md:gap-10'>
            <h1 className='font-bold font-caveat text-secondary text-4xl md:text-6xl mt-10'>Make Donation</h1>
            <h3 className='font-bold text-white text-6xl md:text-7xl'>Let's donate to help those in need and improve their lives.</h3>
            <p className='text-white text-sm' >Your contribution can make a real impact. By donating, you support essential programs that provide food, shelter, and other vital resources to those who are struggling. Together, we can create a brighter future for individuals and families facing hardships.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <a href='upi://pay?pa=tulas88922@barodampay&pn=TULASI%20FOUNDATION%20%20R%20&mc=&tn=Verified%20Merchant&am=&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEUCIEJwV0b49AjT7ZEXCdXL+uT1lRJzkcJTA/iHDQRazuHLAiEAz3bv6uOtlB3dxsGlP1DivefkOgpE43YWORQMqxx9ezQ=' ><QRCode
            errorLevel="H"
            value="upi://pay?pa=tulas88922@barodampay&pn=TULASI%20FOUNDATION%20%20R%20&mc=&tn=Verified%20Merchant&am=&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEUCIEJwV0b49AjT7ZEXCdXL+uT1lRJzkcJTA/iHDQRazuHLAiEAz3bv6uOtlB3dxsGlP1DivefkOgpE43YWORQMqxx9ezQ="
            icon={logo}
            color='white'
            size={320}
  /></a>
        </div>
      </div>
    </div>
  )
}

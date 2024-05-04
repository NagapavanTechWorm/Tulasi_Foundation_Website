import React from 'react'
import hand from "../assets/icon-hand.png";
import home from "../assets/icon-home.png";
import img1 from "../assets/IMG_20220415_182046.jpg"
import semiCircle from "../assets/half-circl.png";
import semiCircle2 from "../assets/half-circl-2.png";
import circle from "../assets/circle_002.png";


export const About = () => {
  return (
    <div className='bg-white text-black mx-auto py-40'>
        <div className='grid grid-col-1 md:grid-cols-2'>
            {/* left grid */}
            <div className='relative flex justify-center items-center px-10 py-5'>
                <img src={img1} className='rounded-[100%] relative z-10' />
                <img src={semiCircle} className='absolute w-10 md:w-40 left-8 bottom-8' /> 
                <img src={semiCircle2} className='absolute w-10 md:w-40 right-8 top-8' style={{ transform: 'rotate(270deg)' }} />
                <img src={circle} className='absolute left-5 top-5 w-20 md:w-80' />
            </div>
            {/* Right Grid */}
            <div className='flex flex-col justify-center gap-y-10 items-start px-8'>
                <h1 className='font-caveat text-primary text-4xl md:text-5xl font-bold'>About us</h1>
                <h3 className='font-bold text-4xl md:text-7xl'>Our mission is to help the Society</h3>
                <p className='text-2xl'>Our mission to help the elderly is an admirable one. By providing support and assistance, you are enriching their lives and fostering a sense of community and belonging.</p>
                <div className='flex flex-col gap-y-10'>
                    <div className='flex flex-row gap-x-5'>
                        <img className='rounded-lg w-15 h-12 border-gray-100 border-1' src={home} />
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='font-bold text-2xl'>Who we are</h1>
                            <p className='text-sm md:text-xl'>We are a dedicated organization focused on supporting the elderly through targeted programs and initiatives. Our team is committed to enhancing the lives of seniors by providing the resources and care they need.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-5'>
                        <img className='rounded-lg w-15 h-12' src={hand} />
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='font-bold text-2xl'>Our Commitment</h1>
                            <p className='text-sm md:text-xl'>Our commitment is to offer compassionate care and meaningful services to improve the well-being of the elderly. Through fundraising and charitable efforts, we strive to make a positive impact on their lives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


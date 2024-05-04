import React from 'react'
import { Image } from 'antd';
import {Link} from "react-router-dom";
import img1 from "../assets/IMG-20220415-WA0048.jpg";
import img2 from "../assets/IMG_20220920_201838_204.jpg"
import img3 from "../assets/IMG_20220415_192155.jpg"
import img4 from "../assets/IMG_20220920_202534_958.jpg";
import spiral from "../assets/shape-1.svg";
import slice from "../assets/slice-small.png";


export const GalleryCard = () => {
  return (
    <div className='relative p-10'>
        <img src={spiral} className='absolute w-20 md:w-80 top-7 right-7' />
      <img src={slice} className='absolute w-20 md:w-80 bottom-7 left-7' />
        <h1 className='text-primary font-caveat text-5xl font-bold text-center'>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 justify-items-center gap-5 p-10 z-10'>
        <Image
            src={img1}
            className='drop-shadow-xl border-2 border-primary rounded-lg'
        />
        <Image
            src={img2}
            className='drop-shadow-xl border-2 border-primary rounded-lg'
        />
        <Image
    className='drop-shadow-lg border-2 border-primary rounded-lg'
            src={img3}
        />
        <Image
        className='drop-shadow-xl border-2 border-primary rounded-lg'
            src={img4}
        />
        </div>
        <div className='flex justify-center items-center'>
        <Link className='btn-secondary btn z-10' to={"/gallery"} >View More</Link>
        </div>
    </div>
  )
}

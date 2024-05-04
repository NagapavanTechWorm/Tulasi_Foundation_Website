import React from 'react';
import { Link } from 'react-router-dom';
import snake from "../assets/snake.png";
import logo1 from "../assets/logo1.jpg";
import heart1 from "../assets/heart-1.png";
import ornament from "../assets/ornament.png";


export const CarouselDesign = ({ item }) => {
  const { img, quotes } = item;

  // Function to apply the 'text-secondary' class to the first two words of a quote
  const styleFirstTwoWords = (quote) => {
    const words = quote.split(' ');
    const firstTwoWords = words.slice(0, 2); // Get the first two words

    // Combine the first two words with 'text-secondary' class
    const styledFirstTwoWords = firstTwoWords.map((word, index) => (
      <span key={index} className='text-secondary'>
        {word}{' '}
      </span>
    ));

    // Combine the rest of the sentence without additional styling
    const restOfQuote = words.slice(2).join(' ');

    return (
      <>
        {styledFirstTwoWords}
        {restOfQuote}
      </>
    );
  };

  return (
    <div className='h-[80vh] md:h-screen w-full text-left text-white grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className='relative flex flex-col gap-y-4 items-start justify-center'>
        <img src={snake} className='absolute right-0 top-0 w-12 md:w-13' />
        <h3 className='font-caveat text-2xl md:text-6xl'>{quotes[0]}</h3>
        <h1 className='text-4xl font-semibold md:text-8xl'>
          {styleFirstTwoWords(quotes[1])}
        </h1>
        <p className='text-sm md:text-xl'>{quotes[2]}</p>
        <div className='flex flex-row gap-x-5'>
            <Link className='btn btn-secondary hover:bg-white hover:text-black' to={"/donate"}>Support us</Link>
            <Link className='btn border-white hover:bg-secondary hover:text-black ' to={"/about"} >About us</Link>
        </div>
      </div>
      <div className='hidden md:flex flex-cols relative'>
        <img src={img} className='w-50 rounded-[110%]' />
        <img src={logo1} className='rounded-[100%] w-60 z-10 absolute right-0 bottom-0' />
        <img src={heart1} className='z-10 absolute w-60 right-0 top-0'/>
        <img src={ornament} className="z-10 absolute w-10 left-0 bottom-0" style={{ transform: 'rotate(90deg)' }} />
      </div>
    </div>
  );
};

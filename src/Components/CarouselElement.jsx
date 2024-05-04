import React from 'react';
import { Carousel } from 'antd';
import { CarouselDesign } from './CarouselDesign';
import HeroImg1 from "../assets/HeroImg1.jpg";
import HeroImg2 from "../assets/HeroImg2.jpg";
import HeroImg3 from "../assets/HeroImg3.jpg";
import HeroImg4 from "../assets/HeroImg4.jpg";

const CarouselData = [
  {
    id: 1,
    img: HeroImg1, // Add the URL of your image
    quotes: [
      "How can you help us?",
      "Give love and support to the society.",
      "Your generosity helps us bring vital resources and aid to those who need it most. Join us in making a positive impact today."
    ]
  },
  {
    id: 2,
    img: HeroImg2, // Add the URL of your image
    quotes: [
      "Lend a helping hand to those in need.",
      "Be a beacon of hope for the community.",
      "Every act of kindness strengthens our mission. Stand with us."
    ]
  },
  {
    id: 3,
    img: HeroImg3, // Add the URL of your image
    quotes: [
      "Together, we can create change.",
      "Support our efforts and make a difference.",
      "Join us in building a brighter future for all."
    ]
  },
  {
    id: 4,
    img: HeroImg4, // Add the URL of your image
    quotes: [
      "Your support transforms lives.",
      "Empower our community with your contribution.",
      "Be a part of something bigger. Help us thrive."
    ]
  }
];


export const CarouselElement = () => {  
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} className='w-[85%] mx-auto' autoplay effect="fade">
      {CarouselData.map((item)=>{
        return <CarouselDesign key={item.id} item = {item} />
      })}
    </Carousel>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header,Navbar,Footer } from '../Components';
import bgImg from '../assets/bg.jpeg';

export const Home = () => {
  return (
    <>
      <div className="absoulte w-full h-screen">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="w-full h-screen bg-cover bg-center z-[-1] border rounded-bl-lg"
        ></div>
        <div className="absolute inset-0 bg-black opacity-80 h-screen"></div>
      </div>
      <div className='absolute z-20 inset-0'>
      <Header />
      <Navbar/>
        <Outlet/>
      <Footer/>
      </div>
    </>
  );
};

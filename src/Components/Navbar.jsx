import React, { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import logo from '../assets/logo.png';
import { CiMenuBurger } from 'react-icons/ci';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled down more than 100px (you can adjust the threshold)
            setIsScrolled(window.scrollY > 30);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 px-8 py-2  text-white transition-colors duration-300 ${isScrolled ? 'bg-white text-black shadow-md z-30 top-0' : 'bg-transparent'}`}
        >
            <div className='flex flex-cols justify-around items-center gap-y-5'>
                <div className='flex flex-row items-center gap-x-4'>
                    <img src={logo} className='w-[13%]' alt='Logo' />
                    <h1 className='text-secondary text-xl md:text-3xl sm:text-sm px-1 font-bold'>
                        Tulasi Foundation
                    </h1>
                </div>
                <ul className='hidden md:flex gap-x-10'>
                    <NavLinks />
                </ul>
                {!nav ? (
                    <button className='btn md:hidden' onClick={handleNav}>
                        <CiMenuBurger />
                    </button>
                ) : (
                    <button className='btn md:hidden' onClick={handleNav}>
                        X
                    </button>
                )}
            </div>
            <div className={nav ? 'bg-neutral rounded-md py-3 mt-5 opacity-90' : 'hidden'}>
                <ul className='flex flex-col gap-y-5 justify-center items-center'>
                    <NavLinks handleNav={handleNav} />
                </ul>
            </div>
        </nav>
    );
};

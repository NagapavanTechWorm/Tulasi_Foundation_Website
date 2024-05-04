import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: 'gallery', text: 'Gallery' },
    { id: 3, url: 'about', text: 'About' },
    { id: 4, url: 'contact', text: 'Contact' },
    { id: 5, url: 'donate', text: 'Donate' }
  ];

export const NavLinks = ({handleNav}) => {
  return (
    <>
    {links.map((item)=>{
        return <NavLink tabIndex={0} key={item.id} to={item.url} className='capitalize text-xl text-secondary md:text-2xl underline md:no-underline hover:text-secondary ' onClick={handleNav}>{item.text}</NavLink>
    })}
    </>
  )
}

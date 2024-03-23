import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default function Footer() {

  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-700  mt-10">
      <div className=" mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl text-white flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-10 text-center">
          <Link to='/'>
            <img src="/Images/logowhite.png" className="h-12" alt="Flowbite Logo" />
          </Link>
          <p className='text-white'>{`@${currentYear} Sampson N Co ltd`}</p>
          <nav className='text-white flex flex-col lg:flex-row gap-8'>
            <NavLink className='hover:text-gray-300' to="/">Home</NavLink>
            <NavLink className='hover:text-gray-300' to="/kitchen">Kitchen</NavLink>
            <NavLink className='hover:text-gray-300' to="/bathroom">Bathroom</NavLink>
            <NavLink className='hover:text-gray-300' to="/projects">Projects</NavLink>
            <NavLink className='hover:text-gray-300' to="/gallery">Gallery</NavLink>
            <NavLink className='hover:text-gray-300' to="/faq">FAQ</NavLink>
            <NavLink className='hover:text-gray-300' to="/contact">Contact</NavLink>
          </nav>
      </div>
    </footer>
  );
}

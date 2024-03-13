import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default function Footer() {

  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-700  mt-10">
      <div className="className='mx-4 md:mx-12 lg:mx-24 text-white flex flex-col lg:flex-row items-center justify-between p-4 lg:gap-0 gap-10 text-center">
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

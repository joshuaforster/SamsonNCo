import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DesktopNav() {
    return (
        <nav className='hidden lg:flex flex-col lg:flex-row lg:space-x-12 items-center text-center'>
            <NavLink className='hover:text-gray-300' to="/">Home</NavLink>
            <NavLink className='hover:text-gray-300' to="/kitchen">Kitchen</NavLink>
            <NavLink className='hover:text-gray-300' to="/bathroom">Bathroom</NavLink>
            <NavLink className='hover:text-gray-300' to="/projects">Projects</NavLink>
            <NavLink className='hover:text-gray-300' to="/gallery">Gallery</NavLink>
            <NavLink className='hover:text-gray-300' to="/faq">FAQ</NavLink>
            <NavLink className='hover:text-gray-300' to="/contact">Contact</NavLink>
        </nav>
    );
}


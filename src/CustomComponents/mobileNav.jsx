import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
    return (
        <nav className='lg:hidden bg-white flex flex-col space-y-1 items-center text-center border-b border-gray-200'>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/">Home</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/kitchen">Kitchen</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/bathroom">Bathroom</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/projects">Projects</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/gallery">Gallery</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/faq">FAQ</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/contact">Contact</NavLink>
        </nav>
    );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileNav({ onClose }) { // Step 1: Accept onClose as a prop
    return (
        <nav className='lg:hidden bg-white flex flex-col space-y-1 items-center text-center border-b border-gray-200'>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/" onClick={onClose}>Home</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/kitchen" onClick={onClose}>Kitchen</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/bathroom" onClick={onClose}>Bathroom</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/projects" onClick={onClose}>Projects</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/gallery" onClick={onClose}>Gallery</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/faq" onClick={onClose}>FAQ</NavLink>
            <NavLink className='hover:bg-gray-100 py-2 w-full' to="/contact" onClick={onClose}>Contact</NavLink>
        </nav>
    );
}

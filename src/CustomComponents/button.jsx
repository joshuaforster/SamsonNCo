import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

export default function Button({ children, to, ...props }) {
    return (
        // Use the Link component as a button
        <Link to={to} className="bg-gray-800 text-white px-4 py-2 my-4 inline-block hover:bg-gray-600 rounded-md transition-colors duration-300 ease-in-out" {...props}>
            {children}
        </Link>
    );
}

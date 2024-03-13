import React from 'react';


export default function Footer() {

  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-700  mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex items-center sm:justify-between">
          <a href="https://flowbite.com/">
            <img src="/Images/logowhite.png" className="h-12" alt="Flowbite Logo" />
          </a>
          <p className='text-white text-center'>{`@SampsonNCo ${currentYear}`}</p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

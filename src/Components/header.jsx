// import React from 'react'
// import { Link } from 'react-router-dom'
// import DesktopNav from '../CustomComponents/nav'
// import MobileNav from '../CustomComponents/mobileNav'

// export default function Header(){

//     const [clicked, isClicked] = React.useState(false)

//     function toggle(){
//         isClicked(prev => !prev)
//         console.log(clicked)
//     }

//     return(
//             <header className='bg-gray-700'>
//                 <div className='mx-4 md:mx-12 lg:mx-24 text-white flex  items-center justify-between p-4'>
//                     <Link to="/"><img src='/Images/logowhite.png' alt='Logo' className='h-12' /></Link>
//                     <DesktopNav />
//                     <div onClick={toggle} className='lg:hidden'>Hamburger</div>
//                 </div>
//                 {clicked? <MobileNav/>: ''}
//         </header>  
      
//     )

    
// }

//Come back and learn this

import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from '../CustomComponents/nav';
import MobileNav from '../CustomComponents/mobileNav';

export default function Header() {
    const [clicked, isClicked] = React.useState(false);

    function toggle() {
        isClicked(prev => !prev);
    }

    function closeMenu() {
        isClicked(false); 
    }


    // SVG paths for hamburger and X icons
    const iconStyles = `h-6 w-6 ${clicked ? 'transform rotate-180' : ''}`; // Add rotation when clicked
    const HamburgerIcon = (
        <svg className={iconStyles} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    );

    const CloseIcon = (
        <svg className={iconStyles} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    );

    return (
        <header className='bg-gray-700'>
            <div className='mx-4 md:mx-12 lg:mx-24 text-white flex items-center justify-between p-4'>
                <Link to="/"><img src='/Images/logowhite.png' alt='Logo' className='h-12' /></Link>
                <DesktopNav />
                <div onClick={toggle} className='lg:hidden'>
                    {clicked ? CloseIcon : HamburgerIcon}
                </div>
            </div>
            {clicked ? <MobileNav onClose={closeMenu} /> : ''}
        </header>
    );
}

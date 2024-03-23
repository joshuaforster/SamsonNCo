
import React from 'react'

export default function Logos(){

const logoImages=['/Images/Hudson Reed_White.png', '/Images/Silverdale.png', '/Images/ponnighaus.png',]

const mappedImages = logoImages.map(image =>(
    <img className='w-1/6 md:w-1/9 lg:w-1/12 h-auto' key={image} src={image}/>
))

    return(
            <section className='bg-gray-700 py-4'>
                <div className='flex justify-between items-center mx-auto px-4 md:px-12 lg:px-24 max-w-screen-2xl'>
                    {mappedImages}
                </div>
            </section>
    )
}
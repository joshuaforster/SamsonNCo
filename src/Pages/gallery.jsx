import React from 'react';

import Gallery from '../CustomComponents/gallery';


export default function ImageGallery() {


    
    const realGallery = [
        '/RealImages/7a80d9d2-a62b-4d3b-aec2-36c82c67297f.JPG',
        '/RealImages/84d73823-7d56-49b2-9dbb-712a480578d0.JPG',
        '/RealImages/66040f86-374e-49ca-9f7f-5612f578f7ea.JPG',
        '/RealImages/656243a2-88a8-4a71-9607-895e969f8d3a.JPG',
        '/RealImages/1829010c-8065-4db4-bfc0-fac2e90e9b29.JPG',
        '/RealImages/b29ca30c-0066-4032-a9e5-fa492726d3b6.JPG',
        '/RealImages/David.png',
        '/RealImages/f39350c4-957b-46cd-9aae-0125e521518e.JPG',
        '/RealImages/JayneRichard-1.png',
        '/RealImages/JayneRichard-2.png',
        '/RealImages/JayneRichard-3.png',
        '/RealImages/JayneRichard-4.png',
        '/RealImages/JayneRichard-5.png',
        '/RealImages/JayneRichard.png'
    ];
    

    const gallery = realGallery.map((image, index) => (
        <Gallery key={index} image={image}/>
    ));

    return (
        <div>
            <section className='mx-4 md:mx-12 lg:mx-24 my-8'>
                <div className='flex flex-col gap-10 my-8 items-center justify-center text-center '>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
                        <p className="text-md md:text-lg text-gray-600">Explore our gallery of customer kitchens and bathrooms to see how we've brought their visions to life. From sleek, modern designs to cozy, traditional spaces, our Norwich-based projects reflect the unique tastes and needs of each homeowner, combining beauty with practicality.</p>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-0 lg:mx-0 my-8">
                        {gallery}
                </div>
            </section>
        </div>
    );
}

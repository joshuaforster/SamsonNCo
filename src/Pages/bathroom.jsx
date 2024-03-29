import React from 'react';
import aboutData from '../Data/data';
import priceGuide from '../Data/priceguide';
import imageGallery from '../Data/imageGallery';
import Gallery from '../CustomComponents/gallery';
import Logos from '../CustomComponents/logoArray';

export default function Bathroom() {
    const itemWithIdOne = aboutData.filter(item => item.id === 1);

    const bathroomIntro = itemWithIdOne.map(data => (
        <div className='flex flex-col lg:flex-row lg:gap-10 items-center justify-center my-8' key={data.id}>
            <div className='lg:w-7/12 space-y-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>{data.room}</h1>
                <p className="text-md md:text-lg text-gray-600">{data.intro}</p>
                <p className="text-md md:text-lg text-gray-600">{data.standOut}</p>
            </div>
            <img className='lg:w-5/12 h-auto object-cover rounded-lg mt-4 lg:mt-0' src={data.mainImage} alt={data.room}/>
        </div>
    ));

    const filteredPriceRange = priceGuide.filter(guide => guide.Type === 'Bathroom');
    const bathroomPriceGuide = filteredPriceRange.map(price => (
        <div key={price.id} className="mb-4 bg-white p-4 flex flex-col items-center justify-center space-y-4 rounded border border-gray-300 shadow-md">
            <p className="text-lg font-semibold text-gray-700 text-center">{`${price.Size} ${price.Type}s`}</p>
            <div className="border-t border-gray-300 w-full my-2"></div>
            <p className="text-lg md:text-lg text-gray-700 text-center">{price.PriceRange}</p>
        </div>
    ));
    

    
    

    const gallery = imageGallery.bathroomImages.map((image, index) => (
        <Gallery key={index} image={image}/>
    ));

    return (
        <div>
            <div className='mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl my-8'>
                {bathroomIntro}
            </div>

            <Logos />

            <div className='mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl my-8 text-center'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Bathroom Price Guide</h2>
                <p className="mb-8 text-md md:text-lg text-gray-600">Our team offers top-quality products and customised solutions from leading UK manufacturers and brands. Contact us today to schedule a design consultation.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-y-4 md:space-y-0">
                    
                    {bathroomPriceGuide}
                </div>
                <p className="mt-8 text-md md:text-lg text-gray-600">Our team offers top-quality products and customised solutions from leading UK manufacturers and brands. Contact us today to schedule a design consultation.</p>
            </div>


            {/* Gallery adjusted to the edge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-0 lg:mx-0 my-8">
                {gallery}
            </div>
        </div>
    );
}

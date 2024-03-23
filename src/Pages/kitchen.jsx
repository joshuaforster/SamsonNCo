import React from 'react';
import aboutData from '../Data/data';
import features from '../Data/features';
import priceGuide from '../Data/priceguide';
import Popup from '../CustomComponents/popup';
import imageGallery from '../Data/imageGallery';
import Gallery from '../CustomComponents/gallery';
import Logos from '../CustomComponents/logoArray';

export default function Kitchen() {
    const itemWithIdTwo = aboutData.filter(item => item.id === 2);
    const kitchenSection = itemWithIdTwo.map(data => (
        <div className='flex flex-col lg:flex-row lg:gap-10 items-center justify-center my-8' key={data.id}>
            <div className='lg:w-7/12 space-y-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>{data.room}</h1>
                <p className="text-md md:text-lg text-gray-600">{data.intro}</p>
                <p className="text-md md:text-lg text-gray-600">{data.standOut}</p>
            </div>
            <img className='lg:w-5/12 h-auto object-cover rounded-lg mt-4 lg:mt-0' src={data.mainImage} alt={data.room}/>
        </div>  
    ));

    const filteredGuide = priceGuide.filter(room => room.Type === 'Kitchen');
    const kitchenPriceGuide = filteredGuide.map(kitchen => {
        return (
            <div key={kitchen.id} className="mb-4 bg-white p-4 flex flex-col items-center justify-center space-y-4 rounded border border-gray-300 shadow-md">
                <p className="text-lg font-semibold text-gray-700 text-center">{`${kitchen.Size} ${kitchen.Type}s`}</p>
                <div className="border-t border-gray-300 w-full my-2"></div>
                <p className="text-md md:text-lg text-gray-700 text-center">{kitchen.PriceRange}</p>
            </div>
        );
    });
    

    const featureSection = features.map(feature => (
        <Popup key={feature.id} title={feature.title} image={feature.image} description={feature.description} />
    ));

    const gallery = imageGallery.kitchenImages.map((image, index) => (
        <Gallery key={index} image={image} />
    ));

    return (
        <section>
            <div className='mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl my-8'>
                {kitchenSection}
            </div>

            <Logos/>

            <section className='my-10 mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl'>
                <div className='text-center lg:w-3/4 m-auto space-y-4 mb-10'>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How your kitchen is made</h2>
                    <p className="text-md md:text-lg text-gray-600">In our German kitchen furniture crafting, we utilise high-grade materials coupled with the foremost technology sourced from top brand manufacturers. This is achieved through marrying traditional handcrafted expertise with contemporary production techniques.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {featureSection}
                </div>
            </section>

            <div className='mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl my-8 text-center'>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Kitchen Price Guide</h2>
                <p className="text-md md:text-lg text-gray-600 mb-4">Our team offers top-quality products and customised solutions from leading UK manufacturers and brands. Contact us today to schedule a design consultation.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 space-y-4 md:space-y-0'>
                    {kitchenPriceGuide}
                </div>
                <p className="text-md md:text-lg text-gray-600 mt-4">Our team offers top-quality products and customised solutions from leading UK manufacturers and brands. Contact us today to schedule a design consultation.</p>
            </div>

            {/* Gallery on the edge */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-0 lg:mx-0 my-8">
                {gallery}
            </div>
        </section>
    );
}

import React from 'react';
import ContactForm from '../CustomComponents/contactform';

export default function Contact(){
    return(
        <section className='lg:mx-24 md:mx-12 mx-4 my-8'>
            <div className="text-center lg:w-1/2 mb-12 m-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                <p className="text-md md:text-lg text-gray-600">We're here to help with your kitchen and bathroom design needs. Whether you're just starting to gather ideas or ready to bring your vision to life, our team is on hand to answer any questions you might have. Fill out the form below, and let's start the conversation.</p>
            </div>
            <ContactForm />
        </section>
    )
}

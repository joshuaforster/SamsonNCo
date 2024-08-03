import React from 'react';
import Contact from '../PageComponents/ContactComponents/Contact';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sampson N Co Kitchen and Bathrooms</title>
        <meta 
          name="description" 
          content="Get in touch with Sampson N Co Kitchen and Bathrooms for all your kitchen and bathroom design and installation needs. Our team is here to help you with any inquiries or to schedule a service." 
        />
        <meta 
          name="keywords" 
          content="Contact Sampson N Co, Kitchen and Bathroom Contact, Sampson N Co Contact Information, Kitchen and Bathroom Services Contact" 
        />
        <meta 
          name="author" 
          content="Sampson N Co Kitchen and Bathrooms" 
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
      </Helmet>
      <Contact />
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesHead from '../PageComponents/Services/servicesHead';
import ServicesSection from '../PageComponents/Services/servicesSection';
import HeaderSection from '../CustomComponents/headerSection';

export default function ServicesHome() {
  return (
    <div>
      <Helmet>
        <title>Our Services | Sampson N Co Kitchen and Bathrooms</title>
        <meta 
          name="description" 
          content="Discover the range of services offered by Sampson N Co Kitchen and Bathrooms. From kitchen and bathroom design to full installation services, our experienced team is here to help you create your dream spaces." 
        />
      </Helmet>
      <HeaderSection 
        image='/images/Home/jAZgENHA.jpeg' 
        title="Services" 
      />
      <ServicesHead />
      <ServicesSection />
    </div>
  );
}

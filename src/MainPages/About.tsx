import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Sampson N Co Kitchen and Bathrooms</title>
        <meta name="description" content="Learn more about Sampson N Co Kitchen and Bathrooms, our history, values, and what sets us apart in the industry." />
      </Helmet>
      <HeaderSection
          image='/images/Home/4LDwtCyA.jpeg'
          title="About"
      />
      <AboutHead />
      <WhyJLR />
    </div>
  );
};

export default About;

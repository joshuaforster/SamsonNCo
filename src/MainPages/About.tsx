import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - AD Forster</title>
        <meta name="description" content="Learn more about AD Forster." />
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

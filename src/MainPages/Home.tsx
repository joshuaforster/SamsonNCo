import React from "react";
import { Helmet } from "react-helmet";
import Steps from "../PageComponents/HomeComponents/steps";
import TestimonialSlider from "../PageComponents/HomeComponents/Reviews";
import HeroTwo from "../PageComponents/HomeComponents/heroTwo";
import HomeGallery from "../PageComponents/HomeComponents/homegallery";
import Assurance from "../PageComponents/HomeComponents/Assurance";
import Logo from "../PageComponents/HomeComponents/logo";
import KitchenBathroom from "../PageComponents/HomeComponents/Kitchen&Bathrooms";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="description" content="AD Forster Window Cleaning offers top-notch window cleaning services for both residential and commercial properties. Learn more about our services, view our gallery, and read testimonials from our satisfied clients." />
        <title>AD Forster Window Cleaning - Home</title>
      </Helmet>
      <HeroTwo />
      <Logo />
      <Steps />
      <Assurance />
      <KitchenBathroom />
      <HomeGallery />
      <TestimonialSlider />
    </>
  );
}

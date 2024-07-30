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
        <meta name="description" content="Sampson N Co Kitchens and Bathrooms" />
        <title>Sampson N CO - Home</title>
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

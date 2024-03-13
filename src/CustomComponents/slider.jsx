import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from '../Data/reviewsData'
import React from "react";
import Slider from "react-slick";
import '../App.css';

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = reviewsData.map(review => {
    return (
      <div key={review.id} className='text-gray-950 bg-white shadow-xl rounded-lg my-5 mx-2'>
        <div className='flex flex-col gap-10 p-5  text-gray-600'>
          <p>{review.review}</p>
          <p>{review.stars}</p>
          <h3>{review.name}</h3>
        </div>
      </div>
    );
  });
  

  return (
    <Slider {...settings}>
      {reviews}
    </Slider>
  );
}
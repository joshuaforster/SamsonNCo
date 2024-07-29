import React, { useState, useEffect, useRef } from 'react';
import Button from '../../CustomComponents/buttons';
import { services } from '../../Data/serviceData';

const images = [
  '/images/Home/-IhIoytA.jpeg',
  '/images/Home/-sIirgvA.jpeg',
  '/images/Home/2B_MeqLQ.jpeg',
  '/images/Home/2mWOU1zw.jpeg',
  '/images/Home/4LDwtCyA.jpeg',
  '/images/Home/4wt1U8Kw.jpeg',
  '/images/Home/9A1d_2wg.jpeg',
];

export default function Assurance() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-gray-900 text-white">
      <div className="lg:block hidden lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <picture
              key={index}
              className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : index < currentImageIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <source srcSet={image} type="image/webp" />
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div
          className={`px-6 py-16 lg:px-0 lg:py-24 transition-opacity duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            <h1 className="mt-2 text-3xl font-bold capitalize sm:text-4xl">
              What we do...
            </h1>
            <p className="mt-4 leading-8">
              At Sampson N Co, we specialize in designing, supplying, and installing high-quality kitchens and bathrooms. Explore our wide range of services to create your dream space.
            </p>
            <div className="mt-6 max-w-xl text-2xl leading-7 lg:max-w-none">
              <h2 className="text-4xl">We offer:</h2>
              <div className="flex flex-col space-y-4 mt-4">
                {services.map((service, index) => (
                  <Button
                    key={index}
                    to={`/services/${service.id}`}
                    variant="tertiary"
                    className="w-full lg:w-auto px-4 py-2 text-sm lg:text-base"
                  >
                    {service.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <picture
                key={index}
                className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={`Photos ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

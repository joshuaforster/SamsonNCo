import React, { useEffect, useState, useRef } from 'react';

const features = [
  {
    name: 'Expert Design',
    description: 'Our design team brings your vision to life with expert planning and 3D modeling.',
  },
  {
    name: 'High-Quality Materials',
    description: 'We source the best materials from top manufacturers to ensure lasting quality.',
  },
  {
    name: 'Professional Installation',
    description: 'Our experienced team ensures a seamless and efficient installation process.',
  },
  {
    name: 'Customer-Centric Approach',
    description: 'We focus on understanding and exceeding our customers’ expectations.',
  },
  {
    name: 'Attention to Detail',
    description: 'Every detail is meticulously planned and executed to perfection.',
  },
  {
    name: 'Sustainable Practices',
    description: 'We use eco-friendly materials and practices to create sustainable spaces.',
  },
  {
    name: 'Comprehensive Services',
    description: 'From initial design to final installation, we offer a full range of services.',
  },
  {
    name: 'Experienced Team',
    description: 'Our team has years of experience in kitchen and bathroom renovations.',
  },
  {
    name: 'Fully Insured',
    description: 'We are fully insured, giving you peace of mind throughout the project.',
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-white py-24 sm:py-32">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Sampson N Co?</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <dl key={feature.name} className="border border-gray-300 p-6">
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-gray-600">{feature.description}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}

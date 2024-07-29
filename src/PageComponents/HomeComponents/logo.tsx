import React, { useEffect, useState, useRef } from 'react';

const logos = [
  {
    webp: "/images/logos/Hudson Reed_White.png",
    alt: "Hudson Reed"
  },
  {
    webp: "/images/logos/ponnighaus.png",
    alt: "Ponnighaus"
  },
  {
    webp: "/images/logos/Silverdale.png",
    alt: "Silverdale"
  }
];

export default function Logo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-900">
      <div
        ref={sectionRef}
        className={`py-12 mx-auto max-w-screen-xl px-6 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <picture>
                <source srcSet={logo.webp} type="image/webp" />
                <img
                  className="h-14 w-full max-w-xs object-contain"
                  src={logo.webp}
                  alt={logo.alt}
                  aria-label={logo.alt}
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

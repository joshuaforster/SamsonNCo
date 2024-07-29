import React, { useEffect, useState } from 'react';

interface HeaderSectionProps {
  image: string;
  title: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ image, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // slight delay for smoother animation
  }, []);

  return (
    <div className="relative w-full h-96">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`text-4xl font-bold text-white mb-8 transition-transform ${
            isVisible ? 'translate-x-0' : 'translate-x-[100vw]'
          }`}
          style={{ transitionDuration: '3s', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}} >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;

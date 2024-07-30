import React, { useRef } from 'react';

export default function ServicesHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-1 lg:py-1">
      <div ref={sectionRef} className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <picture>
            <source srcSet='/images/Home/nbb003_baths_v1_ls.jpg' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='/images/Home/nbb003_baths_v1_ls.jpg'
              alt="Bathroom design service"
              loading="lazy"
            />
          </picture>
          <picture>
            <source srcSet='/images/Home/Hlb109Jg.jpeg' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='/images/Home/Hlb109Jg.jpeg'
              alt="Kitchen design service"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="font-light mt-4 lg:mt-0 text-gray-700 sm:text-lg">
          <h2 className="mb-4 font-semibold text-4xl text-gray-900">
            What We Can Do for You
          </h2>
          <p className="mb-4 text-base">
            At Sampson N Co, we specialize in designing and installing high-quality kitchens and bathrooms that cater to your unique needs. Our team of experts combines precision craftsmanship with innovative design to bring your dream space to life.
          </p>
          <p className="mb-4 text-base">
            Whether you need a modern kitchen makeover or a luxurious bathroom renovation, we have the skills and experience to deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}

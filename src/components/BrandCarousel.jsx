"use client";
import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

// Add your image paths here
const brands = [
  { id: 1, src: 'https://assets.wfcdn.com/im/21929435/scale-h429-w429%5Ecompr-r85/2742/274270246/default_name.jpg', alt: 'Brand 1' },
  { id: 2, src: 'https://assets.wfcdn.com/im/71339667/scale-h429-w429%5Ecompr-r85/2706/270695832/default_name.jpg', alt: 'Brand 2' },
  { id: 3, src: 'https://assets.wfcdn.com/im/62869514/scale-h429-w429%5Ecompr-r85/2706/270695824/default_name.jpg', alt: 'Brand 3' },
  { id: 4, src: 'https://assets.wfcdn.com/im/28816775/scale-h429-w429%5Ecompr-r85/2706/270695827/default_name.jpg', alt: 'Brand 4' },
  { id: 5, src: 'https://assets.wfcdn.com/im/93885051/scale-h429-w429%5Ecompr-r85/2706/270695829/default_name.jpg', alt: 'Brand 5' },
  { id: 6, src: 'https://assets.wfcdn.com/im/40167688/scale-h429-w429%5Ecompr-r85/2706/270695826/default_name.jpg', alt: 'Brand 6' },
];

const BrandCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollTo({ left: scrollAmount, behavior: 'auto' });
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="text-4xl font-bold text-center mb-4 mt-10">
        <span>EXPLORE OUR EXCLUSIVE</span> <span className='text-purple-600'>BRANDS</span>
      </div>
      <p className="text-center mb-8">Bring your vision to life with hand-curated collections, priced just right.</p>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex w-full max-w-[1440px] whitespace-nowrap animate-scroll mb-10"
        >
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <img src={brand.src} alt={brand.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;

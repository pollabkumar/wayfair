"use client";
import React, { useRef, useState } from 'react';

const topPicksDetails = [
  {
    title: "Swap Your Sheets",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288309/uploads/tloyete4dj103vhrqa0h.png",
    description: "Fresh sets for all",
  },
  {
    title: "Hampers to Hold it All",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288130/uploads/hb0sqzyoxnxihwmumyzz.png",
    description: "Your laundry, but better",
  },
  {
    title: "Playful, Meet Retro",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288275/uploads/kt1l73nljcvkebttx7kh.png",
    description: "Home office essentials",
  },
  {
    title: "Our Top Table Lamps",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288196/uploads/hffmadha9mslg1jeqg3r.png",
    description: "Brighten things up",
  },
  {
    title: "Hampers to Hold it All",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288130/uploads/hb0sqzyoxnxihwmumyzz.png",
    description: "Your laundry, but better",
  },
  // Add more items as needed
];

const TopPicks = () => {
  const cardSliderRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const scrollLeft = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.scrollBy({
        left: -cardSliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.scrollBy({
        left: cardSliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      scrollRight();
    }

    if (touchStartX - touchEndX < -50) {
      scrollLeft();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Top Picks for the Season</h1>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-gray-600 z-10  md:block"
        >
          ‹
        </button>
        <div
          ref={cardSliderRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ scrollSnapType: 'x mandatory' }}>
            {topPicksDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center bg-gradient-to-b from-purple-300/75 via-purple-300/50 to-blue-200/45 flex-none w-64 sm:w-50 md:w-50"
                style={{ scrollSnapAlign: 'center' }}
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>
                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-contain mb-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110" />
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-gray-600 z-10  md:block"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TopPicks;

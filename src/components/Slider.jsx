"use client"
import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://assets.wfcdn.com/im/82869752/resize-h566-w2000%5Ecompr-r85/2874/287476923/good_vibes_sleep._modern_sleep_science_for_the_best_night%27s_rest._shop_now_287476923.jpg",
  "https://assets.wfcdn.com/im/82869752/resize-h566-w2000%5Ecompr-r85/2874/287476923/good_vibes_sleep._modern_sleep_science_for_the_best_night%27s_rest._shop_now_287476923.jpg",
  "https://assets.wfcdn.com/im/99020066/resize-h566-w2000%5Ecompr-r85/2897/289755776/bedroom_essentials%3A_save_on_accent_pillows%2C_duvets%2C_blankets%2C_and_more._shop_now_289755776.jpg",
  "https://assets.wfcdn.com/im/82869752/resize-h566-w2000%5Ecompr-r85/2874/287476923/good_vibes_sleep._modern_sleep_science_for_the_best_night%27s_rest._shop_now_287476923.jpg"// Add more image URLs as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length;

  const autoSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const manualSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <div className="Image-Sliderrrr max-w-[1440px] mx-auto overflow-hidden relative">
        <div className="slider relative flex" ref={sliderRef}>
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Slide ${index + 1}`} className="hover:cursor-pointer w-full" />
          ))}
        </div>
        <div className="absolute w-full flex justify-center bottom-5">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 bg-gray-700 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-purple-600' : ''}`}
                onClick={() => manualSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';

const ImpactSection = () => {
  return (
    <div className="bg-[rgba(126,0,171,18%)] text-white py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-black tracking-wider">WHAT WE'RE DOING TO MAKE AN IMPACT</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4 ">
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721817093/uploads/trjrvcxxz7nsqvhszvri.png" alt="Our Commitment" className="mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Our <span className="text-purple-800">Commitment</span></h3>
          <p className="mb-2 text-black">Contributing to all homes we share</p>
          <a href="#" className="text-purple-800 underline">Learn More...</a>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721817167/uploads/ogpfzzli0jlgantsdrky.png" alt="Shop Black Owned Brands" className="mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Shop <span className="text-purple-800">Black Owned Brands</span></h3>
          <p className="mb-2 text-black">Building Supplier Diversity</p>
          <a href="#" className="text-purple-800 underline">Learn More...</a>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721817187/uploads/xrbd3l1cnlxibe4cd74k.png" alt="Shop Sustainability" className="mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Shop <span className="text-purple-800">Sustainability</span></h3>
          <p className="mb-2 text-black">All things home sustainability</p>
          <a href="#" className="text-purple-800 underline">Learn More...</a>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;

"use client"
import React from 'react';

const RugSale = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 320px) {
          .top-56-320px {
            top: 8rem; /* top-56 in Tailwind CSS is 14rem */
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hide-md {
            display: none;
          }
        }
      `}</style>
      <div className="rugs flex flex-wrap justify-center gap-10 p-5 max-w-[1440px] mx-auto mt-10 h-auto">
        <div className="relative w-full md:w-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#7b189f93] rounded-lg overflow-hidden shadow-lg">
          <div className="absolute top-2 right-2 sm:top-56 md:top-4 md:right-4 bg-white rounded-full p-2 md:p-4 shadow-lg -rotate-45 w-16 md:w-auto top-56-320px">
            <div className="text-center font-bold text-xs md:text-base">
              <div>UPTO</div>
              <div className="text-xl md:text-3xl text-purple-600">60%</div>
              <div>OFF</div>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-900">
              RUG FOR <span className="text-purple-600">SALE</span>
            </h1>
            <p className="mt-6 text-3xl text-gray-700 mb-20">
              Set up your style<br />
              Below your <span className="font-bold text-gray-900">Budget</span>
            </p>
            <img src="https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721816245/uploads/ejhi09bwd6dvpwdolkdx.png" alt="Rug" className="mx-auto my-6 w-full md:w-4/5 mt-10 transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </div>
        </div>
        <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-gradient-to-b from-[#FFFFFF] to-[#7b189f93] p-5 rounded-lg shadow-lg">
          {[
            { title: 'Area Rugs', imgSrc: 'https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721816287/uploads/k3ueojuxjwwgdrf0b0tl.png', discount: '60%' },
            { title: 'Outdoor Rugs', imgSrc: 'https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721816352/uploads/cyvmwt5vvutultufocbd.png', discount: '60%' },
            { title: 'Halfway Runners', imgSrc: 'https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721816430/uploads/qnkla4hv7tkcxcxp1sbf.png', discount: '50%' },
            { title: 'Bath Rugs', imgSrc: 'https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721816388/uploads/tztuivgp811dx3uzuyck.png', discount: '40%' },
          ].map((rug, index) => (
            <div key={index} className={`relative bg-white rounded-lg overflow-hidden shadow-lg flex flex-col ${index % 2 !== 0 ? 'md:hidden lg:flex' : ''}`}>
              <div className="absolute top-0 right-0 bg-purple-900 text-white p-2 px-4 rounded-bl-lg">
                <div className="text-center text-xs font-bold">
                  <div>UPTO</div>
                  <div className="text-2xl">{rug.discount}</div>
                  <div className="text-sm">OFF</div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <img src={rug.imgSrc} alt={rug.title} className="w-full rounded-lg object-contain h-32 sm:h-48 md:h-56 lg:h-64" />
                <p className="mt-4 text-lg font-bold text-gray-800 text-center">{rug.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RugSale;

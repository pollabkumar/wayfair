import React from 'react';

const About = () => {
  return (
    <>
      <div className="topabout grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {[
          {
            img: "https://assets.wfcdn.com/im/06871307/resize-h64-w64%5Ecompr-r85/1711/171106361/default_name.jpg",
            alt: "Selection 1",
          },
          {
            img: "https://assets.wfcdn.com/im/40924046/resize-h64-w64%5Ecompr-r85/1711/171106364/default_name.jpg",
            alt: "Selection 2",
          },
          {
            img: "https://assets.wfcdn.com/im/97288685/resize-h64-w64%5Ecompr-r85/1711/171106369/default_name.jpg",
            alt: "Selection 3",
          },
          {
            img: "https://assets.wfcdn.com/im/31184982/resize-h64-w64%5Ecompr-r85/1711/171106371/default_name.jpg",
            alt: "Selection 4",
          },
        ].map((item, index) => (
          <div key={index} className="text-center flex flex-col">
            <img
              src={item.img}
              alt={item.alt}
              className="w-12 md:w-12 lg:w-12 rounded-md mb-3 self-center"
            />
            <h3 className="text-lg font-semibold text-gray-800">Unbeatable Selection</h3>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <img
          src="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg"
          alt="Exclusive deals and perks"
          className="w-full max-w-[1440px] rounded-md"
        />
      </div>
      <div className="mt-8 p-5 text-center">
        <h1 className="text-2xl font-bold mb-4">Be the first to know about our best deals!</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
          />
          <button className="bg-purple-600 text-white p-2 rounded-md w-full md:w-auto md:px-4">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default About;

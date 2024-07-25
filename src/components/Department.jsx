import React from 'react';

const departments = [
  { imgSrc: "https://assets.wfcdn.com/im/05986081/timg-h241-w241%5Ecompr-r85/8535/85357250/default_name.jpg", text: "Sale" },
  { imgSrc: "https://assets.wfcdn.com/im/20374007/timg-h241-w241%5Ecompr-r85/9847/98477101/default_name.jpg", text: "Furniture" },
  { imgSrc: "https://assets.wfcdn.com/im/78973905/timg-h241-w241%5Ecompr-r85/9847/98477118/default_name.jpg", text: "Outdoor" },
  { imgSrc: "https://assets.wfcdn.com/im/11352763/timg-h241-w241%5Ecompr-r85/1323/132350539/default_name.jpg", text: "Bedding & Bath" },
  { imgSrc: "https://assets.wfcdn.com/im/82372253/timg-h241-w241%5Ecompr-r85/9847/98477095/default_name.jpg", text: "Decor & Pillows" },
  { imgSrc: "https://assets.wfcdn.com/im/1519289/timg-h241-w241%5Ecompr-r85/9847/98477121/default_name.jpg", text: "Rugs" },
  { imgSrc: "https://assets.wfcdn.com/im/13026644/timg-h241-w241%5Ecompr-r85/9847/98477115/default_name.jpg ", text: "Lighting" },
  { imgSrc: "https://assets.wfcdn.com/im/59082384/timg-h241-w241%5Ecompr-r85/9847/98477108/default_name.jpg ", text: "Home Improvement" },
  { imgSrc: "https://assets.wfcdn.com/im/78368703/timg-h241-w241%5Ecompr-r85/9847/98477082/default_name.jpg", text: "Appliances" },
  { imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721814431/uploads/fw7jp8m3rvboctt7nejh.png", text: "Kitchen" },
  { imgSrc: "https://assets.wfcdn.com/im/44333123/timg-h241-w241%5Ecompr-r85/9847/98477084/default_name.jpg", text: "Baby & Kids" },
  { imgSrc: "https://assets.wfcdn.com/im/32533450/timg-h241-w241%5Ecompr-r85/9847/98477124/default_name.jpg", text: "Organisation" },
  { imgSrc: "https://www.pngmart.com/files/8/Kitchen-PNG-Background.png", text: "Custom Cabinetry" },
  { imgSrc: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-white-and-brown-cute-dog-animal-png-image_10211052.png", text: "Pet" },
];

const Department = () => {
  return (
    <div className="Shop-By-Department max-w-7xl mx-auto py-10 px-4 mb-5">
      <h1 className="text-center text-3xl font-bold mb-8">SHOP BY DEPARTMENT</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 overflow-x-auto my-10">
        {departments.map((department, index) => (
          <div key={index} className="card flex flex-col items-center p-4 hover:shadow-lg rounded-lg ">
            <img 
              src={department.imgSrc} 
              alt={department.text} 
              className="mb-4 transition-transform duration-400 ease-in-out transform hover:scale-110" 
            />
            <span className="text-lg font-medium">{department.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;

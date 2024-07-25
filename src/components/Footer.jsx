"use client"
import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);
    
        return () => {
          document.head.removeChild(link);
        };
      }, []);

  return (
    <div className="bg-[#cfc9d3] text-black">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">ABOUT US</h5>
            <ul>
              <li>About Wayfair</li>
              <li>Wayfair Professional</li>
              <li>Gift Cards</li>
              <li>Wayfair Credit Card</li>
              <li>Wayfair Financing</li>
              <li>Careers</li>
              <li>Sell On Wayfair</li>
              <li>Investor Relations</li>
              <li>Advertise With Us</li>
              <li>Locations</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">CUSTOMER SERVICE</h5>
            <ul>
              <li>My Orders</li>
              <li>My Account</li>
              <li>Track My Order</li>
              <li>Wayfair Accessibility Statement</li>
              <li>Return Policy</li>
              <li>Help Center</li>
              <li>Product Recalls</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">CONTACT US</h5>
            <p>Customer Service</p>
            <p>Closed. Opens At 8:00 AM.</p>
            <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p>All Times Eastern</p>
            <button className="mt-4 bg-purple-900 text-white py-2 px-4 rounded">QUICK HELP</button>
          </div>
          <div>
            <p>Shopping Assistance</p>
            <p>Closed. Opens At 8:00 AM.</p>
            <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p>All Times Eastern</p>
            <button className="mt-4 bg-purple-900 text-white py-2 px-4 rounded">CALL NOW</button>
          </div>
        </div>
      </div>
      <div className="bg-[#333333] py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white mb-4 md:mb-0">
            <span>JOSS & MAIN</span>
            <span>ALLMODERN</span>
            <span>BIRCH LAN</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

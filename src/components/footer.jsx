// components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:underline">
            Terms & Conditions
          </a>
          <a href="/contact" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

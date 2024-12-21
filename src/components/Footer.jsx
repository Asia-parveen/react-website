// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050523] text-white py-8 lg:my-[30px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Short Description */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4">AI Solutions</h2>
            <p className="text-gray-200 text-sm">
              Empowering businesses with cutting-edge AI technologies to drive innovation and efficiency.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200 text-sm">Email: support@aisolutions.com</p>
            <p className="text-gray-200 text-sm">Phone: +123 456 789</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-300">
            &copy; Asia parveen 2024 AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

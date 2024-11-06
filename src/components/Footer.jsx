import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-300 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-500">TandemFlow</h3>
            <p className="mb-4 text-gray-300">Automating success for businesses worldwide.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Case Studies', 'How We Work', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-teal-500 transition duration-300 hover-lift">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Contact Us</h4>
            <p className="flex items-center mb-2 text-gray-300"><FaEnvelope className="mr-2 text-teal-500" /> info@tandemflow.com</p> 
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Newsletter</h4>
            <p className="mb-4 text-gray-300">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="py-2 px-4 rounded-l-full w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button type="submit" className="bg-teal-500 py-2 px-4 rounded-r-full hover:bg-teal-600 transition duration-300 hover-lift">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 TandemFlow. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/legal" className="text-gray-300 hover:text-teal-500 transition duration-300 mr-4 hover-lift">Legal</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-teal-500 transition duration-300 hover-lift">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

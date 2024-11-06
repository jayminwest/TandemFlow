import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import TypeformButton from './TypeformButton';

const Hero = () => {
  return (
    <section className="relative bg-dark-200 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-20"></div>
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-300 via-transparent to-transparent opacity-20"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-dark-300 bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm hover-glow scale-in">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 text-center fade-in">Automate Your Success</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 text-center fade-in" style={{ animationDelay: '0.2s' }}>Streamline your business processes with TandemFlow's cutting-edge automation solutions</p>
          <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
            <TypeformButton className="bg-teal-500 text-white font-medium py-3 px-8 rounded-full hover:bg-teal-600 transition duration-300 flex items-center justify-center mx-auto hover-lift">
              Get Started
              <FaArrowRight className="ml-2" />
            </TypeformButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

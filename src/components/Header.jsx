import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import TypeformButton from './TypeformButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Services', to: 'services' },
    { name: 'How We Work', to: 'how-we-work' },
    { name: 'Case Studies', to: 'case-studies' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <header className={`bg-dark-200 shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ScrollLink to="hero" smooth={true} duration={500} className="text-2xl font-medium text-teal-500 hover:text-teal-400 transition duration-300 cursor-pointer">
            TandemFlow
          </ScrollLink>
          
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <ScrollLink 
                key={item.name} 
                to={item.to} 
                smooth={true} 
                duration={500} 
                className="text-gray-300 hover:text-teal-500 transition duration-300 hover-lift cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>
          
          <div className="flex items-center">
            <TypeformButton className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 hover-lift">
              Book Intro Call
            </TypeformButton>
            <div className="relative ml-4 lg:hidden" ref={dropdownRef}>
              <button
                className="text-gray-300 focus:outline-none hover:text-teal-500 transition duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              <div className={`dropdown-menu ${isMenuOpen ? 'slide-down' : 'hidden'}`}>
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="dropdown-menu-item cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

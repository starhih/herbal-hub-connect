
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`;

  const menuItems = [
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Herbs', path: '/products/herbs' },
        { name: 'Extracts', path: '/products/extracts' },
        { name: 'Probiotics', path: '/products/probiotics' },
      ]
    },
    { 
      name: 'Company', 
      path: '/company',
      dropdown: [
        { name: 'About Us', path: '/company/about' },
        { name: 'Our Story', path: '/company/story' },
        { name: 'Facilities', path: '/company/facilities' },
        { name: 'Team', path: '/company/team' },
      ]
    },
    { 
      name: 'Quality', 
      path: '/quality',
      dropdown: [
        { name: 'Quality Assurance', path: '/quality/assurance' },
        { name: 'Certifications', path: '/quality/certifications' },
        { name: 'Food Safety', path: '/quality/food-safety' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={navbarClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-herb-700 font-serif text-2xl font-bold">Star Hi Herbs</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center cursor-pointer text-charcoal-900 hover:text-herb-600 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </div>
              ) : (
                <Link to={item.path} className="text-charcoal-900 hover:text-herb-600 transition-colors">
                  {item.name}
                </Link>
              )}
              
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible 
                                group-hover:opacity-100 group-hover:visible transition-all duration-300 transform 
                                group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-1 rounded-md bg-white ring-1 ring-black ring-opacity-5">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-charcoal-900 hover:bg-herb-50 hover:text-herb-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link 
            to="/client-login" 
            className="flex items-center px-4 py-2 rounded-full border border-herb-500 text-herb-500 hover:bg-herb-50 transition-colors"
          >
            <User className="w-4 h-4 mr-2" />
            <span>Client Login</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-charcoal-900 hover:text-herb-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-charcoal-900 hover:text-herb-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="px-4 pt-5 pb-8">
          {menuItems.map((item, index) => (
            <div key={index} className="py-3 border-b border-gray-100">
              {item.dropdown ? (
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-medium">
                    {item.name}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block py-2 text-charcoal-700 hover:text-herb-600"
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={item.path}
                  className="block text-lg font-medium text-charcoal-900 hover:text-herb-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6">
            <Link
              to="/client-login"
              className="block w-full px-4 py-2 text-center rounded-full bg-herb-500 text-white hover:bg-herb-600 transition-colors"
              onClick={toggleMenu}
            >
              Client Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

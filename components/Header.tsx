import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block py-2 px-3 rounded md:p-0 transition-colors duration-300 text-2xl md:text-base ${
        isActive
          ? 'text-naps-green font-semibold'
          : 'text-gray-300 hover:text-naps-green'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-gray-900/70 backdrop-blur-xl border-b border-gray-700/50 fixed top-0 left-0 right-0 z-50 shadow-[0_4px_30px_rgba(15,107,107,0.2)]">
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-bold text-naps-green">NAPS 💚</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="font-medium flex items-center space-x-8">
              <li><NavItem to="/">Home</NavItem></li>
              <li><NavItem to="/about">About Us</NavItem></li>
              <li><NavItem to="/membership">Membership</NavItem></li>
              <li><NavItem to="/ipsf">IPSF</NavItem></li>
              <li><NavItem to="/contact">Contact Us</NavItem></li>
            </ul>
          </div>
          
          {/* Animated Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-8 h-8 text-naps-green focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="h-full flex flex-col justify-center items-center space-y-8">
          <li><NavItem to="/" onClick={() => setIsMenuOpen(false)}>Home</NavItem></li>
          <li><NavItem to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavItem></li>
          <li><NavItem to="/membership" onClick={() => setIsMenuOpen(false)}>Membership</NavItem></li>
          <li><NavItem to="/ipsf" onClick={() => setIsMenuOpen(false)}>IPSF</NavItem></li>
          <li><NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavItem></li>
        </ul>
      </div>
    </>
  );
};

export default Header;

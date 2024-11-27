import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              EmailFlow
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="features"
              className="hover:text-blue-400 transition-colors duration-300">
      
              Features
            </Link>
            <Link
              to="pricing"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex">
            <Link
              to="/signin"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link>
            href="#features"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 bg-blue-500 text-center text-white hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

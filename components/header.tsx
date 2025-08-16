'use client';

import React from 'react';
import { Search, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">r</span>
              <div className="w-2 h-2 bg-purple-600 rounded-full mx-1"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full mx-1"></div>
              <span className="text-2xl font-bold text-gray-900">fly</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Buy</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sell</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">For agents</a>
              <div className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                <span>More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search bar */}
            <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-2 min-w-[300px]">
              <input
                type="text"
                placeholder="Enter an address, city or a zip code"
                className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full p-2 ml-2">
                <Search size={16} className="text-gray-900" />
              </button>
            </div>

            {/* Heart icon */}
            <button className="text-gray-700 hover:text-gray-900">
              <Star size={20} />
            </button>

            {/* Account button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
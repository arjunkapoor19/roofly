'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Filter, ArrowRight, Play, Zap, Eye, Sparkles, Heart, Users, Globe, ChevronDown } from 'lucide-react';

type PropertyType = 'Buy' | 'Rent' | 'New Launch' | 'PG / Co-living' | 'Commercial' | 'Plots/Land' | 'Projects';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PropertyType>('Buy');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const propertyTypes: PropertyType[] = ['Buy', 'Rent', 'New Launch', 'PG / Co-living', 'Commercial', 'Plots/Land', 'Projects'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = () => {
    // Search logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const popularCities = [
    { name: 'Mumbai', flag: '🇮🇳' },
    { name: 'Bangalore', flag: '🇮🇳' },
    { name: 'Delhi NCR', flag: '🇮🇳' },
    { name: 'Pune', flag: '🇮🇳' },
    { name: 'Chennai', flag: '🇮🇳' }
  ];

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50"
    >
      {/* Top curved section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#fef7ed"
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,138.7C672,139,768,117,864,122.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-12 leading-tight text-gray-900 font-serif text-center sm:text-left">
              Your new home
              <br />
              <span className="text-gray-700">Journey awaits</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md mb-8 sm:mb-12 leading-relaxed font-light text-center sm:text-left mx-auto sm:mx-0">
              Anyone redefines buying and selling homes with ease, efficiency, and full transparency.
            </p>

            {/* Main Search Bar - Mobile Optimized */}
            <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                
                {/* Mobile: Stacked Layout */}
                <div className="block sm:hidden">
                  {/* Country Selector - Mobile */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">🇮🇳</span>
                      <span className="text-sm font-medium text-gray-700">India</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  {/* Search Input - Mobile */}
                  <div className="p-4">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter address, city or zip code"
                      className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white border border-gray-200 rounded-lg focus:border-yellow-400 transition-colors"
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                    />
                    
                    {/* Search Button - Mobile */}
                    <button 
                      onClick={handleSearch}
                      className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-200 flex items-center justify-center text-base"
                    >
                      <Search size={20} className="mr-2" />
                      Discover homes
                    </button>
                  </div>
                </div>

                {/* Desktop: Horizontal Layout */}
                <div className="hidden sm:flex items-center">
                  {/* Country Selector - Desktop */}
                  <div className="flex items-center px-4 lg:px-6 py-3 lg:py-4 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-xl lg:text-2xl mr-2 lg:mr-3">🇮🇳</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  {/* Search Input - Desktop */}
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter an address, city or a zip code"
                    className="flex-1 px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  />
                  
                  {/* Search Button - Desktop */}
                  <button 
                    onClick={handleSearch}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-200 flex items-center text-base lg:text-lg"
                  >
                    <Search size={20} className="mr-2 lg:mr-3" />
                    <span className="hidden md:inline">Discover homes</span>
                    <span className="md:hidden">Search</span>
                  </button>
                </div>

                {/* Stats Bar - Mobile Optimized */}
                <div className="bg-gray-900 text-white px-4 sm:px-8 py-3 sm:py-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span className="font-semibold text-xs sm:text-sm">31M+ homes</span>
                      </div>
                      <div className="flex items-center sm:hidden">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="font-semibold text-xs">4.6M+ agents</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="font-semibold text-sm">4.6M+ agents</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      <span className="font-semibold text-xs sm:text-sm">Globally available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Suggestions - Mobile Optimized */}
              {searchFocused && searchValue && (
                <div className="bg-white rounded-b-xl sm:rounded-b-2xl shadow-lg border-l border-r border-b border-gray-200 mt-1 w-full">
                  <div className="p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600 mb-2">Popular searches</div>
                    <div className="space-y-1 sm:space-y-2">
                      {['Mumbai, MH', 'Bangalore, KA', 'Delhi NCR', 'Pune, MH'].map((suggestion, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-2 sm:p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => setSearchValue(suggestion)}
                        >
                          <Search size={14} className="text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Popular Cities - Mobile Optimized */}
            <div className="mb-8 sm:mb-12">
              <p className="text-sm text-gray-600 mb-3 sm:mb-4 font-medium text-center sm:text-left">Popular Cities:</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
                {popularCities.map((city, index) => (
                  <button
                    key={index}
                    className="flex items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <span className="mr-1 sm:mr-2 text-sm">{city.flag}</span>
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right side - Visual space for illustration */}
          <div className="hidden xl:block">
            {/* This space is reserved for the illustration that's positioned absolutely */}
          </div>

        </div>

      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
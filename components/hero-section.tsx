'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Filter, ArrowRight, Play, Zap, Eye, Sparkles, Heart, Users, Globe, ChevronDown } from 'lucide-react';

type PropertyType = 'Buy' | 'Rent' | 'New Launch' | 'PG / Co-living' | 'Commercial' | 'Plots/Land' | 'Projects';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PropertyType>('Buy');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ name: 'India', flag: '🇮🇳', code: 'IN' });
  const heroRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const countries = [
    { name: 'India', flag: '🇮🇳', code: 'IN' },
    { name: 'United States', flag: '🇺🇸', code: 'US' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
    { name: 'UAE', flag: '🇦🇪', code: 'AE' },
  ];

  const handleSearch = () => {
    // Search logic here
    console.log('Searching for:', searchValue, 'in', selectedCountry.name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
            
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 mt-8 sm:mt-12 leading-tight text-gray-900 font-serif text-center sm:text-left">
              Your new home
              <br />
              <span className="text-gray-700">Journey awaits</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md mb-8 sm:mb-12 leading-relaxed font-light text-center sm:text-left mx-auto sm:mx-0">
              Anyone redefines buying and selling homes with ease, efficiency, and full transparency.
            </p>

    <div className="w-full max-w-4xl mx-auto">
  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
    {/* Top Search Row */}
    <div className="flex items-center bg-white">
      {/* Country Selector */}
      <div className="flex items-center px-4 border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
        <span className="text-2xl mr-2">🇺🇸</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter an address, city or a zip code"
        className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none"
      />

      {/* Search Button */}
      <button className="flex items-center px-6 py-4 bg-yellow-400 hover:bg-yellow-500 font-medium text-gray-900 transition-colors">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
        Discover homes
      </button>
    </div>

    {/* Stats Bar */}
    <div className="bg-gray-900 text-white flex justify-center gap-8 px-4 py-3 text-sm">
      <span>31M+ homes</span>
      <span>4.6M+ agents</span>
      <span>Globally available</span>
    </div>
  </div>
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
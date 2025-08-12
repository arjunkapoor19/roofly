'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './property-card';
import { Property } from '../types/property';

const LuxuryPropertiesSection: React.FC = () => {
  const luxuryProperties: Property[] = [
    {
      id: 1,
      price: 45000000,
      location: "Bangalore, Inn",
      status: "Available",
      image: "https://blocks.astratic.com/img/general-img-landscape.png"
    },
    {
      id: 2,
      price: 37000000,
      location: "Bangalore, Inn",
      status: "Available",
      image: "https://blocks.astratic.com/img/general-img-landscape.png"
    },
    {
      id: 3,
      price: 52000000,
      location: "Bangalore, Inn",
      status: "Sold",
      image: "/https://blocks.astratic.com/img/general-img-landscape.png"
    },
    {
      id: 4,
      price: 23000000,
      location: "Bangalore-ind",
      status: "Rented",
      image: "/api/placeholder/400/300"
    }
  ];

  const handleViewAll = () => {
    // Handle view all properties logic
    console.log('View all luxury properties');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Luxury Properties
            </h2>
            <p className="text-xl text-gray-600">
              Premium homes for discerning buyers
            </p>
          </div>
          <button 
            onClick={handleViewAll}
            className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View all properties
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {luxuryProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryPropertiesSection;
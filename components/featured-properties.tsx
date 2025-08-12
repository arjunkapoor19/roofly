'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import PropertyCard from './property-card';
import { Property } from '../types/property';

const FeaturedPropertiesSection: React.FC = () => {
  const featuredProperties: Property[] = [
    {
      id: 1,
      price: 35000000,
      location: "Mumbai, Bandra",
      status: "Available",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      price: 28000000,
      location: "Delhi, Vasant Kunj",
      status: "Available",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      price: 42000000,
      location: "Gurgaon, Golf Course",
      status: "Available",
      image: "/api/placeholder/400/300"
    }
  ];

  const handleNearMe = () => {
    // Handle near me logic
    console.log('Show properties near me');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Properties
          </h2>
          <button 
            onClick={handleNearMe}
            className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
          >
            <MapPin size={16} className="mr-2" />
            Near me
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} showVR={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
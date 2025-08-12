'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  showVR?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, showVR = false }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatPrice = (price: number): string => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const getStatusBadge = (status: Property['status']): string => {
    const styles: Record<Property['status'], string> = {
      'Available': 'bg-orange-500 text-white',
      'Sold': 'bg-gray-500 text-white',
      'Rented': 'bg-gray-800 text-white'
    };
    
    return styles[status];
  };

  const handleContactSeller = () => {
    // Handle contact seller logic
    console.log('Contacting seller for property:', property.id);
  };

  const handleToggleFavorite = () => {
    // Handle favorite toggle logic
    console.log('Toggle favorite for property:', property.id);
  };

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        <div className="p-6">
          <div className="h-8 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src="https://blocks.astratic.com/img/general-img-landscape.png"
          alt={property.title || `Property in ${property.location}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(property.status)}`}>
            {property.status}
          </span>
          {showVR && (
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              VR
            </span>
          )}
        </div>
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          suppressHydrationWarning
        >
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>
      <div className="p-6">
        {/* This div is the one causing hydration issues - add suppressHydrationWarning */}
        <div 
          className="text-2xl font-bold text-gray-900 mb-2"
          suppressHydrationWarning
        >
          {formatPrice(property.price)}
        </div>
        <div className="text-gray-600 mb-4">
          {property.location}
        </div>
        <button 
          onClick={handleContactSeller}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
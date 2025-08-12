'use client';

import React from 'react';
import { Home, Building, TrendingUp, Users, MapPin, BarChart3 } from 'lucide-react';
import { Service } from '../types/property';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: Home,
      title: "Buying a home",
      description: "Find your perfect home with our expert guidance",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Building,
      title: "Renting a home",
      description: "Discover rental properties that suit your lifestyle",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Invest in Real Estate",
      description: "Make smart investment decisions with market insights",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Sell/Rent your property",
      description: "List your property and connect with buyers",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: MapPin,
      title: "Plots/Land",
      description: "Explore land opportunities for development",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: BarChart3,
      title: "Explore Insights",
      description: "Get market trends and property analytics",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Real Estate Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re buying, renting, or investing, we have the perfect solution for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/header';
import HeroSection from '../components/hero-section';
import ServicesSection from '../components/services-section';
import LuxuryPropertiesSection from '../components/luxury-properties';
import FeaturedPropertiesSection from '../components/featured-properties';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <LuxuryPropertiesSection />
      <FeaturedPropertiesSection />
    </div>
  );
};

export default Home;
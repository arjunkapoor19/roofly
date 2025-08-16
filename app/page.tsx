"use client"

import React, { useEffect, useState } from "react"
import type { NextPage } from "next"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import ServicesSection from "../components/services-section"
import LuxuryPropertiesSection from "../components/luxury-properties"
import FeaturedPropertiesSection from "../components/featured-properties"
import SplashScreen from "../components/splash-screen" // Add this import

const Home: NextPage = () => {
  const [userChoice, setUserChoice] = useState<"buy" | "sell" | null>(null)
  const [showSplash, setShowSplash] = useState(true)

  const handleUserChoice = (choice: "buy" | "sell") => {
    setUserChoice(choice)
    setShowSplash(false)
  }

  // Show splash screen if no choice has been made
  if (showSplash) {
    return <SplashScreen onSelect={handleUserChoice} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <LuxuryPropertiesSection />
      <FeaturedPropertiesSection />
    </div>
  )
}

export default Home
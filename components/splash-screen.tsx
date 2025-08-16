"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type SplashScreenProps = {
  onSelect: (choice: "buy" | "sell") => void
}

export default function SplashScreen({ onSelect }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)

  const handleSelect = (choice: "buy" | "sell") => {
    // Store in memory instead of localStorage
    setVisible(false)
    setTimeout(() => onSelect(choice), 400) // wait for exit animation
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#f9f5f1' }}
        >
          <div className="w-full max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Logo */}
              <div className="flex items-center justify-center gap-2 mb-16">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <span className="text-2xl font-semibold text-gray-800 ml-2">roofly</span>
              </div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6 font-serif"
              >
                Your new home<br />
                Journey awaits
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
              >
                Roofly redefines buying and selling homes with
                ease, efficiency, and full transparency.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8"
              >
                <button
                  onClick={() => handleSelect("buy")}
                  className="group relative overflow-hidden bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Buy a Home
                  </span>
                </button>
                
                <button
                  onClick={() => handleSelect("sell")}
                  className="group relative overflow-hidden bg-gray-800 hover:bg-gray-900 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.614 1.19c.395.536 1.084.938 1.457 1.042V15a1 1 0 102 0v-.422c.373-.104 1.062-.506 1.457-1.042a1 1 0 00-1.614-1.19c-.163.187-.452.377-.843.504V9.908c.622-.117 1.196-.342 1.676-.662C13.398 8.765 14 7.991 14 7c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 4.092V4z" clipRule="evenodd" />
                    </svg>
                    Sell a Home
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
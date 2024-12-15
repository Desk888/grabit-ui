'use client';

import React from 'react';

function AboutHero() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-800/10 backdrop-blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-green-700">Give. Share. Sustain.</span>
              <span className="block text-3xl sm:text-4xl mt-3 text-gray-700">Making sustainability accessible to everyone</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              Grabit is and will always be free. Our mission is to connect communities, reduce waste, and make a positive impact on our planet - one item at a time.
            </p>

            <div className="mt-12">
              <button 
                onClick={() => window.location.href = '/about'}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#246B22] hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
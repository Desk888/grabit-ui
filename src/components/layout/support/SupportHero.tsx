"use-client";

import React from 'react';

function Hero() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Support Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            How Can We Help You?
            <span className="block text-white">We're Here to Support</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Get instant answers to your questions and access our comprehensive support resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
import React from 'react';
import { HeartHandshake } from 'lucide-react';
import MyImage from '../../../public/images/grabit_donation.jpg'

export function DonationHero() {
    const handleDonateClick = () => {
        window.location.href = '/donate';
    };

    return (
      <div className="relative min-h-[600px] flex items-center mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={MyImage.src}
            alt="People helping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        </div>
  
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Support Our Mission</span>
            <span className="block text-3xl sm:text-4xl mt-3">
                Help Us Maintain Grabit Free For All
            </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white leading-relaxed">
                Your contribution helps us continue to keep the service free for everyone. Support the 
                positive impact on communities worldwide. Every donation counts.
            </p>
        <div className="mt-12">
            <button 
                onClick={handleDonateClick}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#2F892C] hover:bg-[#246B22] transition-colors duration-300 shadow-lg hover:shadow-xl gap-2"
            >
            <HeartHandshake className="w-6 h-6" />
                Make a Donation
            </button>
        </div>
        </div>
      </div>
    );
  }
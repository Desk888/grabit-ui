'use client';

import { Search, MapPin } from 'lucide-react';
import Image from 'next/image';
import SearchBar from '../layout/SearchBar';
import MyImage from '../../public/images/grabit_hero.jpg'

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={MyImage}
          alt="Grabit Hero"
          fill
          className="object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find What You Need,
            <span className="block text-[#2F892C]">Right Around The Corner</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Discover unique items from people in your local community. <br />
            Buy, sell, and connect with neighbors.
          </p>

          {/* Search Section */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar
                placeholder="Search Items"
                icon={<Search className="h-5 w-5 text-gray-400" />}
                className="flex-1"
              />
              <SearchBar
                placeholder="Postcode"
                icon={<MapPin className="h-5 w-5 text-gray-400" />}
                className="sm:w-40"
              />
              <button className="bg-[#2F892C] hover:bg-[#246B22] text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
                <Search size={20} />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-white">
              <span>Popular:</span>
              {['Electronics', 'Furniture', 'Books', 'Sports', 'Clothing'].map((item) => (
                <button
                  key={item}
                  className="hover:text-[#2F892C] transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


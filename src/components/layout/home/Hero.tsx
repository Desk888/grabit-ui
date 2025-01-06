'use client';

import { Search, MapPin, Leaf, TrendingDown, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSearch } from './SearchContext';
import SearchBar from './SearchBar';
import MyImage from '../../../public/images/grabit_hero.jpg';

const categories = [
  'All Categories',
  'Electronics',
  'Furniture',
  'Books',
  'Sports',
  'Clothing',
  'Home & Garden',
  'Toys & Games',
  'Art & Crafts',
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    searchTerm, 
    category, 
    postcode, 
    setSearchTerm, 
    setCategory, 
    setPostcode 
  } = useSearch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={MyImage}
          alt="Grabit Hero"
          fill
          className="object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find What You Need,
            <span className="block text-white">Right Around The Corner</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Discover unique free items from people in your local community, or
            give a new home to your old furnitures, clothes, electronics, and more.
          </p>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col items-center gap-6 sm:flex-row">
            <div className="relative w-full sm:w-48">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span className="truncate">{category}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1 max-h-60 overflow-auto">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          setCategory(cat);
                          setIsOpen(false);
                        }}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <SearchBar
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Items"
              icon={<Search className="h-5 w-5 text-gray-400" />}
              className="flex-1 w-full"
            />
            <SearchBar
              value={postcode}
              onChange={handlePostcodeChange}
              placeholder="Postcode"
              icon={<MapPin className="h-5 w-5 text-gray-400" />}
              className="sm:w-40 w-full"
            />
            <button className="bg-[#2F892C] hover:bg-[#246B22] text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white">
            <span>Popular:</span>
            {['Electronics', 'Furniture', 'Books', 'Sports', 'Clothing'].map(
              (item) => (
                <span key={item} className="hover:text-[#2F892C] transition-colors duration-200">
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-white">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 mr-2 text-white" />
              <span>Reduce Waste</span>
            </div>
            <div className="flex items-center">
              <TrendingDown className="h-6 w-6 mr-2 text-white" />
              <span>Lower CO2 Emissions</span>
            </div>
            <div className="flex items-center">
              <Search className="h-6 w-6 mr-2 text-white" />
              <span>Find Local Items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
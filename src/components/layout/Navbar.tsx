'use client';

import { useState } from 'react';
import { Search, MapPin, PlusCircle, MessageCircle, Package } from 'lucide-react';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#2F892C] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Package className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Grabit</span>
          </Link>

          {/* Search Section */}
          <div className="flex-1 flex items-center justify-center px-6 space-x-4">
            <SearchBar
              placeholder="Search Items"
              icon={<Search className="h-5 w-5 text-gray-400" />}
              className="w-96"
            />
            <SearchBar
              placeholder="Postcode"
              icon={<MapPin className="h-5 w-5 text-gray-400" />}
              className="w-40"
            />
            <button className="nav-button text-white bg-[#246B22]" title="Search">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/new_product" className="nav-button text-white hover:bg-[#246B22]" title="Add Product">
              <PlusCircle className="h-5 w-5" />
            </Link>
            <Link href="/inbox" className="nav-button text-white hover:bg-[#246B22]" title="Messages">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
'use client';

import { PlusCircle, MessageCircle, Package } from 'lucide-react';

import ProfileDropdown from './ProfileDropdown';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#2F892C] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Package className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Grabit</span>
          </Link>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/new_ad" className="nav-button text-white hover:bg-[#246B22] flex flex-col items-center" title="Add Product">
              <PlusCircle className="h-5 w-5" />
              <span className="text-xs mt-0.5">Sell</span>
            </Link>
            <Link href="/inbox" className="nav-button text-white hover:bg-[#246B22] flex flex-col items-center" title="Messages">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs mt-0.5">Chat</span>
            </Link>
            <ProfileDropdown />
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
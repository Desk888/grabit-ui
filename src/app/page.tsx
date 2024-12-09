'use client';

import { useState } from 'react';
import ProductGrid from "../components/layout/ProductGrid"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"

export default function Home() {
  const [postcode, setPostcode] = useState('');

  const handlePostcodeChange = (newPostcode: string) => {
    setPostcode(newPostcode);
  };

  return (
    <>
      <Navbar onPostcodeChange={handlePostcodeChange} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero />
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold text-[#2E882C]">
            Discover Items {postcode ? <>Near <span className="text-black">{postcode.slice(0, 8).toUpperCase()}</span></> : 'Near You'}:
          </h2>
        </div>
        <ProductGrid />
      </div>
    </>
  );
}
'use client';

import { useState } from 'react';
import ProductGrid from "../components/layout/ProductGrid"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"

export default function Home() {

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero />
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold text-[#2E882C]">
            Discover Items Near Near You
          </h2>
        </div>
        <ProductGrid />
      </div>
    </>
  );
};
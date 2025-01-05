'use client';

import ProductGrid from "../components/layout/ProductGrid"
import Hero from "../components/layout/Hero"
import AboutHero from "@/components/layout/AboutHero";
import ProductFilters from "@/components/layout/ProductFilters";


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 bg-gray-50 border-white border-b-2 border-opacity-50 ml-6">Browse Items:</h2>
        <ProductFilters />
        <ProductGrid />
      </div>
      <AboutHero />
    </div>
  );
}
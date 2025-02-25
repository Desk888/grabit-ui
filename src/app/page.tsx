'use client';

import ProductGrid from "../components/layout/items/ProductGrid"
import Hero from "../components/layout/home/Hero"
import AboutHero from "@/components/layout/home/AboutHero";
import ProductFilters from "@/components/layout/items/ProductFilters";
import { useSearch } from "../components/layout/home/SearchContext"


export default function Home() {

  const { postcode } = useSearch();
  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 bg-gray-50 border-white border-b-2 border-opacity-50 ml-6">Browse Items Nearby: <span className="text-[#2F892C]">{postcode.toUpperCase()}</span></h2>
        <ProductFilters />
        <ProductGrid />
      </div>
      <AboutHero />
    </div>
  );
}
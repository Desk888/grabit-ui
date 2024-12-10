'use client';

import ProductGrid from "../components/layout/ProductGrid"
import Hero from "../components/layout/Hero"

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-6 text-[#2D882C]">Available Products Near You:</h2>
        <ProductGrid />
      </div>
    </div>
  );
}
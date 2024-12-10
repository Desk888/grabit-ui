'use client';

import ProductGrid from "../components/layout/ProductGrid"
import Hero from "../components/layout/Hero"

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid />
      </div>
    </div>
  );
}
'use client'

import { useState } from 'react'
import ProductCard from '@/components/layout/items/ProductCard'
import { PaginationControls } from '@/components/layout/items/PaginationControls'
import { useProducts } from '@/components/layout/items/useProducts'

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const { products, isLoading, error } = useProducts()

  const PRODUCTS_PER_PAGE = 16
  const totalPages = Math.ceil((products?.length || 0) / PRODUCTS_PER_PAGE)
  
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = products?.slice(startIndex, endIndex) || []

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading products</div>
  }

  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-8"
      />
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  category: string
  condition: string
  location: string
  image: string
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // In a real application, you would fetch products from an API
    // For this example, we'll use mock data
    const mockProducts: Product[] = [
      {
        id: 1,
        title: "Test 1",
        category: "Home & Garden",
        condition: "Used - Good",
        location: "London, SW1A 1AA",
        image: "https://picsum.photos/seed/lamp/300/200"
      },
      {
        id: 2,
        title: "Test 2",
        category: "Sports & Outdoors",
        condition: "Used - Fair",
        location: "Manchester, M1 1AE",
        image: "https://picsum.photos/seed/bike/300/200"
      },
      {
        id: 3,
        title: "Test 3",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
      {
        id: 4,
        title: "Test 4",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
      {
        id: 5,
        title: "Test 5",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
      {
        id: 6,
        title: "Test 6",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
      {
        id: 7,
        title: "Test 7",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
      {
        id: 8,
        title: "Test 8",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "London, E1 6AE",
        image: "https://picsum.photos/seed/desk/300/200"
      },
    ]

    setProducts(mockProducts)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


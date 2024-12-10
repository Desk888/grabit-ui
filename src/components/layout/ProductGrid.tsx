'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
  category: string
  condition: string
  location: string
  images: string[]
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // In a real application, you would fetch products from an API
    // For this example, we'll use mock data
    const mockProducts: Product[] = [
      {
        id: 1,
        title: "Floor Lamp white",
        category: "Home & Garden",
        condition: "Used - Fair",
        location: "London, N15 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 2,
        title: "adidas football shoes size 9",
        category: "Sports & Outdoors",
        condition: "Used - Fair",
        location: "Manchester, M1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 3,
        title: "Bosch drill press",
        category: "Tools & Hardware",
        condition: "Used - Mint",
        location: "Petersborough, S1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 4,
        title: "Ralph Lauren mens sweater",
        category: "Clothing & Accessories",
        condition: "Used - Mint",
        location: "Barnet, N15 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 5,
        title: "canada goose down jacket",
        category: "Clothing & Accessories",
        condition: "Used - Good",
        location: "Brighton, BN1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 6,
        title: "HDMI cable male to male",
        category: "Electronics",
        condition: "Used - Mint",
        location: "Edinburgh, EH1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 7,
        title: "Foundation Maths book",
        category: "Books",
        condition: "Used - Fair",
        location: "Chester, CH1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
      },
      {
        id: 8,
        title: "Tressemme hairdryer",
        category: "Home & Garden",
        condition: "Used - Mint",
        location: "Shoreditch, EC1 1AE",
        images: [
          "https://picsum.photos/seed/product1a/300/200",
          "https://picsum.photos/seed/product1b/300/200",
          "https://picsum.photos/seed/product1c/300/200"
        ]
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


'use client'

import { useState, useEffect } from 'react'

interface Product {
  id: number
  title: string
  price: string
  location: string
  postedAt: Date
  images?: string[]
}

export function useProducts() {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use mock data
        const mockProducts: Product[] = Array.from({ length: 48 }, (_, i) => ({
          id: i + 1,
          title: `Product ${i + 1}`,
          price: `£${Math.floor(Math.random() * 100) + 1}`,
          location: ['London', 'Manchester', 'Birmingham', 'Leeds'][Math.floor(Math.random() * 4)],
          postedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
          images: [`https://picsum.photos/seed/product${i + 1}/300/300`]
        }))

        setProducts(mockProducts)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'))
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, isLoading, error }
}
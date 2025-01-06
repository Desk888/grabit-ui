'use client'

import { useState, useEffect } from 'react'
import { useSearch } from './SearchContext'

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
  const { searchTerm, category, postcode } = useSearch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const mockProducts: Product[] = Array.from({ length: 48 }, (_, i) => ({
          id: i + 1,
          title: `Product ${i + 1}`,
          price: `£${Math.floor(Math.random() * 100) + 1}`,
          location: ['London', 'Manchester', 'Birmingham', 'Leeds'][Math.floor(Math.random() * 4)],
          postedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
          images: [`https://picsum.photos/seed/product${i + 1}/300/300`]
        }))

        const filteredProducts = mockProducts.filter(product => {
          const matchesSearch = !searchTerm || 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          
          const matchesLocation = !postcode || 
            product.location.toLowerCase().includes(postcode.toLowerCase())
          
          const matchesCategory = !category || 
            category === 'All Categories' || 
            (category === 'Electronics' && product.id % 2 === 0) ||
            (category === 'Furniture' && product.id % 2 === 1)

          return matchesSearch && matchesLocation && matchesCategory
        })

        setProducts(filteredProducts)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'))
        setIsLoading(false)
      }
    }

    const timeoutId = setTimeout(fetchProducts, 300)
    return () => clearTimeout(timeoutId)
    
  }, [searchTerm, category, postcode]) 

  return { products, isLoading, error }
}
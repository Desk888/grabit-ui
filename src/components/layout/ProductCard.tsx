'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  title: string
  category: string
  condition: string
  location: string
  images?: string[]
}

export default function ProductCard({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setTransitioning] = useState(false)

  const images = product.images && product.images.length > 0
    ? product.images
    : ['https://picsum.photos/seed/placeholder/200/150']

  const nextImage = () => {
    if (isTransitioning) return
    setTransitioning(true)
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setTransitioning(false), 1000)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isTransitioning) return
    setTransitioning(true)
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setTimeout(() => setTransitioning(false), 1000)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border max-w-xs cursor-pointer">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-36">
          <div className="flex overflow-x-auto snap-x snap-mandatory h-full">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full snap-center">
                <Image
                  src={image}
                  alt={`${product.title} - Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-800" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); nextImage() }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </button>
            </>
          )}
        </div>
        <div className="p-3">
          <h2 className="text-lg font-semibold mb-1 text-[#2D882C]">{product.title}</h2>
          <p className="text-xs text-gray-600 mb-1">{product.category}</p>
          <p className="text-xs font-medium mb-1">Condition: {product.condition}</p>
          <div className="flex items-center text-xs text-gray-600 mb-3">
            <MapPin size={14} className="mr-1" />
            {product.location}
          </div>
        </div>
      </Link>
      <div className="p-3 flex justify-between items-center">
        <button className="nav-button text-white bg-[#2E882C]" title="Add to Saved Items">
          <Heart className="h-4 w-4 hover:fill-[#FF5A5F]" />
        </button>
      </div>
    </div>
  )
}
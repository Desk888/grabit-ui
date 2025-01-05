'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

// Fetch product data from API

interface Product {
  id: number
  title: string
  location: string
  postedAt: Date
  images?: string[]
}

export default function ProductCard({ product }: { product: Product }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setTransitioning] = useState(false)

  const images = product.images && product.images.length > 0
    ? product.images
    : ['https://picsum.photos/seed/placeholder/300/200']

  const nextImage = () => {
    if (isTransitioning) return
    setTransitioning(true)
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setTransitioning(false), 500)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isTransitioning) return
    setTransitioning(true)
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setTimeout(() => setTransitioning(false), 15000)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    return `${diffInDays} days ago`
  }

  // Add functionality to handle clicks on the product card

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-[160px]">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); nextImage() }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </>
          )}
          <button 
            className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors duration-200"
            title="Save to Favorites"
            onClick={(e) => { e.preventDefault() }}
          >
            <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 active:text-red-500 transition-colors duration-200" fill="currentColor" />
          </button>
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-base font-medium text-[#2D882C] line-clamp-1">{product.title}</h2>
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-1">
            <MapPin size={14} className="flex-shrink-0" />
            <span className="truncate">{product.location}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {formatTimeAgo(product.postedAt)}
          </div>
        </div>
      </Link>
    </div>
  )
}
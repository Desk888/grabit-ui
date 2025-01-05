'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  title: string;
}

export function ImageGallery({ images, currentImageIndex, setCurrentImageIndex, title }: ImageGalleryProps) {
  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  // Ensure all images have consistent dimensions
  const processedImages = images.map(img => `${img}?w=800&h=800&fit=crop&auto=format`);

  return (
    <div className="relative">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img
          src={processedImages[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>
      
      <div className="flex mt-4 space-x-4">
        {processedImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative aspect-square w-20 rounded-md overflow-hidden ${
              index === currentImageIndex ? 'ring-2 ring-[#2D882C]' : ''
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
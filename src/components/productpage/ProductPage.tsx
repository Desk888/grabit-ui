'use client';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Flag, MapPin, Calendar, Hash, Heart } from 'lucide-react';
import { ImageGallery } from '@/components/productpage/ImageGallery';
import { SellerInfo } from '@/components/productpage/SellerInfo';
import { ProductSpecifications } from '@/components/productpage/ProductSpecifications';

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  location: string;
  seller: {
    name: string;
    joinedDate: string;
    rating: number;
  };
  images: string[];
  specifications: Record<string, string>;
  postedDate: string;
  referenceNumber: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  
  // Mock data - replace with actual API call
  const product: ProductDetails = {
    id: '1',
    title: 'Vintage Leather Armchair',
    description: 'Beautiful vintage leather armchair in excellent condition. This piece features classic styling with brass studs and deep brown leather upholstery. Perfect for any living room or study.',
    location: 'Manchester City Centre',
    seller: {
      name: 'John Smith',
      joinedDate: 'Member since January 2024',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b'
    ],
    specifications: {
      'Condition': 'Used - Excellent',
      'Brand': 'Vintage',
      'Material': 'Genuine Leather',
      'Color': 'Dark Brown',
      'Dimensions': '80cm x 85cm x 95cm (WxDxH)'
    },
    postedDate: '2024-02-15',
    referenceNumber: 'GRB-2024-1234'
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out this ${product.title} on Grabit`,
        url: window.location.href
      });
    }
  };

  const handleContact = () => {
    window.location.href = '/inbox';
  }

  const handleReport = () => {
    window.location.href = '/help';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 inline-flex text-gray-500">
          <li className="flex items-center">
            <a href="/" className="hover:text-[#2D882C]">Home</a>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700">{product.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageGallery
          images={product.images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          title={product.title}
        />

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex space-x-4">
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Share"
              >
                <Share2 className="w-6 h-6 text-gray-500" />
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Save to Favorites"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorited ? 'text-red-500 fill-current' : 'text-gray-500'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-500">
            <MapPin className="w-5 h-5" />
            <span>{product.location}</span>
          </div>

          <SellerInfo
            name={product.seller.name}
            joinedDate={product.seller.joinedDate}
            onContact={handleContact}
          />

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
          </div>

          <ProductSpecifications specifications={product.specifications} />

          <div className="flex flex-col space-y-2 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Posted on {new Date(product.postedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>Ad Reference: {product.referenceNumber}</span>
            </div>
          </div>

          <button
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-2"
          >
            <Flag className="w-4 h-4" onClick={handleReport}/>
            <span>Report this ad</span>
          </button>
        </div>
      </div>
    </div>
  );
}
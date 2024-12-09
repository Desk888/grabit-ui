import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Heart } from 'lucide-react'

interface Product {
  id: number
  title: string
  category: string
  condition: string
  location: string
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border max-w-xs cursor-pointer">
      <Link href={`/product/${product.id}`} className="block">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={150}
          className="w-full h-36 object-cover"
        />
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
};


// export default function Hero() {
//     return (
//       <div className="bg-green-50 py-12 mb-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-5xl font-bold text-[#2D882C] mb-4">
//            Old Items, New Homes.
//           </h1>
//           <p className="text-lg text-gray-700">
//           Grabit connects eco-conscious individuals to give and receive free items, promoting a sustainable and waste-free future. Join us to share, reuse, and reduce waste in your community.
//           </p>
//         </div>
//       </div>
//     )
//   }


import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-green-50 py-12 mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-[#2D882C] mb-4">
              Old Items, New Homes.
            </h1>
            <p className="text-lg text-gray-700">
            Grabit connects eco-conscious individuals to give and receive free items, promoting a sustainable and waste-free future. Join us to share, reuse, and reduce waste in your community.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Recycling clothes and items"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


'use client';

import CreateAdForm from '../../components/layout/ads/CreateAdForm'
import CreateAdHero from '@/components/layout/ads/CreateAdHero'
import AutoScroll from '@/components/layout/AutoScroll'
import { DonationHero } from '@/components/layout/home/DonationHero'

export default function CreateAdPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="flex gap-8 items-start">
          {/* Main Form Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-white px-6 py-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Create a New Ad</h1>
            </div>
            <div className="p-6">
              <CreateAdForm/>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hidden lg:block w-1/3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden sticky top-4">
              <CreateAdHero />
            </div>
          </div>
        </div>
      </main>
      <AutoScroll />
      <DonationHero />
    </div>
  )
}


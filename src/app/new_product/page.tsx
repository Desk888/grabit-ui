'use client'

import CreateAdForm from '../../components/layout/CreateAdForm'
import CreateAdHero from '@/components/layout/CreateAdHero'
import AutoScroll from '@/components/layout/AutoScroll'
import LivePreview from '@/components/layout/LivePreview'
import { useState } from 'react'

export default function CreateAdPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#2F892C] px-6 py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Create a New Ad</h1>
          </div>
          <CreateAdHero />
          <div className="p-6">
            <CreateAdForm/>
          </div>
        </div>
      </main>
      <AutoScroll />
    </div>
  )
}


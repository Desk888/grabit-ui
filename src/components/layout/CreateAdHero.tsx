import { Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function CreateAdHero() {
  return (
    <Card className="bg-gradient-to-r from-green-50 to-green-100 border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-green-500 rounded-full p-2">
            <Info className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black-800 mb-2">Tips for creating a great ads:</h2>
            <p className="text-black-700">
              Selling on Grabit is easy and free! Follow these steps to create your ad:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-black-700">
              <li>Add clear photos of your item (max 5)</li>
              <li>Write a descriptive title and detailed description</li>
              <li>Set your location and contact details</li>
              <li>Choose the right category and condition</li>
              <li>Review your ad and submit!</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


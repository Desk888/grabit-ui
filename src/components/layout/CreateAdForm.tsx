'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Camera, X, Upload } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type FormData = {
  title: string
  description: string
  category: string
  city: string
  postcode: string
  condition: string
  phoneNumber: string
  email: string
}

const categories = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Sports', 'Other']
const conditions = ['Used - Fair', 'Used - Good', 'Used - Excellent', 'Brand New']

export default function CreateAdForm() {
  const [images, setImages] = useState<string[]>([])
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data, images)
    // Here you would typically send the data to your backend
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0 && images.length < 5) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages(prev => [...prev, ...newImages].slice(0, 5))
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <Label htmlFor="images" className="text-lg font-semibold mb-2 block">Photos (max 5)</Label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <img src={img} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            {images.length < 5 && (
              <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                <Upload className="text-gray-400 mb-2" size={24} />
                <span className="text-sm text-gray-500">Upload Image</span>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium">Title</Label>
            <Controller
              name="title"
              control={control}
              rules={{ 
                required: 'Title is required',
                maxLength: {
                  value: 30,
                  message: 'Title cannot exceed 30 characters'
                }
              }}
              render={({ field }) => (
                <>
                  <Input 
                    id="title" 
                    {...field} 
                    className="mt-1"
                    maxLength={30}
                    onChange={(e) => {
                      if (e.target.value.length <= 30) {
                        field.onChange(e);
                      }
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">{field.value?.length || 0}/30</p>
                </>
              )}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <Label htmlFor="description" className="text-sm font-medium">Description</Label>
            <Controller
              name="description"
              control={control}
              rules={{ 
                required: 'Description is required',
                maxLength: {
                  value: 300,
                  message: 'Description cannot exceed 200 characters'
                }
              }}
              render={({ field }) => (
                <>
                  <Textarea 
                    id="description" 
                    {...field} 
                    className="mt-1"
                    maxLength={300}
                    onChange={(e) => {
                      if (e.target.value.length <= 300) {
                        field.onChange(e);
                      }
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">{field.value?.length || 0}/300</p>
                </>
              )}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="category" className="text-sm font-medium">Category</Label>
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="condition" className="text-sm font-medium">Condition</Label>
              <Controller
                name="condition"
                control={control}
                rules={{ required: 'Condition is required' }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="city" className="text-sm font-medium">City</Label>
              <Controller
                name="city"
                control={control}
                rules={{ required: 'City is required' }}
                render={({ field }) => <Input id="city" {...field} className="mt-1" />}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <Label htmlFor="postcode" className="text-sm font-medium">Postcode</Label>
              <Controller
                name="postcode"
                control={control}
                rules={{ required: 'Postcode is required' }}
                render={({ field }) => <Input id="postcode" {...field} className="mt-1" />}
                
              />
              {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>}
            </div>
          </div>

          <Separator />

          <div>
            <Label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</Label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: 'Phone number is required' }}
              render={({ field }) => <Input id="phoneNumber" type="tel" {...field} className="mt-1" />}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => <Input id="email" type="email" {...field} className="mt-1" />}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button type="submit" className="w-1/3 bg-[#2F892C] text-white">Create Ad</Button>
      </div>
    </form>
  )
}

